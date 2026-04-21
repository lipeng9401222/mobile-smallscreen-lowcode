<template>
    <div class="container">
        <div class="van-content">
            <text class="cell-title">基础用法</text>
            <em-pagination v-model="currentPage" :total-items="100" @change="onChangePage"></em-pagination>

            <text class="cell-title">简单模式</text>
            <em-pagination v-model="currentPage" mode="simple" :page-count="12" />

            <text class="cell-title">显示省略号</text>
            <em-pagination v-model="currentPage" :total-items="125" :show-page-size="3" force-ellipses />

            <text class="cell-title">使用插槽</text>
            <em-pagination v-model="currentPage" :total-items="125">
                <template #prevText>-</template>
                <template #nextText>+</template>
                <template #page="{ text, active, number }">{{ number }}+</template>
            </em-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
            prev: '',
            next: ''
        };
    },

    methods: {
        onChangePage(page) {
            console.log('change page', page);
        }
    }
};
</script>
<style>
/* custom style */
.cell-title:first-child {
    padding-top: 10px;
}

.cell-title {
    display: block;
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
