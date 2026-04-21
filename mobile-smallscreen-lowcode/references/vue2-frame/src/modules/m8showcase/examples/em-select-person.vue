<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">选择人员</h4>
            <em-cell is-link @click="select1" title="选择人员">
                <em-tag v-for="(person, index) in selectedusers1" :key="index" class="tags" basic-type="person">
                    {{ person.displayname }}
                </em-tag>
            </em-cell>

            <h4 class="cell-title">配置选人主页</h4>
            <em-cell
                is-link
                @click="select2"
                title="配置选人主页"
            >
                <em-tag v-for="(person, index) in selectedusers2" :key="index" class="tags" basic-type="person">
                    {{ person.displayname }}
                </em-tag>
            </em-cell>

            <h4 class="cell-title">自定义选人树</h4>
            <em-cell
                is-link
                @click="select3"
                title="自定义选人树"
            >
                <em-tag v-for="(person, index) in selectedusers3" :key="index" class="tags" basic-type="person">
                    {{ person.displayname }}
                </em-tag>
            </em-cell>

            <h4 class="cell-title">只选部门</h4>
            <em-cell
                is-link
                @click="select4"
                title="只选部门"
            >
                <em-tag v-for="(ou, index) in selectedous" :key="index" class="tags" basic-type="person">
                    {{ ou.ouname }}
                </em-tag>
            </em-cell>

            <h4 class="cell-title">直接进入子级</h4>
            <em-cell
                is-link
                @click="select5"
                title="直接进入子级"
            >
                <em-tag v-for="(person, index) in selectedusers5" :key="index" class="tags" basic-type="person">
                    {{ person.displayname }}
                </em-tag>
            </em-cell>

        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'select-person',
    data() {
        return {
            url: 'http://192.168.118.8:8080/epoint-gateway/oa9_v7/rest/oa9/',
            show: false,
            homepage: [
                {
                    value: 'custom',
                    text: '个性化接口获取选人树',
                    // 需要传递完整路径
                    url: 'http://172.29.3.2:8080/epoint-shell-member-center-demo/rest/frame/address_getoulistwithuser_v8',
                    // 同时需配置获取部门下所有人员接口，参考 address_getalluserlist_v7，否则无法选择部门
                    getalluserurl:
                        'http://172.29.3.2:8080/epoint-shell-member-center-demo/rest/frame/address_getalluserlist_v7'
                },
                {
                    value: 'custom',
                    text: '从组织架构某一节点开始选人',
                    ouguid: '该节点的ouguid'
                },
                {
                    value: 'custom',
                    text: '完整的选人树',
                    custom: {
                        // 传递一个完整的选人树时，以下字段都是必需的
                        oulist: [
                            {
                                ouguid: '491c9e1f-77c9-4e9e-b724-f9d0df1f3e78',
                                ouname: '客户服务中心',
                                parentouguid: 'root',
                                haschildou: '1',
                                haschilduser: '1',
                                userlist: [
                                    {
                                        userguid: '2b540caa-2571-4062-a608-683325743f18',
                                        username: '张三',
                                        ouguid: '491c9e1f-77c9-4e9e-b724-f9d0df1f3e78',
                                        photourl:
                                            'rest/readpictureaction/getUserPicture?isCommondto=true&userGuid=2b540caa-2571-4062-a608-683325743f18&isMobile=true&md5=60f5e34d897312c4d89ad213934a82e1'
                                    }
                                ]
                            },
                            {
                                ouguid: 'd07d4916-ed90-47d0-82f6-4313bcbf7725',
                                ouname: '现金管理部',
                                parentouguid: 'root',
                                haschildou: '0',
                                haschilduser: '0'
                            }
                        ],
                        userlist: [
                            {
                                userguid: 'ddf347c2-ba4a-41fc-8367-fa74794d230d',
                                username: '曹六',
                                ouguid: 'root',
                                photourl:
                                    'lest/readpictureaction/getUserPicture?isCommondto=true&userGuid=ddf347c2-ba4a-41fc-8367-fa74794d230d&isMobile=true&md5=b6caaa28319c5e26d6f57ea2efc58800'
                            }
                        ]
                    }
                }
            ],
            selectedusers1: [],
            selectedusers2: [],
            selectedusers3: [],
            selectedous: [],
            selectedusers5: [],
            selectedusers6: []
        };
    },
    methods: {
        ...mapMutations('selectperson', ['setOption']),
        openSelectPerson(options) {
            this.setOption(options);

            ejs.page.open({
                pageUrl: '../../selectperson/index'
            });
        },
        confirm(result, index) {
            // 选人结果
            this[`selectedusers${index}`] = result.resultData;
        },
        confirmOu(result) {
            this.selectedous = result.ouData;
        },
        select1() {
            let opt = {
                url: this.url,
                selectedusers: this.selectedusers1,
                confirm: (data) => this.confirm(data, 1)
            };

            this.openSelectPerson(opt);
        },
        select2() {
            let opt = {
                url: this.url,
                selectedusers: this.selectedusers2,
                homepage: [
                    '1',
                    {
                        value: '0',
                        text: '所有人员'
                    }
                ],
                confirm: (data) => this.confirm(data, 2)
            };

            this.openSelectPerson(opt);
        },
        select3() {
            let opt = {
                url: this.url,
                selectedusers: this.selectedusers3,
                homepage: this.homepage,
                confirm: (data) => this.confirm(data, 3)
            };

            this.openSelectPerson(opt);
        },
        select4() {
            let opt = {
                url: this.url,
                isouonly: true,
                selectedous: this.selectedous,
                confirm: this.confirmOu
            };

            this.openSelectPerson(opt);
        },
        select5() {
            let opt = {
                url: this.url,
                ismoveup: true,
                selectedusers: this.selectedusers5,
                homepage: ['0'],
                confirm: (data) => this.confirm(data, 5)
            };

            this.openSelectPerson(opt);
        }
    }
};
</script>

<style lang="scss" scoped>
.tags {
    margin-left: 5px;
}

::v-deep .em-cell__value {
    flex: 2;
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