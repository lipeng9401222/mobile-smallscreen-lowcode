<template>
    <div class="container">
        <h4 class="cell-title">基础用法</h4>
        <em-easy-calendar />

        <h4 class="cell-title">仅展示周历</h4>
        <em-easy-calendar :allow-switch="false" :is-show-week-view="true" />

        <h4 class="cell-title">设置标记的日期</h4>
        <em-easy-calendar :mark-date="markDate" />
    </div>
</template>
<script>
export default {
    name: 'Easycalendar',
    data() {
        return {
            markDate: [
                {
                    // 昨天标记为红色
                    date: new Date().getTime() - 86400000,
                    color: 'red'
                },
                {
                    // 明天标记为黄色
                    date: new Date().getTime() + 86400000,
                    color: 'yellow'
                }
            ]
        };
    }
};
</script>
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