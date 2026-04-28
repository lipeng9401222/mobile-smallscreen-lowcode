#!/usr/bin/env python3
"""在无法执行 ioc create 时，生成最小 IOC 低码组件骨架。"""

from __future__ import annotations

import argparse
import re
from pathlib import Path


BOX_OPTIONS_CONFIG = """export default {
    displayName: '通用容器样式',
    name: 'boxOptions',
    value: [
        {
            displayName: '背景颜色',
            name: 'background',
            value: '',
            type: 'color'
        },
        {
            displayName: '盒子间距',
            name: 'boxmodel',
            tip: '设置盒子的内外间距',
            type: 'boxmodel',
            value: [
                { name: 'marginTop', value: '0' },
                { name: 'marginRight', value: '0' },
                { name: 'marginBottom', value: '0' },
                { name: 'marginLeft', value: '0' },
                { name: 'paddingTop', value: '0' },
                { name: 'paddingRight', value: '0' },
                { name: 'paddingBottom', value: '0' },
                { name: 'paddingLeft', value: '0' }
            ]
        },
        {
            displayName: '宽度',
            name: 'width',
            value: '',
            type: 'text'
        },
        {
            displayName: '高度',
            name: 'height',
            value: '',
            type: 'text'
        },
        {
            displayName: '圆角',
            name: 'borderRadius',
            value: '',
            type: 'text'
        },
        {
            displayName: '内容显示',
            name: 'overflow',
            value: 'hidden',
            type: 'select',
            options: [
                { name: '自适应', value: 'auto' },
                { name: '内容修剪，溢出内容滚动显示', value: 'scroll' },
                { name: '内容修剪，溢出内容不显示', value: 'hidden' },
                { name: '内容不修剪，呈现在元素框外', value: 'visible' }
            ]
        }
    ]
};
"""

EVENT_GENERATE = """import eventGenerate from '@epoint-mrc/vue-cli-plugin-mc/src/mccontext/eventgenerate.js';

export default {
    mixins: [eventGenerate]
};
"""


PRESET_CHOICES = ("card", "form", "list", "sheet", "chart")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="生成 IOC 低码组件手工骨架")
    parser.add_argument("component_name", help="组件英文名，必须为 PascalCase")
    parser.add_argument("--display-name", default="低码组件", help="组件中文名")
    parser.add_argument("--target-root", default=".", help="项目根目录，默认当前目录")
    parser.add_argument("--suffix", default="Converted", help="目录冲突时追加的后缀")
    parser.add_argument("--force", action="store_true", help="目录已存在时直接复用，不自动改名")
    parser.add_argument("--write-report", action="store_true", help="同时生成 conversion_report.md")
    parser.add_argument(
        "--preset",
        choices=PRESET_CHOICES,
        default="card",
        help="组件骨架预设：card=列表+表单卡片(默认)，form=纯表单，list=纯列表，sheet=弹框，chart=图表",
    )
    return parser.parse_args()


def sanitize_component_name(raw: str) -> str:
    cleaned = re.sub(r"[^A-Za-z0-9]+", " ", raw).strip()
    if not cleaned:
        raise ValueError("组件名不能为空")
    return "".join(part[:1].upper() + part[1:] for part in cleaned.split())


def resolve_target_dir(root: Path, component_name: str, suffix: str, force: bool) -> tuple[str, Path]:
    card_root = root / "src" / "components" / "card_components"
    card_root.mkdir(parents=True, exist_ok=True)
    target = card_root / component_name
    if force or not target.exists():
        return component_name, target
    fallback_name = f"{component_name}{suffix}"
    fallback = card_root / fallback_name
    index = 2
    while fallback.exists():
        fallback_name = f"{component_name}{suffix}{index}"
        fallback = card_root / fallback_name
        index += 1
    return fallback_name, fallback


def write_file(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.rstrip() + "\n", encoding="utf-8")


def base_js(display_name: str, component_name: str) -> str:
    return f"""export default {{
    name: '{display_name}',
    module_name: '{component_name}',
    version: '0.1.0'
}};
"""


EVENT_TEMPLATE = """                        {{
                            name: '{event}',
                            displayName: '{display}',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {{
                                name: 'templete_{event}_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log(\\"{event}事件:\\", e)'
                            }}
                        }}"""


