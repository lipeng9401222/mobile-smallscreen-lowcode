<template>
    <div class="container unit gary-bg" ref="container">
        <section class="role-content">
            <div class="login-title">
                <div class="title">请选择你的登录角色</div>
                <h5 class="sub-title">可在用户中心切换登录身份</h5>
            </div>

            <!-- 企业身份 -->
            <section class="enterprise" v-if="identityList.length > 0">
                <div class="title-items">
                    <div class="comment-bubble">
                        <span class="comment-bubble2">企业身份</span>
                    </div>
                </div>

                <ul class="main-ul-items">
                    <li class="main-li-item" v-for="(item, index) in identityList" :key="index" @click="onSubmit(item)">
                        <h5 class="li-title text-ellipsis">{{ item.ouname }}</h5>
                        <div class="icon-right subtitle-items" >
                            <div class="left-items">
                                <h4 class="li-subtitle clamp2">
                                    {{ item.username }}
                                </h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            personal: {},
            typelist: [],
            peopelData: {},
            identityList: []
        };
    },
    computed: {},
    mounted() {},
    onLoad: function (option) {
        try {
            this.identityList = JSON.parse(option.identity_list);
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        onSubmit: function (item) {
            Util.$emit('legalChoiceTokenSuccess', item);
        }
    }
};
</script>

<style lang="scss">
@import './scss/login_choice_identity.scss';
</style>
