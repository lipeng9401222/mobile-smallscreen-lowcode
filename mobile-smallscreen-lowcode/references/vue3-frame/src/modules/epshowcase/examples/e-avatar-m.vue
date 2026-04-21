<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <e-row-m class="demo-avatar demo-basic">
                    <e-col-m :span="24">
                        <div class="sub-title">circle</div>
                        <div class="demo-basic--circle">
                            <div class="block">
                                <e-avatar-m :size="50" :src="circleUrl" />
                            </div>
                            <div v-for="size in sizeList" :key="size" class="block">
                                <e-avatar-m :size="size" :src="circleUrl" />
                            </div>
                        </div>
                    </e-col-m>
                    <e-col-m :span="24">
                        <div class="sub-title">square</div>
                        <div class="demo-basic--circle">
                            <div class="block">
                                <e-avatar-m shape="square" :size="50" :src="squareUrl" />
                            </div>
                            <div v-for="size in sizeList" :key="size" class="block">
                                <e-avatar-m shape="square" :size="size" :src="squareUrl" />
                            </div>
                        </div>
                    </e-col-m>
                </e-row-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">类型</text>
            <div class="example-card">
                <e-row-m class="demo-avatar demo-basic">
                    <e-col-m :span="24">
                        <div class="demo-basic--circle">
                            <div class="block">
                                <e-avatar-m :icon="UserFilled" />
                            </div>
                            <div class="block">
                                <e-avatar-m src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                            </div>
                            <div class="block">
                                <e-avatar-m> user </e-avatar-m>
                            </div>
                        </div>
                    </e-col-m>
                </e-row-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">加载失败</text>
            <div class="example-card">
                <div class="block">
                    <e-avatar-m :size="60" src="https://empty" @error="errorHandler">
                        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                    </e-avatar-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">适应容器</text>
            <div class="example-card">
                <e-row-m class="demo-avatar demo-basic">
                    <e-col-m :span="24">
                        <div class="demo-basic--circle">
                            <div v-for="fit in fits" :key="fit" class="flex">
                                <span class="title">{{ fit }}</span>
                                <e-avatar-m shape="square" :fit="fit" :src="url" />
                            </div>
                        </div>
                    </e-col-m>
                </e-row-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">徽标</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Square shape</div>
                    <e-row-m class="demo-avatar demo-basic demo-bottom">
                        <e-col-m :span="24">
                            <div class="demo-basic--circle">
                                <e-avatar-m shape="square" :count="10" src="https://picsum.photos/200/200/?random=1" alt="用户头像" />
                                <e-avatar-m shape="square" is-dot src="https://picsum.photos/200/200/?random=2" alt="用户头像" />
                                <e-avatar-m shape="square" :count="100">张三</e-avatar-m>
                            </div>
                        </e-col-m>
                    </e-row-m>
                    <div class="example-desc">Circle shape</div>
                    <e-row-m class="demo-avatar demo-basic">
                        <e-col-m :span="24">
                            <div class="demo-basic--circle">
                                <e-avatar-m :count="10" src="https://picsum.photos/200/200/?random=1" alt="用户头像" />
                                <e-avatar-m is-dot src="https://picsum.photos/200/200/?random=2" alt="用户头像" />
                                <e-avatar-m :count="100">张三</e-avatar-m>
                            </div>
                        </e-col-m>
                    </e-row-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">大小</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Square shape</div>
                    <e-row-m class="demo-avatar demo-basic demo-bottom">
                        <e-col-m :span="24">
                            <div class="demo-basic--circle">
                                <e-avatar-m shape="square" size="compact" src="https://picsum.photos/200/200/?random=1" alt="用户头像" />
                                <e-avatar-m shape="square" size="small" src="https://picsum.photos/200/200/?random=2" alt="用户头像" />
                                <e-avatar-m shape="square">张三</e-avatar-m>
                                <e-avatar-m shape="square" size="large" :icon="UserFilled" alt="用户头像" />
                            </div>
                        </e-col-m>
                    </e-row-m>
                    <div class="example-desc">Circle shape</div>
                    <e-row-m class="demo-avatar demo-basic">
                        <e-col-m :span="24">
                            <div class="demo-basic--circle">
                                <e-avatar-m shape="circle" size="compact" src="https://picsum.photos/200/200/?random=1" alt="用户头像" />
                                <e-avatar-m shape="circle" size="small" src="https://picsum.photos/200/200/?random=2" alt="用户头像" />
                                <e-avatar-m shape="circle">张三</e-avatar-m>
                                <e-avatar-m shape="circle" size="large" :icon="UserFilled" alt="用户头像" />
                            </div>
                        </e-col-m>
                    </e-row-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">头像组</text>
            <div class="example-card">
                <div class="avatar-group-container">
                    <e-avatar-group-m :avatar-list="avatarList" before-order />
                    <e-avatar-group-m :avatar-list="avatarList" />
                    <e-avatar-group-m :avatar-list="avatarList" :max-count="3" />
                    <e-avatar-group-m shape="circle" :avatar-list="avatarList2" />
                    <e-avatar-group-m shape="square" :avatar-list="avatarList2" />
                    <e-avatar-group-m shape="square" :avatar-list="avatarList2" :max-count="3" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';
import { UserFilled } from '@epoint-mfe/eui-icons';

const state = reactive({
    circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    sizeList: ['small', '', 'large'],
    fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
});

const { circleUrl, squareUrl, sizeList, fits, url } = toRefs(state);
const errorHandler = () => true;

const avatarList = [
    { src: 'https://picsum.photos/200/200/?random=1', alt: '用户头像' },
    { src: 'https://picsum.photos/200/200/?random=2', alt: '用户头像' },
    { src: 'https://picsum.photos/200/200/?random=3', alt: '用户头像' },
    { src: 'https://picsum.photos/200/200/?random=4', alt: '用户头像' },
    { src: 'https://picsum.photos/200/200/?random=5', alt: '用户头像' },
    { src: 'https://picsum.photos/200/200/?random=6', alt: '用户头像' },
    { src: 'https://picsum.photos/200/200/?random=7', alt: '用户头像' },
    { src: 'https://picsum.photos/200/200/?random=8', alt: '用户头像' },
];

const avatarList2 = [
    { src: 'https://picsum.photos/200/200/?random=1', alt: '用户头像' },
    { src: 'https://picsum.photos/200/200/?random=2', alt: '用户头像' },
    { src: 'https://picsum.photos/200/200/?random=3', alt: '用户头像' },
    { src: 'https://picsum.photos/200/200/?random=4', alt: '用户头像' },
];
</script>
<style scoped lang="scss">
@import '../css/common.scss';

.avatar-group-container {
    padding: 24px;

    .ep-avatar-group {
        margin-bottom: 10px;
    }
}

.demo-basic {
    text-align: center;

    &.demo-bottom {
        margin-bottom: 20px;
    }
}

.demo-basic .sub-title {
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--e-text-color-secondary);
}

.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .flex {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            margin-bottom: 10px;
        }
    }
}

.demo-basic .block {
    flex: 1;
}

.demo-basic .block:not(:last-child) {
    border-right: 1px solid var(--e-border-color);
}

.ep-avatar>img {
    display: block;
    height: 100%;
    max-width: 100%;
}
</style>
