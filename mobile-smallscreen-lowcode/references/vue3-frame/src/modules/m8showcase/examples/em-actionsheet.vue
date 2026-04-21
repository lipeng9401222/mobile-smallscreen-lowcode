<template>
    <div class="container">
        <div class="em-content">
            <h4 class="cell-title">基础用法</h4>
            <em-cell-group>
                <em-cell is-link @click="showTop = true" title="基础用法" />
                <em-cell is-link @click="showBottom = true" title="展示取消按钮" />
                <em-cell is-link @click="showLeft = true" title="展示描述信息" />
            </em-cell-group>
            <em-actionsheet
                title="标题"
                @close="showTop = !showTop"
                v-model="showTop"
                :actions="actionsTop"
                @select="onSelectTop"
            />
            <em-actionsheet
                v-model="showBottom"
                :actions="actionsTop"
                cancel-text="取消"
                @cancel="onCancel1"
                @close="showBottom = !showBottom"
            />
            <em-actionsheet
                v-model="showLeft"
                :actions="actionsLeft"
                cancel-text="取消"
                description="这是一段描述信息"
                close-on-click-action
                @cancel="onCancel2"
                @close="showLeft = !showLeft"
            />

            <h4 class="cell-title">选项状态</h4>
            <em-cell is-link @click="showStatus = true" title="选项状态" />
            <em-actionsheet
                v-model="showStatus"
                :actions="actionsStatus"
                @close="showStatus = !showStatus"
                @cancel="showStatus = !showStatus"
                @select="onSelectTop"
                cancel-text="取消"
                close-on-click-action
            />
            <h4 class="cell-title">自定义面板</h4>
            <em-cell is-link @click="showZdy = true" title="自定义面板" />

            <em-actionsheet v-model="showZdy" @close="showZdy = !showZdy" title="标题">
                <div class="content">内容</div>
            </em-actionsheet>
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Actionsheet',
    data() {
        return {
            showTop: false,
            showBottom: false,
            showLeft: false,
            showStatus: false,
            showZdy: false,
            actionsTop: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
            actionsLeft: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三', subname: '描述信息' }],
            actionsStatus: [
                { name: '着色选项', color: '#ee0a24' },
                { name: '禁用选项', disabled: true },
                { name: '加载选项', loading: true }
            ]
        };
    },
    methods: {
        onSelect(item) {
            console.log(JSON.stringify(item));
        },
        onSelectTop(item) {
            // 默认情况下点击选项时不会自动收起
            // 可以通过 close-on-click-action 属性开启自动收起
            this.show = false;
            Toast({
                zIndex: 3000,
                message: item.name
            });
        },
        onCancel1() {
            Toast({
                zIndex: 3000,
                message: '取消'
            });
            this.showBottom = !this.showBottom;
        },
        onCancel2() {
            Toast({
                zIndex: 3000,
                message: '取消'
            });
            this.showLeft = !this.showLeft;
        }
    }
};
</script>

<style scoped>
.cell-title {
    margin: 0;
    padding: 11px;
}

::v-deep .content {
    padding: 16px 16px 160px;
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