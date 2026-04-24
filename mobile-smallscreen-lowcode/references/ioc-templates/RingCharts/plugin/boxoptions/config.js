export default {
    displayName: '通用容器样式',
    name: 'boxoptions',
    value: [
        {
            displayName: '背景颜色',
            name: 'background',
            value: '',
            type: 'color'
        },
        {
            displayName: '外边距',
            name: 'margin',
            value: '0 15px',
            tip: '上 右 下 左',
            type: 'text'
        },
        {
            displayName: '内边距',
            name: 'padding',
            value: '',
            tip: '上 右 下 左',
            type: 'text'
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
            value: 'auto',
            type: 'select',
            options: [
                {
                    name: '自适应',
                    value: 'auto'
                },
                {
                    name: '内容修剪，溢出内容滚动显示',
                    value: 'scroll'
                },
                {
                    name: '内容修剪，溢出内容不显示',
                    value: 'hidden'
                },
                {
                    name: '内容不修剪，呈现在元素框外',
                    value: 'visible'
                }
            ]
        }
    ]
};
