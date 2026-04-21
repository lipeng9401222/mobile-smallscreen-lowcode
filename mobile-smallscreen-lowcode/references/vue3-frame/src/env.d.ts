/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<object, object, any>;
    export default component;
}

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_BASE_URL: string;
    readonly VITE_AJAX_BASE_URL: string;
    readonly VITE_APP_ROOT_PATH: string;
    readonly VITE_FRAME_SYS_PARAM_INTERFACE: string;
    readonly VITE_FRAME_SYS_PARAM_UPDATE_FREQUENCY: string;
    readonly VITE_AJAX_REDIRECT_LOGIN_URL: string;
}