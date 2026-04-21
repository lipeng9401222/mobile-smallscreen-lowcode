<template>
    <div bubble="true" class="container">
        <div class="em-content">
            <text class="cell-title">基础用法</text>
            <div class="em-doc-demo-block">
                <em-row @click="rowclick">
                    <em-col class="emCol" @click="colclick" span="8">
                        <text class="col-text emColOdd">span: 8</text>
                    </em-col>
                    <em-col class="emCol" span="8"><text class="col-text emColEven">span: 8</text></em-col>
                    <em-col class="emCol" span="8"><text class="col-text emColOdd">span: 8</text></em-col>
                </em-row>

                <em-row>
                    <em-col class="emCol" span="4"><text class="col-text emColOdd">span: 4</text></em-col>
                    <em-col class="emCol" span="10" offset="4">
                        <text class="col-text emColEven">offset: 4, span: 10</text>
                    </em-col>
                </em-row>

                <em-row>
                    <em-col class="emCol" offset="12" span="12">
                        <text class="col-text emColOdd">offset: 12, span: 12</text>
                    </em-col>
                </em-row>
            </div>

            <text class="cell-title">在列元素之间增加间距</text>
            <div class="em-doc-demo-block">
                <em-row customClass="ddd" gutter="20">
                    <em-col class="emCol" span="8"><text class="col-text emColOdd">span: 8</text></em-col>
                    <em-col class="emCol" span="8"><text class="col-text emColEven">span: 8</text></em-col>
                    <em-col class="emCol" span="8"><text class="col-text emColOdd">span: 8</text></em-col>
                </em-row>
            </div>

            <text class="cell-title">Flex 布局</text>

            <div class="em-doc-demo-block">
                <em-row type="flex" gutter="5">
                    <em-col class="emCol" span="6"><text class="col-text emColOdd">span: 6</text></em-col>
                    <em-col class="emCol" span="6"><text class="col-text emColEven">span: 6</text></em-col>
                    <em-col class="emCol" span="6"><text class="col-text emColOdd">span: 6</text></em-col>
                </em-row>

                <em-row type="flex" justify="center">
                    <em-col class="emCol" span="6"><text class="col-text emColOdd">span: 6</text></em-col>
                    <em-col class="emCol" span="6"><text class="col-text emColEven">span: 6</text></em-col>
                    <em-col class="emCol" span="6"><text class="col-text emColOdd">span: 6</text></em-col>
                </em-row>

                <em-row type="flex" justify="end">
                    <em-col class="emCol" span="6"><text class="col-text emColOdd">span: 6</text></em-col>
                    <em-col class="emCol" span="6"><text class="col-text emColEven">span: 6</text></em-col>
                    <em-col class="emCol" span="6"><text class="col-text emColOdd">span: 6</text></em-col>
                </em-row>

                <em-row type="flex" justify="space-between">
                    <em-col class="emCol" span="6"><text class="col-text emColOdd">span: 6</text></em-col>
                    <em-col class="emCol" span="6"><text class="col-text emColEven">span: 6</text></em-col>
                    <em-col class="emCol" span="6"><text class="col-text emColOdd">span: 6</text></em-col>
                </em-row>

                <em-row type="flex" justify="space-around">
                    <em-col class="emCol" span="6"><text class="col-text emColOdd">span: 6</text></em-col>
                    <em-col class="emCol" span="6"><text class="col-text emColEven">span: 6</text></em-col>
                    <em-col class="emCol" span="6"><text class="col-text emColOdd">span: 6</text></em-col>
                </em-row>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Layout',
    methods: {
        rowclick(e) {
            ejs.ui.toast('触发了row的点击事件');

            console.log('rowclick', e);
        },
        colclick(e) {
            ejs.ui.toast('触发了col的点击事件');
            console.log('colclick', e);
        }
    }
};
</script>

<style lang="scss" scoped>
// #ifndef APP-PLUS
::v-deep .em-col {
    margin-bottom: 10px;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    background-clip: content-box;
}

::v-deep .em-col:nth-child(even) {
    background-color: #66c6f2;
}

::v-deep .em-col:nth-child(odd) {
    background-color: #39a9ed;
}
// #endif

.emCol {
    margin-bottom: 10px;
}

.emColOdd {
    background-color: #39a9ed;
}

.emColEven {
    background-color: #66c6f2;
}

.col-text {
    font-size: 13px;
    text-align: center;
    line-height: 30px;
    color: #fff;
}

.em-doc-demo-block {
    padding: 0 15px;
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
