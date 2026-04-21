class PluginDemo {
    constructor() {
        this.name = 'PluginDemo';
    }
    apply(compiler) {
        // 插件示例
        compiler.hooks.beforeLogin.tap('MyPlugin', () => {
            ejs.ui.showWaiting('请稍等');
        });
        // 插件示例带回调
        compiler.hooks.afterLogin.tapAsync('MyPlugin', () => {
            return new Promise((resolve) => {
                ejs.ui.closeWaiting();
                resolve();
            });
        });
    }
}

export default PluginDemo;