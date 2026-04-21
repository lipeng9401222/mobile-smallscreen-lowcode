import { reactive, ref } from 'vue';

class ThemeManager {
    /**
     * 单例实例
     */
    private static _instance: ThemeManager;
    /**
     * 当前主题
     */
    private _themeRef = ref('base');
    /**
     * 已注册的主题对应的css变量
     */
    private _themeVarsMap = reactive(new Map<string, Record<string, string>>());

    /**
     * 获取单例实例
     * @returns 单例实例
     */
    static getInstance() {
        if (!ThemeManager._instance) {
            ThemeManager._instance = new ThemeManager();
        }
        return ThemeManager._instance;
    }

    /**
     * 获取当前主题
     * @returns 当前主题
     */
    get theme(): string {
        return this._themeRef.value;
    }

    /**
     * 获取当前主题的css变量，用于动态切换主题
     */
    get themeVars(): Record<string, string> {
        return this._themeVarsMap.get(this._themeRef.value) || {};
    }

    /**
     * 设置当前主题
     * @param type 主题类型
     */
    setTheme(type: string, vars?: Record<string, string>) {
        // 转换原生主题类型为内部主题名
        this._themeRef.value = type || 'base';

        if (vars) {
            this.registerTheme(this._themeRef.value, vars);
        }
    }

    /**
     * 注册主题
     * @param type 主题类型
     * @param vars 主题对应的css变量
     */
    registerTheme(type: string, vars: Record<string, string>) {
        this._themeVarsMap.set(type, vars);
    }

    /**
     * 注销主题
     * @param type 主题类型
     */
    unregisterTheme(type: string) {
        this._themeVarsMap.delete(type);
    }
}

export const EUIThemeManager = ThemeManager.getInstance();

