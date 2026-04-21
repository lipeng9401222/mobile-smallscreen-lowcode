<template>
    <div class="container">
        <em-tabs v-model="current" :line-skew="false">
            <em-tab title="用法示例">
                <div class="icon-wrapper">
                    <text class="cell-title">基础用法</text>
                    <em-row>
                        <em-col :span="6">
                            <em-icon @click="onClick" name="chat-o" />
                        </em-col>
                        <em-col :span="6">
                            <em-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                        </em-col>
                    </em-row>
                    <text class="cell-title">徽标提示</text>
                    <em-row>
                        <em-col :span="6">
                            <em-icon name="chat-o" dot />
                        </em-col>
                        <em-col :span="6">
                            <em-icon name="chat-o" badge="9" />
                        </em-col>
                        <em-col :span="6">
                            <em-icon name="chat-o" badge="99+" />
                        </em-col>
                    </em-row>
                    <text class="cell-title">图标颜色</text>
                    <em-row>
                        <em-col :span="6">
                            <em-icon name="chat-o" color="#1989fa" />
                        </em-col>
                        <em-col :span="6">
                            <em-icon name="chat-o" color="#07c160" />
                        </em-col>
                    </em-row>
                    <text class="cell-title">图标大小</text>
                    <em-row>
                        <em-col :span="6">
                            <em-icon name="chat-o" size="40" />
                        </em-col>
                        <em-col :span="6">
                            <em-icon name="chat-o" size="80" />
                        </em-col>
                    </em-row>
                </div>
            </em-tab>
            <em-tab title="基础图标">
                <em-row class="icon-base">
                    <em-col :span="6" v-for="(v, i) in baseIcon" :key="i" custom-class="col">
                        <em-icon :name="v" :size="iconSize" />
                        <text class="text" :style="{ fontSize: fontSize }">{{ v }}</text>
                    </em-col>
                </em-row>
            </em-tab>
            <em-tab title="线框风格">
                <em-row class="icon-base">
                    <em-col :span="6" v-for="(v, i) in borderIcon" :key="i" custom-class="col">
                        <em-icon :name="v" :size="iconSize" />
                        <text class="text" :style="{ fontSize: fontSize }">{{ v }}</text>
                    </em-col>
                </em-row>
            </em-tab>
            <em-tab title="突底风格">
                <em-row class="icon-base">
                    <em-col :span="6" v-for="(v, i) in factIcon" :key="i" custom-class="col">
                        <em-icon :name="v" :size="iconSize" />
                        <text class="text" :style="{ fontSize: fontSize }">{{ v }}</text>
                    </em-col>
                </em-row>
            </em-tab>
        </em-tabs>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Cell',
    data() {
        return {
            current: 0,
            iconSize: '25px',
            fontSize: '16px',
            baseIcon: [
                'success',
                'plus',
                'minus',
                'cross',
                'fail',
                'arrow',
                'arrow-left',
                'arrow-up',
                'arrow-down',
                'circle'
            ],
            borderIcon: [
                'location-o',
                'like-o',
                'star-o',
                'phone-o',
                'setting-o',
                'fire-o',
                'coupon-o',
                'cart-o',
                'shopping-cart-o',
                'cart-circle-o',
                'friends-o',
                'comment-o',
                'gem-o',
                'gift-o',
                'point-gift-o',
                'send-gift-o',
                'service-o',
                'bag-o',
                'todo-list-o',
                'balance-list-o',
                'medal-o',
                'close',
                'clock-o',
                'question-o',
                'passed',
                'add-o',
                'gold-coin-o',
                'info-o',
                'manager-o',
                'label-o',
                'hot-o',
                'hot-sale-o',
                'new-o',
                'new-arrival-o',
                'goods-collect-o',
                'eye-o',
                'browsing-history-o',
                'bookmark-o',
                'bill-o',
                'video-o',
                'shop-o',
                'shop-collect-o',
                'chat-o',
                'smile-comment-o',
                'vip-card-o',
                'award-o',
                'diamond-o',
                'volume-o',
                'cluster-o',
                'underway-o',
                'photo-o',
                'gift-card-o',
                'more-o',
                'expand-o',
                'play-circle-o',
                'pause-circle-o',
                'stop-circle-o',
                'warning-o',
                'phone-circle-o',
                'smile-o',
                'music-o',
                'balance-o',
                'refund-o',
                'birthday-cake-o',
                'user-o',
                'thumb-circle-o',
                'orders-o',
                'tv-o',
                'envelop-o',
                'flag-o',
                'flower-o',
                'filter-o',
                'bar-chart-o',
                'chart-trending-o',
                'comment-circle-o',
                'brush-o',
                'bullhorn-o',
                'hotel-o',
                'cashier-o',
                'newspaper-o',
                'warn-o',
                'notes-o',
                'calendar-o',
                'bulb-o',
                'user-circle-o',
                'desktop-o',
                'apps-o',
                'home-o',
                'share',
                'search',
                'points',
                'edit',
                'delete',
                'qr',
                'qr-invalid',
                'closed-eye',
                'wap-home',
                'scan',
                'free-postage',
                'certificate',
                'logistics',
                'contact',
                'cash-back-record',
                'after-sale',
                'exchange',
                'upgrade',
                'ellipsis',
                'circle',
                'description',
                'records',
                'sign',
                'completed',
                'failure',
                'ecard-pay',
                'peer-pay',
                'balance-pay',
                'credit-pay',
                'debit-pay',
                'cash-on-deliver',
                'other-pay',
                'tosend',
                'pending-payment',
                'paid',
                'aim',
                'discount',
                'idcard',
                'replay',
                'shrink',
                'new-o',
                'hot-o',
                'delete-o',
                'font-o',
                'revoke'
            ],
            factIcon: [
                'location',
                'like',
                'star',
                'phone',
                'setting',
                'fire',
                'coupon',
                'cart',
                'shopping-cart',
                'cart-circle',
                'friends',
                'comment',
                'gem',
                'gift',
                'point-gift',
                'send-gift',
                'service',
                'bag',
                'todo-list',
                'balance-list',
                'medal',
                'clear',
                'clock',
                'question',
                'checked',
                'add',
                'gold-coin',
                'info',
                'manager',
                'label',
                'hot',
                'hot-sale',
                'new',
                'new-arrival',
                'goods-collect',
                'eye',
                'browsing-history',
                'bookmark',
                'bill',
                'video',
                'shop',
                'shop-collect',
                'chat',
                'smile-comment',
                'vip-card',
                'award',
                'diamond',
                'volume',
                'cluster',
                'underway',
                'photo',
                'gift-card',
                'more',
                'expand',
                'play-circle',
                'pause-circle',
                'stop-circle',
                'alipay',
                'wechat',
                'wechat-pay',
                'photograph',
                'youzan-shield',
                'umbrella-circle',
                'bell',
                'printer',
                'map-marked',
                'card',
                'add-square',
                'live',
                'lock',
                'audio',
                'graphic',
                'column',
                'invition',
                'play',
                'pause',
                'stop',
                'weapp-nav',
                'ascending',
                'descending',
                'bars',
                'wap-nav',
                'new',
                'hot',
                'sort',
                'font'
            ]
        };
    },
    methods: {
        onClickItem(e) {
            if (this.current !== e.currentIndex) {
                this.current = e.currentIndex;
            }
        },
        onClick() {
            ejs.ui.toast('点击图标');
        }
    }
};
</script>

<style scoped>
/* #ifndef APP-PLUS */
::v-deep .em-col {
    margin: 10px 0;
    text-align: center;
}
/* #endif */
.icon-wrapper {
    font-size: 32px;
}
::v-deep .col{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 68px;
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
