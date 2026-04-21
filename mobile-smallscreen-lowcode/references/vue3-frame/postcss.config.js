module.exports = {
    plugins:
        process.env.M8_TYPE === 'lib' || process.env.M8_MC === 'true'
            ? []
            : [
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  require('@epoint-mrc/em-cli/dist/src/lib/postcss-px-to-viewport/index.js')({
                      viewportWidth: 375, // (Number) 设备宽度
                      viewportHeight: 667, // (Number) 设备高度
                      unitPrecision: 3, // (Number)  指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
                      viewportUnit: 'vw', // (String) 指定需要转换成的视窗单位，建议使用vw
                      selectorBlackList: ['ignore', '.hairlines', 'van-nav-bar', '.el', 'configpanel'], // (Array)  指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                      minPixelValue: 1, // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                      mediaQuery: true, // (Boolean) 不允许在媒体查询中转换`px`
                      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
                      landscapeUnit: 'vw', // 横屏时使用的单位
                      landscapeWidth: 1338, // 横屏时使用的视口宽度
                      exclude: [/@dcloudio\/(uni-h5|uni-components)/g]
                  })
              ]
};
