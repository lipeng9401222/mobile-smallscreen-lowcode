<template>
    <div class="content">
        <em-cell-group class="em-cell-group">
            <em-cell is-link class="title" @click="loginP">平台小程序登录-公众版</em-cell>
            <em-cell is-link class="title" @click="loginI">平台小程序登录-内部版</em-cell>
        </em-cell-group>
    </div>
</template>

<script>
export default {
    methods: {
        loginP() {
            ejs.page.replace({
                url: './public'
            });
        },
        loginI() {
            ejs.page.replace({
                url: './internal'
            });
        }
    }
};
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.em-cell-group {
    width: 100%;
}
</style>
