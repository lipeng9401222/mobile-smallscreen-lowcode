<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-button type="danger" text="基础用法" @click="showDemo('default')" />

            <h4 class="cell-title">通知类型</h4>
            <em-button type="info" text="主要通知" @click="showDemo('primary')" />
            <em-button type="primary" text="成功通知" @click="showDemo('success')" />
            <em-button type="danger" text="危险通知" @click="showDemo('danger')" />
            <em-button type="warning" text="警告通知" @click="showDemo('warning')" />

            <h4 class="cell-title">自定义配置</h4>
            <em-button type="primary" text="自定义颜色" @click="showDemo('color')" />
            <em-button type="primary" text="自定义时长" @click="showDemo('time')" />

            <em-button @click="clear">关闭通知</em-button>

            <h4 class="cell-title">组件调用</h4>
            <em-button type="primary" text="组件调用" @click="showNotify" />

            <h4 class="cell-title">方法测试</h4>
            <h5>setDefaultOptions、resetDefaultOptions</h5>
            <em-button type="primary" text="测试全局方法" @click="setOptions" />
            <em-button type="primary" text="测试重置方法" @click="reSetOptions" />
        </div>
        <em-notify ref="emNotify"></em-notify>

        <em-notify v-model="show" custom-class="txt" :type="comType" @opened="opened" @click="click" @closed="closed">
            <em-icon name="bell" style="margin-right: 4px" />
            <text>通知内容</text>
        </em-notify>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            show: false,
            types: ['primary', 'success', 'danger', 'warning'],
            comType: 'success'
        };
    },
    methods: {
        showDemo(type) {
            if (type === 'default') {
                Notify('通知内容');
            }

            if (this.types.indexOf(type) > -1) {
                Notify({ type: type, message: '通知\n内容' });
            }

            if (type === 'color') {
                Notify({
                    message: '自定义颜色',
                    color: '#ad0000',
                    background: '#43b527',
                    onClick: () => {
                        console.log('点击了');
                    },
                    onOpened: () => {
                        console.log('打开了');
                    },
                    onClose: () => {
                        console.log('关了');
                    }
                });
            }

            if (type === 'time') {
                Notify({
                    message: '自定义时长',
                    duration: 100000
                });
            }
        },
        showNotify() {
            this.comType = 'success';
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 2000);
        },
        clear() {
            Notify.clear();
        },
        opened() {
            console.log('组件-打开了');
        },
        closed() {
            console.log('组件- 关了');
        },
        click() {
            console.log('组件-点击了');
            this.comType = 'primary';
        },
        setOptions() {
            Notify.setDefaultOptions({
                color: '#00f'
            });
        },
        reSetOptions() {
            Notify.resetDefaultOptions();
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
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, .6);
    font-size: 14px;
    font-weight: 400;
}
</style>