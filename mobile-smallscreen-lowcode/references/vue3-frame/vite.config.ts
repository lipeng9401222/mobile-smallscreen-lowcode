import { defineConfig, PluginOption } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import Inspect from 'vite-plugin-inspect';
import mrc, { createAutoScanPlugin } from '@epoint-mrc/em-cli';
import delUniTips from '@epoint-mrc/em-cli/dist/src/lib/resolution/del-uni-tips';
import serverOption from './build/dev.server';
import Config from './src/shared/config';
import basicSsl from '@vitejs/plugin-basic-ssl';
import mccommonPlugin from '@epoint-mrc/vite-plugin-mccommon/dist/plugins/global-plugin';
import { version } from './package.json';
import path from 'path';
import WebConfig from './src/config';

const plugins: any[] = [
    // 移除 uniapp 提示信息插件
    delUniTips(),
    // 自动扫描依赖包模块插件
    Config.isEuiMode && createAutoScanPlugin({
        verbose: false, // 启用详细日志
        cleanOrphaned: true, // 是否清理残留模块
        enableAutoCopy: true, // 启用自动复制
        enableAutoCleanup: true, // 启用自动清理
        onScanComplete: (dependencies, modules, config) => {
            if (config?.verbose) {
                console.log(`[自动扫描] 发现 ${dependencies.length} 个组件化工程包，${modules.length} 个页面模块`);
            }
        }
    }, Config) as PluginOption,
    // uniapp插件
    uni({
        viteLegacyOptions:
            process.env.M8_TYPE === 'lib'
                ? false
                : {
                      targets: ['android >= 4.4.4', 'ios >= 9'],
                      renderModernChunks: false
                  }
    }),
    // M8.4移动前端框架插件
    mrc(Config) as PluginOption,
    Inspect()
];

if (process.env.M8_TYPE === 'lib' && process.env.M8_MC !== 'true') {
    plugins.push(mccommonPlugin(Config, version));
}

if (process.env.NODE_ENV === 'development' && serverOption.https) {
    // 生成一个证书
    plugins.push(
        basicSsl({
            /** name of certification */
            name: 'test',
            /** custom trust domains */
            domains: ['*.custom.com'],
            /** custom certification directory */
            certDir: '/Users/.../.devServer/cert'
        })
    );
}

const buildInclude = [/trtc\/trtc-rtc.min.js/, /rongyun\/rongyun-rtc.min.js/, /dist\/manager.min.js/, /spark-md5/, /dayjs/, /vconsole/, /better-mock-del-gyp/];

if (process.env.UNI_PLATFORM !== 'h5' || process.env.M8_TYPE === 'lib') {
    buildInclude.push(/node_modules/);
}

export default defineConfig({
    resolve: {
        conditions: ['mobile'],
        alias: {
            '@epframe/eui-core': path.resolve(process.cwd(), 'node_modules/@epframe/eui-core-m/src/index.js'),
            '@epframe/eui-core-m': path.resolve(process.cwd(), 'node_modules/@epframe/eui-core-m'), // 避免组件化工程导入的不是同一个模块实例
            '@epoint-mfe/eui-components': path.resolve(process.cwd(), 'node_modules/@epoint-mfe/eui-components')
        },
        dedupe: ['@epoint-mrc/utils', '@epoint-mrc/em-components', '@epoint-mfe/eui-components', '@epoint-fe/utils', '@epoint-fe/eui-hooks']
    },
    plugins,
    server: serverOption as any,
    optimizeDeps: {
        include: [
            'dayjs',
            'dayjs/plugin/advancedFormat',
            'dayjs/plugin/weekOfYear',
            'spark-md5',
            '@epoint-mrc/rtc/dist/trtc/trtc-rtc.min.js',
            '@epoint-mrc/rtc/dist/rongyun/rongyun-rtc.min.js',
            '@epoint-mrc/rtc/dist/manager.min.js',
            '@epoint-mfe/eui-icons',
            '@epoint-mfe/eui-components > mobile-drag-drop',
            '@epoint-mfe/eui-components > mobile-drag-drop/scroll-behaviour',
            '@epoint-mfe/eui-components > escape-html',
            '@epoint-mfe/eui-components > dayjs',
            '@epoint-mfe/eui-components > dayjs/plugin/advancedFormat',
            '@epoint-mfe/eui-components > dayjs/plugin/weekOfYear',
            '@epoint-mfe/eui-components > spark-md5'
        ],
        exclude: [
            '@epframe/eui-core-m'
        ]
    },
    build: {
        commonjsOptions: {
            include: buildInclude
        }
    },
    define: {
        'process.env.VITE_RUN_ALL_PATH': JSON.stringify(WebConfig.basePath),
        'process.env.VITE_RUN_ROOT_PATH': JSON.stringify(WebConfig.rootPath)
    }
});
