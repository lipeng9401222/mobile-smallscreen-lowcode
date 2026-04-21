<template>
    <div>
        <!-- #ifndef APP-PLUS -->
        <em-collapse v-model="activeNames">
            <em-collapse-item v-for="(v, i) in menu" :title="v.title" :name="i + 1" :key="i">
                <em-cell-group :border="false">
                    <em-cell
                        v-for="(item, index) in v.children"
                        :key="index"
                        :url="item.to"
                        is-link
                        :title="item.title"
                        :border="index !== v.children.length - 1"
                    ></em-cell>
                </em-cell-group>
            </em-collapse-item>
        </em-collapse>
        <!-- #endif -->
        <!-- #ifdef APP-PLUS -->
        <list class="list">
            <cell v-for="(v, i) in menu" :title="v.title" :name="i + 1" :key="i">
                <list>
                    <cell class="cell" v-for="(item, index) in v.children" :key="index" @click="onClick(item)">
                        <text class="cell-text">
                            {{ item.title }}
                        </text>
                    </cell>
                </list>
            </cell>
        </list>
        <!-- #endif -->
    </div>
</template>

<script lang="ts">
export default {
    name: 'Navigation',
    data() {
        return {
            activeNames: [1, 2, 3, 4, 5, 6, 7],
            menu: [
                {
                    title: '基础组件',
                    children: [
                        {
                            title: 'Button 按钮',
                            to: 'examples/em-button'
                        },
                        {
                            title: 'Cell 单元格',
                            to: 'examples/em-cell'
                        },
                        {
                            title: 'Icon 图标',
                            to: 'examples/em-icon'
                        },
                        {
                            title: 'Image 图片',
                            to: 'examples/em-image'
                        },
                        {
                            title: 'Layout 布局',
                            to: 'examples/em-layout'
                        },
                        {
                            title: 'Popup 弹出层',
                            to: 'examples/em-popup'
                        },
                        {
                            title: 'Toast 轻提示',
                            to: 'examples/em-toast'
                        },
                        {
                            title: 'Skeleton 骨架屏',
                            to: 'examples/em-skeleton'
                        }
                    ]
                },
                {
                    title: '表单组件',
                    children: [
                        {
                            title: 'Calendar 日历',
                            to: 'examples/em-calendar'
                        },
                        {
                            title: 'Easycalendar 日历',
                            to: 'examples/em-easy-calendar'
                        },
                        {
                            title: 'Cascader 级联选择',
                            to: 'examples/em-cascader'
                        },
                        {
                            title: 'Checkbox 复选框',
                            to: 'examples/em-checkbox'
                        },
                        {
                            title: 'DatePicker 时间选择',
                            to: 'examples/em-date-picker'
                        },
                        {
                            title: 'Field 输入框',
                            to: 'examples/em-field'
                        },
                        {
                            title: 'Form 表单',
                            to: 'examples/em-form'
                        },
                        {
                            title: 'NumberKeyboard 数字键盘',
                            to: 'examples/em-number-keyboard'
                        },
                        {
                            title: 'PasswordInput 密码输入框',
                            to: 'examples/em-password-input'
                        },
                        {
                            title: 'Picker 选择器',
                            to: 'examples/em-picker'
                        },
                        {
                            title: 'Radio 单选框',
                            to: 'examples/em-radio'
                        },
                        {
                            title: 'Rate 评分',
                            to: 'examples/em-rate'
                        },
                        {
                            title: 'Search 搜索',
                            to: 'examples/em-search'
                        },
                        {
                            title: 'Slider 滑块',
                            to: 'examples/em-slider'
                        },
                        {
                            title: 'Stepper 步进器',
                            to: 'examples/em-stepper'
                        },
                        {
                            title: 'Switch 开关',
                            to: 'examples/em-switch'
                        },
                        {
                            title: 'SwitchCell 开关单元格',
                            to: 'examples/em-switch-cell'
                        },
                        {
                            title: 'Uploader 图片上传',
                            to: 'examples/em-uploader'
                        }
                    ]
                },
                {
                    title: '反馈组件',
                    children: [
                        {
                            title: 'Actionsheet 上拉菜单',
                            to: 'examples/em-actionsheet'
                        },
                        {
                            title: 'Dialog 弹出框',
                            to: 'examples/em-dialog'
                        },
                        {
                            title: 'DropdownMenu 下拉菜单',
                            to: 'examples/em-dropdown-menu'
                        },
                        {
                            title: 'Loading 加载',
                            to: 'examples/em-loading'
                        },
                        {
                            title: 'Notify 消息通知',
                            to: 'examples/em-notify'
                        },
                        {
                            title: 'Overlay 遮罩层',
                            to: 'examples/em-overlay'
                        },
                        // {
                        //     title: 'PullDown 下拉刷新',
                        //     to: '/pulldown'
                        // },
                        // {
                        //     title: 'Pulltorefresh 下拉刷新上拉加载',
                        //     to: '/pulltorefresh'
                        // },
                        // {
                        //     title: 'PullUp 上拉加载',
                        //     to: '/pullup'
                        // },
                        {
                            title: 'Minirefresh 下拉刷新上拉加载',
                            to: 'examples/em-minirefresh'
                        },
                        {
                            title: 'ShareSheet 分享面板',
                            to: '/sharesheet'
                        },
                        {
                            title: 'SwipeCell 滑动单元格',
                            to: 'examples/em-swipe-cell'
                        }
                    ]
                },
                {
                    title: '展示组件',
                    children: [
                        {
                            title: 'Badge 徽标',
                            to: 'examples/em-badge'
                        },
                        {
                            title: 'Circle 环形进度条',
                            to: 'examples/em-circle'
                        },
                        {
                            title: 'Collapse 折叠面板',
                            to: 'examples/em-collapse'
                        },
                        {
                            title: 'CountDown 倒计时',
                            to: 'examples/em-count-down'
                        },
                        {
                            title: 'Divider 分割线',
                            to: 'examples/em-divider'
                        },
                        {
                            title: 'Empty 空状态',
                            to: 'examples/em-empty'
                        },
                        {
                            title: 'ImagePreview 图片预览',
                            to: 'examples/em-image-preview'
                        },
                        {
                            title: 'Lazyload 懒加载',
                            to: 'examples/em-lazy-component'
                        },
                        {
                            title: 'NoticeBar 通告栏',
                            to: 'examples/em-notice-bar'
                        },
                        {
                            title: 'Popover 气泡框',
                            to: 'examples/em-popover'
                        },
                        {
                            title: 'Panel 面板',
                            to: 'examples/em-panel'
                        },
                        {
                            title: 'Progress 进度条',
                            to: 'examples/em-progress'
                        },
                        {
                            title: 'Steps 步骤条',
                            to: 'examples/em-steps'
                        },
                        {
                            title: 'Sticky 粘性布局',
                            to: 'examples/em-sticky'
                        },
                        {
                            title: 'Swipe 轮播',
                            to: 'examples/em-swipe'
                        },
                        {
                            title: 'Tag 标记',
                            to: 'examples/em-tag'
                        },
                        {
                            title: 'Map 地图组件',
                            to: 'examples/em-map'
                        },
                        {
                            title: 'Dragsort 拖拽排序',
                            to: 'examples/em-dragsort'
                        },
                        {
                            title: 'Table 表格',
                            to: 'examples/em-table'
                        }
                    ]
                },
                {
                    title: '功能组件',
                    children: [
                        {
                            title: 'VerifyCode 验证码',
                            to: 'examples/em-verify-code'
                        },
                        {
                            title: 'Imagescale 图片裁剪',
                            to: 'examples/em-image-scale'
                        },
                        {
                            title: 'Qrcode 二维码',
                            to: 'examples/em-qrcode'
                        }
                    ]
                },
                {
                    title: '导航组件',
                    children: [
                        {
                            title: 'Grid 宫格',
                            to: 'examples/em-grid'
                        },
                        {
                            title: 'IndexBar 索引栏',
                            to: 'examples/em-indexbar'
                        },
                        {
                            title: 'Badge 徽章',
                            to: '/badge'
                        },
                        {
                            title: 'Header 导航栏',
                            to: 'examples/em-header'
                        },
                        {
                            title: 'Pagination 分页',
                            to: '/pagination'
                        },
                        {
                            title: 'Sidebar 侧边导航',
                            to: 'examples/em-sidebar'
                        },
                        {
                            title: 'Tab 标签页',
                            to: 'examples/em-tab'
                        },
                        {
                            title: 'Tabbar 标签页',
                            to: 'examples/em-tabbar'
                        },
                        {
                            title: 'TreeSelect 分类选择',
                            to: 'examples/em-tree-select'
                        },
                        {
                            title: 'Pagination 分页',
                            to: 'examples/em-pagination'
                        }
                    ]
                },
                {
                    title: '业务组件',
                    children: [
                        {
                            title: 'SelectPerson 选择人员',
                            to: 'examples/em-select-person'
                        },
                        {
                            title: 'Area 省市区选择',
                            to: 'examples/em-area'
                        },
                        {
                            title: 'Chart 图表',
                            to: 'examples/em-chart'
                        },
                        {
                            title: 'EJSUI 模块',
                            to: 'examples/ejsui'
                        },
                        // #ifdef H5
                        {
                            title: 'RTC 音视频',
                            to: 'examples/em-rtc'
                        }
                        // #endif
                    ]
                }
            ]
        };
    },
    methods: {
        openPage(url) {
            uni.navigateTo({
                url
            });
        },
        onClick(item) {
            this.$router.push(item.to);
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding: 10px;
}

.component-title {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    color: #455a64;
}

.list {
    margin-top: 100px;
    flex: 1;
    height: 600px;
}
.cell {
    height: 60px;
    border-bottom: 1px solid #888;
}
.cell-text {
    font-size: 18px;
}
</style>
