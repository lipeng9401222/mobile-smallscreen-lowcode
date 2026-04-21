const path = require('path');

module.exports = {
    parser: require('postcss-comment'),
    plugins: process.env.M8_TYPE === 'lib' ? [] : [
        require('postcss-import')({
            resolve(id) {
                if (id.startsWith('~@/')) {
                    return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3));
                } else if (id.startsWith('@/')) {
                    return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2));
                } else if (id.startsWith('/') && !id.startsWith('//')) {
                    return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1));
                }

                return id;
            }
        }),
        require('autoprefixer')({
            remove: process.env.UNI_PLATFORM !== 'h5'
        }),
        require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),
        require('@epoint-mrc/em-cli/lib/postcss-px-to-viewport')({
            viewportWidth: 375, // (Number) 设备宽度
            viewportHeight: 667, // (Number) 设备高度
            unitPrecision: 3, // (Number)  指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', // (String) 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['ignore', '.hairlines', 'van-nav-bar', '.el', 'configpanel'], // (Array)  指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1, // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: true, // (Boolean) 不允许在媒体查询中转换`px`
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: 'vw', // 横屏时使用的单位
            landscapeWidth: 1338 // 横屏时使用的视口宽度
        })
    ]
};
