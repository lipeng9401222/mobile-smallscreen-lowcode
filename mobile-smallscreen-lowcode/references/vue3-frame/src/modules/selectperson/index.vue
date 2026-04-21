<template>
    <view>
        <em-select-person ref="emSelectPersonRef" @loaded="loaded" />
    </view>
</template>

<script>
import { useSelectPersonStore } from './store';
import { mapState } from 'pinia';
export default {
    computed: {
        ...mapState(useSelectPersonStore, ['option'])
    },
    methods: {
        loaded() {
            setTimeout(() => {
                SelectPerson(this.option);
            }, 100);
        }
    },
    onUnload() {
        // 关闭页面触发选人组件关闭
        this.$refs.emSelectPersonRef.close();
    }
};
</script>