PRESET_EVENTS: dict = {
    "card": [
        ("onMounted", "onMounted事件"),
        ("onClick", "卡片整体点击"),
        ("onItemClick", "列表条目点击"),
        ("onSubmit", "提交按钮点击"),
        ("onUploadChange", "附件上传变化"),
    ],
    "form": [
        ("onMounted", "onMounted事件"),
        ("onChange", "表单值变化"),
        ("onSubmit", "提交表单"),
        ("onReset", "重置表单"),
        ("onUploadChange", "附件上传变化"),
    ],
    "list": [
        ("onMounted", "onMounted事件"),
        ("onItemClick", "条目点击"),
        ("onTabChange", "Tab 切换"),
        ("onLoadMore", "加载更多"),
        ("onDelete", "条目删除"),
    ],
    "sheet": [
        ("onMounted", "onMounted事件"),
        ("onOpen", "打开弹框"),
        ("onSelect", "点击内容项"),
        ("onCancel", "点击取消"),
        ("onClose", "关闭弹框"),
    ],
    "chart": [
        ("onMounted", "onMounted事件"),
        ("onChartReady", "图表渲染完成"),
        ("onChartClick", "图表点击"),
    ],
}


PRESET_BUSINESS_GROUPS: dict = {
    "card": [
        """                {
                    displayName: '全局样式',
                    name: 'globalStyleConfig',
                    value: [
                        { displayName: '页面背景色', name: 'pageBgColor', type: 'color', value: '#f5f5f5' },
                        { displayName: '卡片背景色', name: 'cardBgColor', type: 'color', value: '#ffffff' },
                        { displayName: '主色', name: 'primaryColor', type: 'color', value: '#2196f3' },
                        { displayName: '强调色', name: 'accentColor', type: 'color', value: '#ff5252' },
                        { displayName: '卡片圆角(px)', name: 'cardBorderRadius', type: 'number', value: 12 },
                        { displayName: '卡片间距(px)', name: 'cardGap', type: 'number', value: 12 },
                        { displayName: '卡片内边距(px)', name: 'cardPadding', type: 'number', value: 16 },
                        { displayName: '显示阴影', name: 'showShadow', type: 'boolean', value: false }
                    ]
                },
                {
                    displayName: '标题',
                    name: 'titleConfig',
                    value: [
                        { displayName: '标题文案', name: 'title', type: 'text', value: '组件标题' },
                        { displayName: '显示标题', name: 'showTitle', type: 'boolean', value: true },
                        { displayName: '标题颜色', name: 'titleColor', type: 'color', value: '#333333' },
                        { displayName: '标题字号(px)', name: 'titleFontSize', type: 'number', value: 16 }
                    ]
                },
                {
                    displayName: '说明',
                    name: 'descriptionConfig',
                    value: [
                        { displayName: '说明文案', name: 'description', type: 'text', value: '请根据业务需求补充组件内容' },
                        { displayName: '显示说明', name: 'showDescription', type: 'boolean', value: true },
                        { displayName: '说明颜色', name: 'descriptionColor', type: 'color', value: '#999999' },
                        { displayName: '说明字号(px)', name: 'descriptionFontSize', type: 'number', value: 12 }
                    ]
                },
                {
                    displayName: '列表图片',
                    name: 'listImageConfig',
                    value: [
                        { displayName: '展示图片', name: 'showImage', type: 'boolean', value: true },
                        { displayName: '图片宽度(px)', name: 'imageWidth', type: 'number', value: 72 },
                        { displayName: '图片高度(px)', name: 'imageHeight', type: 'number', value: 72 },
                        {
                            displayName: '图片填充', name: 'imageFit', type: 'select', value: 'cover',
                            options: [
                                { name: '裁剪填充', value: 'cover' },
                                { name: '完整显示', value: 'contain' },
                                { name: '拉伸填充', value: 'fill' }
                            ]
                        },
                        { displayName: '封面图', name: 'coverImage', type: 'uploadimage', value: '', tip: '支持jpg、png、svg格式' }
                    ]
                },
                {
                    displayName: '列表条目',
                    name: 'listItemConfig',
                    value: [
                        { displayName: '展示副标题', name: 'showSubtitle', type: 'boolean', value: true },
                        { displayName: '条目间距(px)', name: 'itemGap', type: 'number', value: 12 }
                    ]
                },
                {
                    displayName: '提交按钮',
                    name: 'submitConfig',
                    value: [
                        { displayName: '按钮文案', name: 'submitText', type: 'text', value: '提交' },
                        { displayName: '显示提交按钮', name: 'showSubmit', type: 'boolean', value: true }
                    ]
                },
                {
                    displayName: '空态与通用',
                    name: 'emptyConfig',
                    value: [
                        { displayName: '空态文案', name: 'emptyText', type: 'text', value: '暂无数据' }
                    ]
                }"""
    ],
    "form": [
        """                {
                    displayName: '表单内容',
                    name: 'contentConfig',
                    value: [
                        { displayName: '表单标题', name: 'title', type: 'text', value: '表单标题' },
                        { displayName: '显示标题', name: 'showTitle', type: 'boolean', value: true },
                        { displayName: '提交按钮文案', name: 'submitText', type: 'text', value: '提交' },
                        { displayName: '重置按钮文案', name: 'resetText', type: 'text', value: '重置' },
                        { displayName: '显示重置按钮', name: 'showReset', type: 'boolean', value: false }
                    ]
                },
                {
                    displayName: '字段配置',
                    name: 'fieldsConfig',
                    value: [
                        {
                            displayName: '字段列表',
                            name: 'fields',
                            type: 'array',
                            dynamic: true,
                            value: [
                                {
                                    name: 'field_1',
                                    displayName: '字段1',
                                    value: [
                                        { displayName: '标签', name: 'label', type: 'text', value: '名称' },
                                        { displayName: '字段key', name: 'key', type: 'text', value: 'name' },
                                        { displayName: '占位符', name: 'placeholder', type: 'text', value: '请输入名称' },
                                        {
                                            displayName: '类型', name: 'fieldType', type: 'select', value: 'text',
                                            options: [
                                                { name: '文本', value: 'text' },
                                                { name: '多行文本', value: 'textarea' },
                                                { name: '数字', value: 'number' },
                                                { name: '开关', value: 'switch' },
                                                { name: '上传', value: 'upload' }
                                            ]
                                        },
                                        { displayName: '必填', name: 'required', type: 'boolean', value: false }
                                    ]
                                }
                            ],
                            template: {
                                name: 'field',
                                displayName: '字段',
                                value: [
                                    { displayName: '标签', name: 'label', type: 'text', value: '' },
                                    { displayName: '字段key', name: 'key', type: 'text', value: '' },
                                    { displayName: '占位符', name: 'placeholder', type: 'text', value: '' },
                                    {
                                        displayName: '类型', name: 'fieldType', type: 'select', value: 'text',
                                        options: [
                                            { name: '文本', value: 'text' },
                                            { name: '多行文本', value: 'textarea' },
                                            { name: '数字', value: 'number' },
                                            { name: '开关', value: 'switch' },
                                            { name: '上传', value: 'upload' }
                                        ]
                                    },
                                    { displayName: '必填', name: 'required', type: 'boolean', value: false }
                                ]
                            }
                        }
                    ]
                },
                {
                    displayName: '样式配置',
                    name: 'styleConfig',
                    value: [
                        { displayName: '主色', name: 'primaryColor', type: 'color', value: '#2196f3' },
                        { displayName: '标签颜色', name: 'labelColor', type: 'color', value: '#333333' },
                        { displayName: '标签字号(px)', name: 'labelFontSize', type: 'number', value: 14 }
                    ]
                }"""
    ],
    "list": [
        """                {
                    displayName: '内容配置',
                    name: 'contentConfig',
                    value: [
                        { displayName: '列表标题', name: 'title', type: 'text', value: '列表' },
                        { displayName: '显示标题', name: 'showTitle', type: 'boolean', value: true },
                        { displayName: '空态文案', name: 'emptyText', type: 'text', value: '暂无数据' },
                        { displayName: '加载中文案', name: 'loadingText', type: 'text', value: '加载中...' }
                    ]
                },
                {
                    displayName: 'Tab 配置',
                    name: 'tabConfig',
                    value: [
                        { displayName: '启用 Tab', name: 'enableTab', type: 'boolean', value: false },
                        {
                            displayName: 'Tab 列表', name: 'tabs', type: 'array', dynamic: true,
                            value: [],
                            template: {
                                name: 'tab',
                                displayName: 'Tab',
                                value: [
                                    { displayName: '名称', name: 'name', type: 'text', value: '' },
                                    { displayName: '标识', name: 'key', type: 'text', value: '' }
                                ]
                            }
                        }
                    ]
                },
                {
                    displayName: '样式配置',
                    name: 'styleConfig',
                    value: [
                        { displayName: '条目背景色', name: 'itemBgColor', type: 'color', value: '#ffffff' },
                        { displayName: '条目圆角(px)', name: 'itemRadius', type: 'number', value: 8 },
                        { displayName: '条目间距(px)', name: 'itemGap', type: 'number', value: 12 },
                        { displayName: '展示分割线', name: 'showDivider', type: 'boolean', value: true }
                    ]
                }"""
    ],
    "sheet": [
        """                {
                    displayName: '弹框内容',
                    name: 'contentConfig',
                    value: [
                        { displayName: '标题', name: 'title', type: 'text', value: '请选择' },
                        { displayName: '显示标题', name: 'showTitle', type: 'boolean', value: true },
                        { displayName: '取消按钮文案', name: 'cancelText', type: 'text', value: '取消' },
                        {
                            displayName: '内容项列表', name: 'sheetItems', type: 'array', dynamic: true,
                            value: [
                                {
                                    name: 'sheetItem_1',
                                    displayName: '内容项1',
                                    value: [
                                        { displayName: '展示文案', name: 'name', type: 'text', value: '选项1' },
                                        { displayName: '附属值', name: 'value', type: 'text', value: '1' }
                                    ]
                                }
                            ],
                            template: {
                                name: 'sheetItem',
                                displayName: '内容项',
                                value: [
                                    { displayName: '展示文案', name: 'name', type: 'text', value: '' },
                                    { displayName: '附属值', name: 'value', type: 'text', value: '' }
                                ]
                            }
                        }
                    ]
                },
                {
                    displayName: '样式配置',
                    name: 'styleConfig',
                    value: [
                        { displayName: '主色', name: 'primaryColor', type: 'color', value: '#2196f3' },
                        { displayName: '内容字号(px)', name: 'itemFontSize', type: 'number', value: 16 },
                        { displayName: '取消文字颜色', name: 'cancelColor', type: 'color', value: '#999999' }
                    ]
                }"""
    ],
    "chart": [
        """                {
                    displayName: '图表配置',
                    name: 'chartConfig',
                    value: [
                        { displayName: '标题', name: 'title', type: 'text', value: '图表标题' },
                        { displayName: '显示标题', name: 'showTitle', type: 'boolean', value: true },
                        { displayName: '图表高度(px)', name: 'chartHeight', type: 'number', value: 240 },
                        {
                            displayName: '图表类型', name: 'chartType', type: 'select', value: 'bar',
                            options: [
                                { name: '柱状图', value: 'bar' },
                                { name: '折线图', value: 'line' },
                                { name: '饱图', value: 'pie' },
                                { name: '环形图', value: 'ring' }
                            ]
                        },
                        { displayName: '展示图例', name: 'showLegend', type: 'boolean', value: true },
                        { displayName: '展示数据标签', name: 'showLabel', type: 'boolean', value: false }
                    ]
                },
                {
                    displayName: '颜色配置',
                    name: 'colorConfig',
                    value: [
                        {
                            displayName: '配色方案', name: 'palette', type: 'colors',
                            value: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de']
                        },
                        { displayName: '坐标轴颜色', name: 'axisColor', type: 'color', value: '#cccccc' },
                        { displayName: '文字颜色', name: 'textColor', type: 'color', value: '#666666' }
                    ]
                }"""
    ],
}


