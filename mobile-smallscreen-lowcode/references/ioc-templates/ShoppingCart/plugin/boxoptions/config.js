export default {
    displayName: '通用容器样式',
    name: 'boxOptions',
    value: [
        {
            displayName: '背景颜色',
            name: 'background',
            value: '#F5F6FA',
            type: 'color'
        },
        {
            displayName: '盒子间距',
            name: 'boxmodel',
            tip: '设置盒子的内外间距',
            type: 'boxmodel',
               //默认值  固定格式
            value: [
                {
                    name: 'marginTop',
                    value: '0'
                },
                {
                    name: 'marginRight',
                    value: '0'
                },
                {
                    name: 'marginBottom',
                    value: '0'
                },
                {
                    name: 'marginLeft',
                    value: '0'
                },
    
                {
                    name: 'paddingTop',
                    value: '0'
                },
                {
                    name: 'paddingRight',
                    value: '0'
                },
                {
                    name: 'paddingBottom',
                    value: '0'
                },
                {
                    name: 'paddingLeft',
                    value: '0'
                }
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
            value: '100vh',
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
