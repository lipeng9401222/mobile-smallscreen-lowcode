<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-dragsort v-model="list">
                <em-dragsort-item v-for="(item, index) in list" :key="index">
                    <em-cell :title="'item ' + item"></em-cell>
                </em-dragsort-item>
            </em-dragsort>

            <h4 class="cell-title">横向排序</h4>
            <em-dragsort v-model="list" direction="horizontal">
                <em-dragsort-item v-for="(item, index) in list" :key="index">
                    <em-tag basic-type="person">item {{ item }}</em-tag>
                </em-dragsort-item>
            </em-dragsort>

            <h4 class="cell-title">grid排序</h4>
            <em-grid :gutter="10">
                <em-dragsort v-model="gridlist" direction="auto">
                    <em-dragsort-item v-for="(item, index) in gridlist" :key="index">
                        <em-grid-item icon="photo-o" :text="'item ' + item" />
                    </em-dragsort-item>
                </em-dragsort>
            </em-grid>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dragsort',
    data() {
        return {
            list: [1, 2, 3, 4],
            gridlist: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        };
    }
};
</script>
<style lang="scss" scoped>
::v-deep .em-tag{
    margin-left: 20px;
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
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