def _render_events(preset: str) -> str:
    events = PRESET_EVENTS.get(preset, PRESET_EVENTS["card"])
    return ",\n".join(EVENT_TEMPLATE.format(event=name, display=display) for name, display in events)


def _render_business_groups(preset: str) -> str:
    groups = PRESET_BUSINESS_GROUPS.get(preset, PRESET_BUSINESS_GROUPS["card"])
    return ",\n".join(group for group in groups)


POSITION_SETTING_BLOCK = """                {
                    displayName: '定位设置',
                    name: 'positionSetting',
                    tip: 'css中的定位',
                    value: [
                        { displayName: '开启定位', name: 'isOpen', type: 'boolean', value: false },
                        { displayName: 'left', name: 'left', type: 'text', value: '0' },
                        { displayName: 'top', name: 'top', type: 'text', value: '0' },
                        { displayName: 'right', name: 'right', type: 'text', value: '' },
                        { displayName: 'bottom', name: 'bottom', type: 'text', value: '' }
                    ]
                }"""


def config_js(preset: str = "card") -> str:
    business_groups = _render_business_groups(preset)
    events = _render_events(preset)
    return f"""import base from './base';
import boxOptions from '../plugin/boxoptions/config';

export default {{
    base,
    dimension: {{
        width: '100%',
        height: 'auto'
    }},
    configuration: [
        {{
            name: 'options',
            value: [
                boxOptions,
{business_groups},
{POSITION_SETTING_BLOCK}
            ]
        }},
        {{
            name: 'interaction',
            displayName: '交互',
            value: [
                {{
                    name: 'callback',
                    displayName: '回调参数',
                    type: 'array',
                    dynamic: true,
                    value: [],
                    template: {{
                        name: 'callback',
                        displayName: '参数',
                        value: [
                            {{ name: 'param', displayName: '变量名', type: 'text', value: '' }},
                            {{ name: 'field', displayName: '字段值', type: 'text', value: '' }}
                        ]
                    }}
                }},
                {{
                    name: 'event',
                    displayName: '事件（新）',
                    type: 'array',
                    value: [
{events}
                    ]
                }}
            ]
        }}
    ]
}};
"""


