/**
 * router.js无需import组件，需要path路径与vue组件名称保持匹配。
 * routers数组下有效参数只有path与style，保持与uniapp一致 https://uniapp.dcloud.io/collocation/pages.html#pages
 * 构建时会自动将模块下的路由配置合并到pages.json内
 */

let routes = [
    {
        path: 'modules/m8showcase/index',
        style: {
            navigationBarTitleText: '组件示例'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-dropdown-menu',
        style: {
            navigationBarTitleText: 'Dropdownitem 下拉菜单'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-overlay',
        style: {
            navigationBarTitleText: 'Overlay 遮罩层'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-popup',
        style: {
            navigationBarTitleText: 'Popup 遮罩层'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-toast',
        style: {
            navigationBarTitleText: 'Toast 加载'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-loading',
        style: {
            navigationBarTitleText: 'Loading 加载'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-swipe',
        style: {
            navigationBarTitleText: 'Swipe 轮播'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-dialog',
        style: {
            navigationBarTitleText: 'dialog 弹出框'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-empty',
        style: {
            navigationBarTitleText: 'Empty 空状态'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-tag',
        style: {
            navigationBarTitleText: 'Tag 标记'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-button',
        style: {
            navigationBarTitleText: 'Button 按钮'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-grid',
        style: {
            navigationBarTitleText: 'Grid 宫格'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-layout',
        style: {
            navigationBarTitleText: 'Layout 布局'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-image',
        style: {
            navigationBarTitleText: 'Image 图片'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-search',
        style: {
            navigationBarTitleText: 'Search 搜索'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-skeleton',
        style: {
            navigationBarTitleText: 'Skeleton 骨架屏'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-icon',
        style: {
            navigationBarTitleText: 'Icon 图标'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-cell',
        style: {
            navigationBarTitleText: 'Cell 单元格'
        }
    }
];
const otherRoutes = [
    // #ifdef H5
    {
        path: 'modules/m8showcase/examples/em-rtc',
        style: {
            navigationBarTitleText: 'RTC 音视频'
        }
    },
    // #endif
    {
        path: 'modules/m8showcase/examples/em-badge',
        style: {
            navigationBarTitleText: 'Badge 徽标'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-stepper',
        style: {
            navigationBarTitleText: 'Stepper 步进器'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-radio',
        style: {
            navigationBarTitleText: 'Radio 单选框'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-switch',
        style: {
            navigationBarTitleText: 'Switch 开关'
        }
    },

    {
        path: 'modules/m8showcase/examples/em-rate',
        style: {
            navigationBarTitleText: 'Rate 评分'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-slider',
        style: {
            navigationBarTitleText: 'Slider 滑块'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-notify',
        style: {
            navigationBarTitleText: 'Notify 滑块'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-gallery',
        style: {
            navigationBarTitleText: 'Gallery 轮播'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-field',
        style: {
            navigationBarTitleText: 'Field 输入框'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-checkbox',
        style: {
            navigationBarTitleText: 'Checkbox 复选框'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-collapse',
        style: {
            navigationBarTitleText: 'Collapse 折叠面板'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-map',
        style: {
            navigationBarTitleText: 'Map 地图'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-form',
        style: {
            navigationBarTitleText: 'Form 表单'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-swipe-cell',
        style: {
            navigationBarTitleText: 'swipe 滑动单元格'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-sidebar',
        style: {
            navigationBarTitleText: 'sidebar 侧边导航'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-switch-cell',
        style: {
            navigationBarTitleText: 'switchcell 开关单元格'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-header',
        style: {
            navigationBarTitleText: 'Header 导航栏'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-tree-select',
        style: {
            navigationBarTitleText: 'TreeSelect 分类选择'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-actionsheet',
        style: {
            navigationBarTitleText: 'Actionsheet 动作面板'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-notice-bar',
        style: {
            navigationBarTitleText: 'Noticebar 通告栏'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-steps',
        style: {
            navigationBarTitleText: 'Steps 步骤'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-image-preview',
        style: {
            navigationBarTitleText: 'ImagePreview 图片预览'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-tab',
        style: {
            navigationBarTitleText: 'Tab 标签页'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-cascader',
        style: {
            navigationBarTitleText: 'Cascader 级联选择'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-minirefresh',
        style: {
            navigationBarTitleText: 'Minirefresh 下拉刷新'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-number-keyboard',
        style: {
            navigationBarTitleText: 'NumberKeyboard 数字键盘'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-picker',
        style: {
            navigationBarTitleText: 'Picker 选择器'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-sticky',
        style: {
            navigationBarTitleText: 'Sticky 粘性布局'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-password-input',
        style: {
            navigationBarTitleText: 'passwordinput 密码输入框'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-uploader',
        style: {
            navigationBarTitleText: 'Uploader 上传'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-area',
        style: {
            navigationBarTitleText: 'Area 省市区选择'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-calendar',
        style: {
            navigationBarTitleText: 'Calendar 日历'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-easy-calendar',
        style: {
            navigationBarTitleText: 'Easycalendar 简单日历'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-lazy-component',
        style: {
            navigationBarTitleText: 'Lazyload 懒加载'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-progress',
        style: {
            navigationBarTitleText: 'Progress 进度条'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-verify-code',
        style: {
            navigationBarTitleText: 'VerifyCode 验证码'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-circle',
        style: {
            navigationBarTitleText: 'Circle 环形进度条'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-count-down',
        style: {
            navigationBarTitleText: 'CountDown 倒计时'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-popover',
        style: {
            navigationBarTitleText: 'popover 气泡框'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-divider',
        style: {
            navigationBarTitleText: 'Divider 分割线'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-panel',
        style: {
            navigationBarTitleText: 'Panel 面板'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-date-picker',
        style: {
            navigationBarTitleText: 'DatePicker 日期选择'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-indexbar',
        style: {
            navigationBarTitleText: 'Indexbar 索引栏'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-tabbar',
        style: {
            navigationBarTitleText: 'Tabbar 标签栏'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-image-scale',
        style: {
            navigationBarTitleText: 'Imagescale 图片裁剪'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-select-person',
        style: {
            navigationBarTitleText: 'SelectPerson 选择人员'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-qrcode',
        style: {
            navigationBarTitleText: 'Qrcode 二维码'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-dragsort',
        style: {
            navigationBarTitleText: 'Dragsort 拖拽排序'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-chart',
        style: {
            navigationBarTitleText: 'Chart 图表'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-table',
        style: {
            navigationBarTitleText: 'Table 表格'
        }
    },
    {
        path: 'modules/m8showcase/examples/em-pagination',
        style: {
            navigationBarTitleText: 'Pagination 分页'
        }
    }
];

if (process.env.UNI_PLATFORM !== 'app-plus') {
    routes = routes.concat(otherRoutes);
}

const options = {
    // 该模块是否自动分包处理
    autoSubPackages: true,
    /* 该模块是否为首页模块
     * 开启后路由信息会放在pages.json中的pages数组的第一个位置
     * 定义在routes对象中的第一个模块地址为应用默认首页
     * 所有模块仅支持一个首页模块
     * autoSubPackages为true时，该值无效 */
    isFirstModule: false
};

// 导出路由文件
export default { routes, options };
