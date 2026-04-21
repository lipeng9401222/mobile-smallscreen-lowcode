<template>
    <div class="container">
        <div class="em-content">
            <h4 class="cell-title">基础用法</h4>
            <em-tabbar v-model="active" @change="onChange" :fixed="false">
                <em-tabbar-item icon="home-o">标签1</em-tabbar-item>
                <em-tabbar-item icon="search">标签1</em-tabbar-item>
                <em-tabbar-item icon="friends-o" to="./em-image">标签</em-tabbar-item>
                <em-tabbar-item icon="setting-o" to="./em-tag">标签</em-tabbar-item>
            </em-tabbar>

            <h4 class="cell-title">通过名称匹配</h4>
            <em-tabbar v-model="active2" @change="onChange" :fixed="false">
                <em-tabbar-item name="home" icon="home-o">标签</em-tabbar-item>
                <em-tabbar-item name="search" icon="search">标签</em-tabbar-item>
                <em-tabbar-item name="friends" icon="friends-o">标签</em-tabbar-item>
                <em-tabbar-item name="setting" icon="setting-o">标签</em-tabbar-item>
            </em-tabbar>

            <h4 class="cell-title">显示徽标</h4>
            <em-tabbar v-model="active3" @change="onChange" :fixed="false">
                <em-tabbar-item icon="home-o">标签</em-tabbar-item>
                <em-tabbar-item icon="search" dot>标签</em-tabbar-item>
                <em-tabbar-item icon="friends-o" badge="5">标签</em-tabbar-item>
                <em-tabbar-item icon="setting-o" badge="20">标签</em-tabbar-item>
            </em-tabbar>

            <h4 class="cell-title">自定义图标</h4>
            <em-tabbar v-model="active4" @change="onChange" :fixed="false">
                <em-tabbar-item badge="3">
                    <template #icon="props">
                        <image
                            :src="props.active ? icon.active : icon.inactive"
                            mode="aspectFit"
                            style="width: 30px; height: 18px"
                        />
                    </template>
                    自定义
                </em-tabbar-item>
                <em-tabbar-item icon="search">标签</em-tabbar-item>
                <em-tabbar-item icon="setting-o">标签</em-tabbar-item>
            </em-tabbar>

            <h4 class="cell-title">自定义颜色</h4>
            <em-tabbar v-model="active5" active-color="#07c160" inactive-color="#000" @change="onChange" :fixed="false">
                <em-tabbar-item icon="home-o">标签</em-tabbar-item>
                <em-tabbar-item icon="search">标签</em-tabbar-item>
                <em-tabbar-item icon="friends-o">标签</em-tabbar-item>
                <em-tabbar-item icon="setting-o">标签</em-tabbar-item>
            </em-tabbar>
            <h4 class="cell-title">监听切换事件</h4>
            <em-tabbar v-model="active6" @change="onChange" :before-change="beforeChange" :fixed="false">
                <em-tabbar-item icon="home-o">标签1</em-tabbar-item>
                <em-tabbar-item icon="search">标签2</em-tabbar-item>
                <em-tabbar-item icon="friends-o">标签3</em-tabbar-item>
                <em-tabbar-item icon="setting-o">标签4</em-tabbar-item>
            </em-tabbar>
        </div>
        <em-notify ref="emNotify"></em-notify>
    </div>
</template>

<script>
export default {
    name: 'Tabbar',
    data() {
        return {
            active: 1,
            active2: 'home',
            active3: 0,
            active4: 0,
            active5: 0,
            active6: 3,
            icon: {
                active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png',
                inactive: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png'
            },
            beforeChange: (name) => {
                var Console = console;

                Console.log('??', name);

                return true;
            }
        };
    },
    methods: {
        onChange(index) {
            Notify({ type: 'primary', message: index });
        }
    }
};
</script>

<style scoped>
.container {
    height: 100vh;
    background-color: #f5f5f5;
}

.cell-title:first-child {
    padding-top: 15px;
    margin-top: 0;
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