def mock_js() -> str:
    return """export default {
    data: [
        {
            id: '1',
            title: '示例商品',
            subtitle: '请在转换过程中替换为真实业务字段',
            image: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
            description: '这是一个用于手工骨架降级的默认 mock 数据'
        }
    ]
};
"""


def index_vue(component_name: str) -> str:
    block = component_name.lower()
    return f"""<template>
    <div class="epoint-component" :style="[boxOptions, boxOptions.boxmodel, positionSetting]">
        <div class="{block}__header" v-if="titleConfig.showTitle">
            <div class="{block}__title" :style="{{ color: titleConfig.titleColor, fontSize: titleConfig.titleFontSize + 'px' }}">{{{{ titleConfig.title || baseInfo.name }}}}</div>
            <div class="{block}__description" v-if="descriptionConfig.showDescription" :style="{{ color: descriptionConfig.descriptionColor, fontSize: descriptionConfig.descriptionFontSize + 'px' }}">{{{{ descriptionConfig.description }}}}</div>
        </div>
        <div class="{block}__list" :style="{{ background: globalStyleConfig.cardBgColor, borderRadius: globalStyleConfig.cardBorderRadius + 'px', padding: globalStyleConfig.cardPadding + 'px' }}">
            <div
                v-for="(item, index) in myData"
                :key="item.id || index"
                class="{block}__item"
                :style="{{ marginBottom: listItemConfig.itemGap + 'px' }}"
                @click="handleClick(item, index)"
            >
                <em-image
                    v-if="listImageConfig.showImage"
                    class="{block}__item-image"
                    :width="listImageConfig.imageWidth || 72"
                    :height="listImageConfig.imageHeight || 72"
                    :fit="listImageConfig.imageFit || 'cover'"
                    :src="item.image || coverImageUrl"
                />
                <div class="{block}__item-content">
                    <div class="{block}__item-title">{{{{ item.title }}}}</div>
                    <div class="{block}__item-subtitle" v-if="listItemConfig.showSubtitle">{{{{ item.subtitle }}}}</div>
                </div>
            </div>
        </div>
        <div class="{block}__form">
            <em-field
                v-model="form.description"
                type="textarea"
                autosize
                placeholder="请输入说明"
            />
            <div class="{block}__uploader">
                <em-uploader v-model="fileList" :after-read="afterRead" />
            </div>
        </div>
        <em-button v-if="submitConfig.showSubmit" type="danger" block round @click="handleSubmit">
            {{{{ submitConfig.submitText || '提交' }}}}
        </em-button>
    </div>
</template>

<script>
import '@boot';
import mockData from './mock/data';
import defaultConfig from './js/config';
import base from './js/base';
import eventMixin from './plugin/eventgenerate';

export default {{
    name: base.module_name,
    mixins: [eventMixin],
    props: {{
        data: {{
            type: Array,
            default: () => {{
                return mockData.data;
            }}
        }},
        config: {{
            type: Object,
            default: () => {{
                return {{
                    options: {{}}
                }};
            }}
        }},
        cdata: Object
    }},
    data() {{
        return {{
            form: {{
                description: ''
            }},
            fileList: []
        }};
    }},
    computed: {{
        baseInfo() {{
            return base;
        }},
        myData() {{
            const pdata = this.cdata && this.cdata.pdata;

            if (Array.isArray(pdata) && pdata.length > 0) {{
                return pdata;
            }}
            if (Array.isArray(this.data) && this.data.length > 0) {{
                return this.data;
            }}

            return mockData.data;
        }},
        boxOptions() {{
            const options = (this.config && this.config.options && this.config.options.boxOptions) || {{}};
            const boxmodel = options.boxmodel || {{}};

            Object.keys(boxmodel).forEach((key) => {{
                if (!isNaN(Number(boxmodel[key]))) {{
                    boxmodel[key] = boxmodel[key] + 'px';
                }}
            }});

            return options;
        }},
        positionSetting() {{
            const setting = (this.config && this.config.options && this.config.options.positionSetting) || {{}};

            if (setting.isOpen) {{
                setting.position = 'relative';
            }} else {{
                setting.position = 'static';
            }}

            return setting;
        }},
        // ---------- 按视觉元素分组的配置 ----------
        globalStyleConfig() {{
            return (this.config && this.config.options && this.config.options.globalStyleConfig) || {{}};
        }},
        titleConfig() {{
            return (this.config && this.config.options && this.config.options.titleConfig) || {{}};
        }},
        descriptionConfig() {{
            return (this.config && this.config.options && this.config.options.descriptionConfig) || {{}};
        }},
        listImageConfig() {{
            return (this.config && this.config.options && this.config.options.listImageConfig) || {{}};
        }},
        listItemConfig() {{
            return (this.config && this.config.options && this.config.options.listItemConfig) || {{}};
        }},
        submitConfig() {{
            return (this.config && this.config.options && this.config.options.submitConfig) || {{}};
        }},
        emptyConfig() {{
            return (this.config && this.config.options && this.config.options.emptyConfig) || {{}};
        }},
        // ---------- uploadimage 路径处理 ----------
        prefix() {{
            const origin = location.origin;
            let path = location.pathname;
            if (path.indexOf('/') === 0) {{
                path = path.substring(1);
            }}
            const basePath = '/' + path.split('/')[0];
            if (!this.isTest()) {{
                return origin + basePath + '/';
            }} else {{
                return 'http://218.4.136.120:8990/smallscreen-demo/';
            }}
        }},
        coverImageUrl() {{
            const cover = this.listImageConfig.coverImage;
            if (cover) {{
                return this.prefix + cover;
            }}
            return '';
        }}
    }},
    mounted() {{
        this.eventGenerate('onMounted', {{
            data: this.myData
        }});
    }},
    methods: {{
        isTest() {{
            let href = location.href;
            if (href.includes('smallscreen-demo') && href.includes('218.4.136.120:8990')) {{
                return false;
            }}
            if (
                href.includes('smallscreen-demo') ||
                href.startsWith('http://localhost') ||
                href.startsWith('http://192.168')
            ) {{
                return true;
            }}
            return false;
        }},
        handleClick(item, index) {{
            this.eventGenerate('onClick', {{
                item,
                index
            }});
        }},
        afterRead(file) {{
            this.eventGenerate('onUploadChange', {{
                file,
                fileList: this.fileList
            }});
        }},
        handleSubmit() {{
            this.eventGenerate('onSubmit', {{
                form: this.form,
                fileList: this.fileList,
                data: this.myData
            }});
        }}
    }},
    _getConfig: () => defaultConfig,
    _getMockData: () => mockData
}};
</script>

<style lang="scss" scoped>
@import './css/index.scss';
</style>
"""


