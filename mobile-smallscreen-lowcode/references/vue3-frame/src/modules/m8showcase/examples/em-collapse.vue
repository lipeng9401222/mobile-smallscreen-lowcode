<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-collapse v-model="activeNames">
                <em-collapse-item title="标题1" name="1" is-link>内容</em-collapse-item>
                <em-collapse-item title="标题2" name="2" is-link>内容</em-collapse-item>
                <em-collapse-item title="标题3" name="3" disabled is-link>内容</em-collapse-item>
            </em-collapse>

            <h4 class="cell-title">手风琴</h4>
            <em-collapse v-model="activeName" accordion>
                <em-collapse-item title="标题1" name="1" is-link>内容</em-collapse-item>
                <em-collapse-item title="标题2" name="2" is-link>内容</em-collapse-item>
                <em-collapse-item title="标题3" name="3" is-link>内容</em-collapse-item>
            </em-collapse>

            <h4 class="cell-title">自定义标题内容</h4>
            <em-collapse v-model="activeNames2">
                <em-collapse-item name="1" is-link>
                    <template #title>
                        <div>
                            标题1
                            <em-icon name="question-o" />
                        </div>
                    </template>
                    内容
                    <template #rightIcon>
                        <em-icon name="search" class="search-icon" size="24"/>
                    </template>
                </em-collapse-item>
                <em-collapse-item title="标题2" name="2" icon="shop-o" is-link value="内容">内容</em-collapse-item>
            </em-collapse>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Collapse',
    data() {
        return {
            activeNames: ['1'],
            activeName: '1',
            activeNames2: ['1']
        };
    }
};
</script>
<style scoped>
.van-content {
    background-color: #f7f8fa;
    height: 100vh;
}
</style>
<style>
/* custom style */
.cell-title:first-child {
    padding-top: 10px;
}

.cell-title {
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, .6);
    font-size: 14px;
    font-weight: 400;
}
</style>