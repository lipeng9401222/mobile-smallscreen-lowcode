<template>
    <view>
        <em-select-person ref="emSelectPerson" @loaded="loaded" />
    </view>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('selectperson', ['option'])
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
        this.$refs.emSelectPerson.close();
    }
};
</script>
