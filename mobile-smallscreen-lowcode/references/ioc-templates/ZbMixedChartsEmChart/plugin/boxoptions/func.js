export default {
    boxoptions: {
        // 指令与元素成功绑定时
        bind(el, binding, vnode, prevVnode) {
            let { boxoptions } = binding.value;


            if (typeof (boxoptions) === 'undefined') {
                console.warn('未找到boxoptions配置项,请检查config.js引入是否正确');
            } else {
                el.style.background = boxoptions.background;
                el.style.margin = boxoptions.margin;
                el.style.padding = boxoptions.padding;
                el.style.width = boxoptions.width;
                el.style.height = boxoptions.height;
                el.style.backgroundSize = boxoptions.bgsize;
                el.style.backgroundRepeat = boxoptions.bgrepeat;
                el.style.overflow = boxoptions.overflow;
                el.style.borderRadius = boxoptions.borderRadius;
            }
        },
        // 指令所在元素被插入页面时
        inserted(el, binding, vnode, prevVnode) { },
        // 指令所在模板被重新解析时
        update(el, binding, vnode, prevVnode) {
            let { boxoptions } = binding.value;

            if (typeof (boxoptions) === 'undefined') {
                console.warn('未找到boxoptions配置项,请检查config.js引入是否正确');
            } else {
                el.style.background = boxoptions.background;
                el.style.margin = boxoptions.margin;
                el.style.padding = boxoptions.padding;
                el.style.width = boxoptions.width;
                el.style.height = boxoptions.height;
                el.style.backgroundSize = boxoptions.bgsize;
                el.style.backgroundRepeat = boxoptions.bgrepeat;
                el.style.overflow = boxoptions.overflow;
                el.style.borderRadius = boxoptions.borderRadius;
            }
        },
        unbind(el, binding, vnode, prevVnode) {
        }
    }
};