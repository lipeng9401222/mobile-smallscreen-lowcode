<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-content">
                    <e-skeleton-m />
                    <e-skeleton-m style="--e-skeleton-circle-size: 100px">
                        <template #template>
                            <e-skeleton-item-m variant="circle" />
                        </template>
                    </e-skeleton-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">更多行数</text>
            <div class="example-card">
                <e-skeleton-m :rows="5" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">动画效果</text>
            <div class="example-card">
                <e-skeleton-m :rows="5" animated />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义样式</text>
            <div class="example-card">
                <e-skeleton-m style="width: 240px">
                    <template #template>
                        <e-skeleton-item-m variant="image" style="width: 240px; height: 240px" />
                        <div style="padding: 14px">
                            <e-skeleton-item-m variant="p" style="width: 50%" />
                            <div style="display: flex; align-items: center; justify-items: space-between">
                                <e-skeleton-item-m variant="text" style="margin-right: 16px" />
                                <e-skeleton-item-m variant="text" style="width: 30%" />
                            </div>
                        </div>
                    </template>
                </e-skeleton-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">加载状态</text>
            <div class="example-card">
                <div class="example-content">
                    <div>
                        <label style="margin-right: 16px">Switch Loading</label>
                        <e-switch-m v-model="loading" />
                    </div>
                    <e-skeleton-m style="width: 240px" :loading="loading" animated>
                        <template #template>
                            <e-skeleton-item-m variant="image" style="width: 240px; height: 240px" />
                            <div style="padding: 14px">
                                <e-skeleton-item-m variant="h3" style="width: 50%" />
                                <div
                                    style="
                                        display: flex;
                                        align-items: center;
                                        justify-items: space-between;
                                        margin-top: 16px;
                                        height: 16px;
                                    "
                                >
                                    <e-skeleton-item-m variant="text" style="margin-right: 16px" />
                                    <e-skeleton-item-m variant="text" style="width: 30%" />
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <img
                                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image"
                            />
                            <div style="padding: 14px">
                                <span>Delicious hamburger</span>
                                <div class="bottom card-header">
                                    <div class="time">{{ currentDate }}</div>
                                </div>
                            </div>
                        </template>
                    </e-skeleton-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">渲染多条数据</text>
            <div class="example-card">
                <div class="example-content">
                    <div>
                        <e-button-m @click="setLoading">Click me to reload</e-button-m>
                    </div>
                    <e-skeleton-m style="display: flex; gap: 8px" :loading="loading2" animated :count="3">
                        <template #template>
                            <div style="flex: 1">
                                <e-skeleton-item-m variant="image" style="height: 240px" />
                                <div style="padding: 14px">
                                    <e-skeleton-item-m variant="h3" style="width: 50%" />
                                    <div
                                        style="
                                            display: flex;
                                            align-items: center;
                                            justify-items: space-between;
                                            margin-top: 16px;
                                            height: 16px;
                                        "
                                    >
                                        <e-skeleton-item-m variant="text" style="margin-right: 16px" />
                                        <e-skeleton-item-m variant="text" style="width: 30%" />
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <div style="display: flex; gap: 8px" >
                                <div v-for="item in lists" :key="item.name" :body-style="{ padding: '0px', marginBottom: '1px' }">
                                    <img :src="item.imgUrl" class="image multi-content" style="max-width: 100%" />
                                    <div style="padding: 14px">
                                        <span>{{ item.name }}</span>
                                        <div class="bottom card-header">
                                            <div class="time">{{ currentDate }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </e-skeleton-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">避免渲染跳动</text>
            <div class="example-card">
                <div class="example-content">
                    <div>
                        <label style="margin-right: 16px">Switch Loading</label>
                        <e-switch-m v-model="loading3" />
                    </div>
                    <e-skeleton-m style="width: 240px" :loading="loading3" animated :throttle="1000">
                        <template #template>
                            <e-skeleton-item-m variant="image" style="width: 240px; height: 240px" />
                            <div style="padding: 14px">
                                <e-skeleton-item-m variant="h3" style="width: 50%" />
                                <div
                                    style="
                                        display: flex;
                                        align-items: center;
                                        justify-items: space-between;
                                        margin-top: 16px;
                                        height: 16px;
                                    "
                                >
                                    <e-skeleton-item-m variant="text" style="margin-right: 16px" />
                                    <e-skeleton-item-m variant="text" style="width: 30%" />
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <div>
                                <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    class="image"
                                />
                                <div style="padding: 14px">
                                    <span>Delicious hamburger</span>
                                    <div class="bottom card-header">
                                        <div class="time">{{ currentDate }}</div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </e-skeleton-m>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
interface ListItem {
    imgUrl: string;
    name: string;
}
const loading = ref(true);
const loading2 = ref(true);
const loading3 = ref(true);
const lists = ref<ListItem[]>([]);
const currentDate = new Date().toDateString();
const setLoading = () => {
    loading2.value = true;
    setTimeout(() => {
        loading2.value = false;
    }, 2000);
};
onMounted(() => {
    loading2.value = false;
    lists.value = [
        {
            imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            name: 'Deer'
        },
        {
            imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            name: 'Horse'
        },
        {
            imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            name: 'Mountain Lion'
        }
    ];
});
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
