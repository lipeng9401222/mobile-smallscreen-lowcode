<template>
    <div class="container">
        <h4 class="cell-title">基础用法</h4>
        <em-notice-bar left-icon="volume-o" :text="text"></em-notice-bar>
        <h4 class="cell-title">滚动播放</h4>
        <em-notice-bar :text="shorttext" :scrollable="true" />
        <em-notice-bar :text="text" :scrollable="false" />
        <h4 class="cell-title">多行展示</h4>
        <em-notice-bar :text="text" wrapable :scrollable="false" />
        <h4 class="cell-title">通知栏模式</h4>
        <em-notice-bar mode="closeable">{{ shorttext }}</em-notice-bar>
        <em-notice-bar mode="link">{{ shorttext }}</em-notice-bar>
        <h4 class="cell-title">自定义模式</h4>
        <em-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">{{ shorttext }}</em-notice-bar>
        <h4 class="cell-title">垂直滚动</h4>
        <em-notice-bar :direction="true" left-icon="volume-o">
            <template #content>
                <em-gallery
                    :data="data"
                    :height="40"
                    :autoplay="3000"
                    :show-indicators="false"
                    vertical
                    class="notice-swipe"
                ></em-gallery>
            </template>
        </em-notice-bar>
    </div>
</template>

<script>
export default {
    name: 'noticeBar',
    data() {
        return {
            data: ['技术是开发它的人的共同灵魂。技术是开发它的人的共同灵魂。', '内容2', '内容3'],
            text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
            shorttext: '技术是开发它的人的共同灵魂。'
        };
    }
};
</script>

<style lang="scss">
.notice-swipe {
    width: 100%;

    .inner-center {
        background-color: transparent !important;
    }

    .em-gallery__item-text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
</style><style>
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