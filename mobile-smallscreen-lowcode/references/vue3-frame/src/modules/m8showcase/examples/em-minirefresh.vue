<template>
    <view>
        <em-tabs v-model="active">
            <em-tab title="基础用法">
                <em-minirefresh
                    ref="scrollPull"
                    :page-size="pageSize"
                    :url="url"
                    :request-data="dataRequest"
                    :change-data="dataChange"
                >
                    <template #default="{ listData }">
                        <em-cell
                            v-for="(item, index) in listData"
                            :key="index"
                            :title="item.title"
                            @click="itemClick(item)"
                        />
                    </template>
                </em-minirefresh>
            </em-tab>
            <em-tab title="自定义获取数据源">
                <em-minirefresh ref="minirefresh2" :page-size="pageSize" useCustomRequest @request="request">
                    <template #default="{ listData }">
                        <em-cell
                            v-for="(item, index) in listData"
                            :key="index"
                            :title="item.title"
                            @click="itemClick(item)"
                        />
                    </template>
                </em-minirefresh>
            </em-tab>
        </em-tabs>
    </view>
</template>

<script lang="ts">
export default {
    data() {
        return {
            url: '/rest/mock/goods',
            initPageIndex: 0,
            // 每次请求的分页大小
            pageSize: 10,
            active: 0
        };
    },
    methods: {
        // 请求参数函数
        dataRequest(currPage, pageSize) {
            const data = {
                // keyword: this.keyWord,
                // 当前搜索的第几页，数字类型
                currentpageindex: currPage,
                // 每页显示记录条数，数字类型
                pagesize: pageSize
            };
            const requestData = {
                params: JSON.stringify(data)
            };

            return requestData;
        },
        // 修改数据返回参数
        dataChange(res) {
            let data;

            if (res && res.status && res.status.code && res.status.code === 1) {
                data = res.custom.infolist;
            } else {
                console.error('接口返回参数错误');
            }

            return data;
        },
        // 列表模板绑定的点击事件函数
        itemClick(item) {
            console.log(item);
        },
        request(options, successcb) {
            console.log('options', options);
            setTimeout(() => {
                let res = [
                    {
                        title: '选择标题样式,在这里更改标题的排列方式'
                    },
                    {
                        title: '选择标题'
                    },
                    {
                        title: '选择标题样式,在这'
                    },
                    {
                        title: '选择标题样式,在这里更改标题的排列方式'
                    },
                    {
                        title: '选择'
                    },
                    {
                        title: '选择标题样式,在这里更改标题的'
                    },
                    {
                        title: '选择标题样式'
                    }
                ];

                successcb(res);
            }, 1000);
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
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
