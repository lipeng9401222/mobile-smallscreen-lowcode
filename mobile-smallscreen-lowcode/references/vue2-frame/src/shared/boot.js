import '@common/css/common.extend.css';
if (Config.isMock) {
    if (process.env.NODE_ENV === 'development' || (process.env.NODE_ENV === 'production' && !Config.isProductionExternalMock)) {
        require('@build/resolution/mock/index.tool');
    }
}

// #ifdef H5
if (Config.isTestPerformance) {
    Util.loaderLibrary({
        inject: 'body',
        src: './static/h5/performance.js',
        type: 'js'
    });
}
// #endif

const configReady = Config.configReady;

export default configReady;


