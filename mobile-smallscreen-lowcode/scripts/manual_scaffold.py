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


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="生成 IOC 低码组件手工骨架")
    parser.add_argument("component_name", help="组件英文名，必须为 PascalCase")
    parser.add_argument("--display-name", default="低码组件", help="组件中文名")
    parser.add_argument("--target-root", default=".", help="项目根目录，默认当前目录")
    parser.add_argument("--suffix", default="Converted", help="目录冲突时追加的后缀")
    parser.add_argument("--force", action="store_true", help="目录已存在时直接复用，不自动改名")
    parser.add_argument("--write-report", action="store_true", help="同时生成 conversion_report.md")
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


def config_js() -> str:
    return """import base from './base';
import boxOptions from '../plugin/boxoptions/config';

export default {
    base,
    dimension: {
        width: '100%',
        height: 'auto'
    },
    configuration: [
        {
            name: 'options',
            value: [
                boxOptions,
                {
                    displayName: '内容配置',
                    name: 'contentConfig',
                    value: [
                        {
                            displayName: '标题',
                            name: 'title',
                            type: 'text',
                            value: '组件标题'
                        },
                        {
                            displayName: '说明',
                            name: 'description',
                            type: 'text',
                            value: '请根据业务需求补充组件内容'
                        },
                        {
                            displayName: '按钮文案',
                            name: 'submitText',
                            type: 'text',
                            value: '提交'
                        }
                    ]
                },
                {
                    displayName: '定位设置',
                    name: 'positionSetting',
                    tip: 'css中的定位',
                    value: [
                        {
                            displayName: '开启定位',
                            name: 'isOpen',
                            type: 'boolean',
                            value: false
                        },
                        {
                            displayName: 'left',
                            name: 'left',
                            type: 'text',
                            value: '0'
                        },
                        {
                            displayName: 'top',
                            name: 'top',
                            type: 'text',
                            value: '0'
                        },
                        {
                            displayName: 'right',
                            name: 'right',
                            type: 'text',
                            value: ''
                        },
                        {
                            displayName: 'bottom',
                            name: 'bottom',
                            type: 'text',
                            value: ''
                        }
                    ]
                }
            ]
        },
        {
            name: 'interaction',
            displayName: '交互',
            value: [
                {
                    name: 'callback',
                    displayName: '回调参数',
                    type: 'array',
                    dynamic: true,
                    value: [],
                    template: {
                        name: 'callback',
                        displayName: '参数',
                        value: [
                            {
                                name: 'param',
                                displayName: '变量名',
                                type: 'text',
                                value: ''
                            },
                            {
                                name: 'field',
                                displayName: '字段值',
                                type: 'text',
                                value: ''
                            }
                        ]
                    }
                },
                {
                    name: 'event',
                    displayName: '事件（新）',
                    type: 'array',
                    value: [
                        {
                            name: 'onMounted',
                            displayName: 'onMounted事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteMounted_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onMounted事件:", e)'
                            }
                        },
                        {
                            name: 'onClick',
                            displayName: 'onClick事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnClick_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onClick事件:", e)'
                            }
                        },
                        {
                            name: 'onSubmit',
                            displayName: 'onSubmit事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnSubmit_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onSubmit事件:", e)'
                            }
                        },
                        {
                            name: 'onUploadChange',
                            displayName: 'onUploadChange事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnUploadChange_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onUploadChange事件:", e)'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
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
        <div class="{block}__header">
            <div class="{block}__title">{{{{ contentConfig.title || baseInfo.name }}}}</div>
            <div class="{block}__description">{{{{ contentConfig.description }}}}</div>
        </div>
        <div class="{block}__list">
            <div
                v-for="(item, index) in myData"
                :key="item.id || index"
                class="{block}__item"
                @click="handleClick(item, index)"
            >
                <em-image
                    class="{block}__item-image"
                    width="72"
                    height="72"
                    fit="cover"
                    :src="item.image"
                />
                <div class="{block}__item-content">
                    <div class="{block}__item-title">{{{{ item.title }}}}</div>
                    <div class="{block}__item-subtitle">{{{{ item.subtitle }}}}</div>
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
        <em-button type="danger" block round @click="handleSubmit">
            {{{{ contentConfig.submitText || '提交' }}}}
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
        contentConfig() {{
            return (this.config && this.config.options && this.config.options.contentConfig) || {{}};
        }},
        positionSetting() {{
            const setting = (this.config && this.config.options && this.config.options.positionSetting) || {{}};

            if (setting.isOpen) {{
                setting.position = 'relative';
            }} else {{
                setting.position = 'static';
            }}

            return setting;
        }}
    }},
    mounted() {{
        this.eventGenerate('onMounted', {{
            data: this.myData
        }});
    }},
    methods: {{
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
    write_file(target_dir / "js" / "config.js", config_js())
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