def style_scss(component_name: str) -> str:
    block = component_name.lower()
    return f""".epoint-component {{
    background: #f5f5f5;
    padding: 12px;
}}

.{block}__header {{
    margin-bottom: 12px;
    padding: 16px;
    background: #ffffff;
    border-radius: 12px;
}}

.{block}__title {{
    font-size: 16px;
    font-weight: 600;
    color: #333333;
}}

.{block}__description {{
    margin-top: 6px;
    font-size: 12px;
    color: #999999;
    line-height: 1.5;
}}

.{block}__list {{
    margin-bottom: 12px;
    padding: 0 12px;
    background: #ffffff;
    border-radius: 12px;
}}

.{block}__item {{
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f2f2f2;
}}

.{block}__item:last-child {{
    border-bottom: 0;
}}

.{block}__item-image {{
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
}}

.{block}__item-content {{
    flex: 1;
    min-width: 0;
    margin-left: 12px;
}}

.{block}__item-title {{
    font-size: 14px;
    font-weight: 500;
    color: #333333;
    line-height: 1.4;
}}

.{block}__item-subtitle {{
    margin-top: 4px;
    font-size: 12px;
    color: #999999;
}}

.{block}__form {{
    margin-bottom: 12px;
    padding: 12px;
    background: #ffffff;
    border-radius: 12px;
}}

.{block}__uploader {{
    margin-top: 12px;
}}
"""


