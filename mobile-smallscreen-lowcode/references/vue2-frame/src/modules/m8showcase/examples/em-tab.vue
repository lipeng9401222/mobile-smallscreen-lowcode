<template>
    <div class="container">
        <div class="em-content" style="padding-bottom: 500px;">
            <h4 class="cell-title">基础用法</h4>
            <em-tabs v-model="active" :line-skew="false" @change="tabChange">
                <em-tab title="选中项目">
                    <div class="tab-content">标签内容1</div>
                </em-tab>
                <em-tab title="标签二">
                    <div class="tab-content">标签内容2</div>
                </em-tab>
                <em-tab title="标签三">
                    <div class="tab-content">标签内容3</div>
                </em-tab>
                <em-tab title="标签四">
                    <div class="tab-content">标签内容4</div>
                </em-tab>
            </em-tabs>

            <h4 class="cell-title">子级扩展</h4>
            <em-tabs v-model="active1">
                <em-tab title="选中项目" :sub-tabs="subTabs" @subTabClick="subTabClick">
                    <div class="tab-content">默认的横向扩展</div>
                </em-tab>
                <em-tab title="标签 2">
                    <template v-slot:subtab>
                        <div class="sub-content">自定义子级扩展内容</div>
                    </template>
                    <div class="tab-content">内容 2</div>
                </em-tab>
            </em-tabs>

            <h4 class="cell-title">下拉</h4>
            <em-tabs v-model="active2">
                <em-tab
                    title="选中项目"
                    :sub-tabs="subTabs"
                    :isDropdown="true"
                    sub-direction="vertical"
                    @subTabClick="subTabClick"
                >
                    <div class="tab-content-down">默认的纵向扩展</div>
                </em-tab>
                <em-tab
                    title="标签 2"
                    :sub-tabs="subTabs"
                    :isDropdown="true"
                    sub-direction="horizontal"
                    @subTabClick="subTabClick"
                >
                    <div class="tab-content-down">默认的横向扩展</div>
                </em-tab>
                <em-tab title="标签 3" :isDropdown="true">
                    <template v-slot:subtab>
                        <div class="sub-content">自定义子级扩展内容</div>
                    </template>
                    <div class="tab-content-down">内容 3</div>
                </em-tab>
            </em-tabs>

            <h4 class="cell-title">同级扩展</h4>
            <em-tabs v-model="active3" :putaway="true">
                <em-tab v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item" :title="`标签 ${item}`">
                    <div class="tab-content-down">内容 {{ item }}</div>
                </em-tab>
            </em-tabs>

            <h4 class="cell-title">通过名称匹配</h4>

            <em-tabs v-model="activeName">
                <em-tab title="标签 1" name="a"><div class="tab-content">内容 1</div></em-tab>
                <em-tab title="标签 2" name="b"><div class="tab-content">内容 2</div></em-tab>
                <em-tab title="标签 3" name="c"><div class="tab-content">内容 3</div></em-tab>
            </em-tabs>

            <h4 class="cell-title">标签滚动</h4>

            <em-tabs>
                <em-tab v-for="index in [1,2,3,4,5,6,7,8]" :key="index" :title="'标签 ' + index">
                    <div class="tab-content">内容 {{ index }}</div>
                </em-tab>
            </em-tabs>

            <h4 class="cell-title">禁用标签</h4>

            <em-tabs @disabled="onClickDisabled">
                <em-tab title="标签 1"><div class="tab-content">内容 1</div></em-tab>
                <em-tab title="标签 2" disabled><div class="tab-content">内容 2</div></em-tab>
                <em-tab title="标签 3"><div class="tab-content">内容 3</div></em-tab>
            </em-tabs>

            <h4 class="cell-title">样式风格</h4>

            <em-tabs type="card">
                <em-tab title="标签 1"><div class="tab-content">内容 1</div></em-tab>
                <em-tab title="标签 2"><div class="tab-content">内容 2</div></em-tab>
                <em-tab title="标签 3"><div class="tab-content">内容 3</div></em-tab>
            </em-tabs>

            <h4 class="cell-title">点击事件</h4>

            <em-tabs @click="onClick">
                <em-tab title="标签 1"><div class="tab-content">内容 1</div></em-tab>
                <em-tab title="标签 2"><div class="tab-content">内容 2</div></em-tab>
            </em-tabs>

            <h4 class="cell-title">tabs左对齐 shrink</h4>
            <em-tabs v-model="active4" shrink @change="tabChange">
                <em-tab title="选中项目"><div class="tab-content">标签内容1111</div></em-tab>
                <em-tab title="标签二"><div class="tab-content">标签内容2222</div></em-tab>
                <em-tab title="标签三"><div class="tab-content">标签内容333</div></em-tab>
                <em-tab title="标签四"><div class="tab-content">标签内容444</div></em-tab>
            </em-tabs>

            <h4 class="cell-title">粘性布局</h4>

            <em-tabs v-model="active5" sticky>
                <em-tab v-for="index in [1, 2, 3, 4]" :key="index" :title="'待完成 ' + index">
                    <div class="tab-content-down">待完成 {{ index }}</div>
                </em-tab>
            </em-tabs>

            <h4 class="cell-title">切换动画</h4>

            <em-tabs v-model="active6" animated>
                <em-tab v-for="index in [1, 2, 3, 4]" :key="index" :title="'选项 ' + index">
                    <div class="tab-content">内容 {{ index }}</div>
                </em-tab>
            </em-tabs>

            <h4 class="cell-title">滑动切换</h4>
            <em-tabs v-model="active7" swipeable>
                <em-tab v-for="index in [1, 2, 3, 4]" :key="index" :title="'选项 ' + index">
                    <div class="tab-content">内容 {{ index }}</div>
                </em-tab>
            </em-tabs>

            <h4 class="cell-title">滚动导航</h4>
            <em-tabs v-model="active8" scrollspy sticky>
                <em-tab v-for="index in [1,2,3,4,5,6,7,8]" :key="index" :title="'选项 ' + index">
                    <div class="tab-content">内容 {{ index }}</div>
                </em-tab>
            </em-tabs>

            <h4 class="cell-title">异步切换</h4>
            <em-tabs :before-change="beforeChange">
                <em-tab v-for="index in [1, 2, 3, 4]" :key="index" :title="'选项 ' + index">
                    <div class="tab-content">内容 {{ index }}</div>
                </em-tab>
            </em-tabs>
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script>
export default {
    name: 'demo-tab',
    data() {
        return {
            active: 0,
            active1: 0,
            active2: 0,
            active3: 0,
            active4: 0,
            active5: 0,
            active6: 0,
            active7: 0,
            active8: 0,
            subTabs: [
                {
                    text: '选项1',
                    value: '1',
                    checked: true
                },
                {
                    text: '选项2',
                    value: '2'
                },
                {
                    text: '选项3',
                    value: '3'
                },
                {
                    text: '选项4',
                    value: '4'
                }
            ],
            activeName: 'c'
        };
    },
    methods: {
        tabChange(e) {
            console.log('tabChange');
            console.log(e);
        },
        subTabClick(item) {
            console.log(item);
        },
        onClickDisabled(name) {
            Toast(name + '已被禁用');
            console.log(name + '已被禁用');
        },
        onClick(name, title) {
            Toast('点击了' + title);
            console.log(name, title);
        },
        beforeChange(index) {
            // 返回 false 表示阻止此次切换
            if (index === 1) {
                return false;
            }

            // 返回 Promise 来执行异步逻辑
            return new Promise((resolve) => {
                // 在 resolve 函数中返回 true 或 false
                resolve(index !== 3);
            });
        }
    },
    // #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY
    // 微信/支付宝小程序下的滚动事件,如不加,则在微信/支付宝环境下不可滚动
    onPageScroll() { }
    // #endif
};
</script>

<style scoped>
.em-content {
    padding-bottom: 500px;
}
.cell-title {
    background: #efefef;
    padding: 20px 0 10px;
    margin-top: 0;
    margin-bottom: 0;
}
.sub-content {
    padding: 20px;
    background-color: #fff;
    border-bottom: 1px solid #dde0e4;
}

.tab-content-down {
    padding: 10px;
    min-height: 300px;
}
.tab-content {
    padding: 10px;
    min-height: 50px;
    /* background: #f00; */
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