def index_js() -> str:
    return """// 构建入口，勿动
import Component from './index.vue';

if (!Component.name) {
    console.error('卡片组件vue内请定义name字段后重新构建！');
}
const install = function (Vue) {
    Vue.component(Component.name, Component);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { default as component } from './index.vue';

export default {
    install
};
"""


def build_report(component_name: str, display_name: str, target_dir: Path) -> str:
    return f"""# conversion_report

- 组件中文名：{display_name}
- 组件英文名：{component_name}
- 输出目录：{target_dir.as_posix()}
- 生成方式：手工骨架降级
- 自动化说明：当前目录缺少可执行的 ioc create/start 条件，因此未执行 npm run ioc create 和 npm run ioc start

## 待补充

1. 根据 React 源码或业务需求替换 `index.vue`
2. 根据真实字段完善 `mock/data.js`
3. 根据交互补齐 `js/config.js` 事件定义
4. 将业务图标沉淀到 `img/`
"""


def main() -> int:
    args = parse_args()
    root = Path(args.target_root).resolve()
    component_name = sanitize_component_name(args.component_name)
    final_name, target_dir = resolve_target_dir(root, component_name, args.suffix, args.force)

    directories = [
        target_dir / "css",
        target_dir / "img",
        target_dir / "js",
        target_dir / "mock",
        target_dir / "plugin" / "boxoptions",
        target_dir / "plugin" / "eventgenerate",
    ]
    for directory in directories:
        directory.mkdir(parents=True, exist_ok=True)

    write_file(target_dir / "js" / "base.js", base_js(args.display_name, final_name))
    write_file(target_dir / "js" / "config.js", config_js(args.preset))
    write_file(target_dir / "mock" / "data.js", mock_js())
    write_file(target_dir / "plugin" / "boxoptions" / "config.js", BOX_OPTIONS_CONFIG)
    write_file(target_dir / "plugin" / "eventgenerate" / "index.js", EVENT_GENERATE)
    write_file(target_dir / "index.vue", index_vue(final_name))
    write_file(target_dir / "css" / "index.scss", style_scss(final_name))
    write_file(target_dir / "index.js", index_js())
    if args.write_report:
        write_file(target_dir / "conversion_report.md", build_report(final_name, args.display_name, target_dir))

    print(str(target_dir))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
