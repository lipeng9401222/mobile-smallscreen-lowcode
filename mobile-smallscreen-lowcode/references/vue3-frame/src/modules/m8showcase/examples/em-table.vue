<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-table :data="origin" :height="400" align="center" @row-click="handleRowClick">
                <em-table-col prop="name" label="姓名" width="50%"></em-table-col>
                <em-table-col prop="score" label="分数" width="50%"></em-table-col>
            </em-table>
            <h4 class="cell-title">有边框</h4>
            <em-table :data="origin" :height="400" align="center" border>
                <em-table-col prop="name" label="姓名" width="50%"></em-table-col>
                <em-table-col prop="score" label="分数" width="50%"></em-table-col>
            </em-table>
            <h4 class="cell-title">无斑马纹</h4>
            <em-table :data="origin" :height="400" align="center" border :stripe="false">
                <em-table-col prop="name" label="姓名" width="50%"></em-table-col>
                <em-table-col prop="score" label="分数" width="50%"></em-table-col>
            </em-table>
            <h4 class="cell-title">不展示表头</h4>
            <em-table :data="origin" :height="400" align="center" :showHeader="false">
                <em-table-col prop="name" label="姓名" width="50%"></em-table-col>
                <em-table-col prop="score" label="分数" width="50%"></em-table-col>
            </em-table>
            <h4 class="cell-title">固定列</h4>
            <em-table :data="origin" :height="400" align="center">
                <em-table-col prop="name" label="姓名" fixed></em-table-col>
                <em-table-col prop="score" label="分数" fixed></em-table-col>
                <em-table-col prop="school" label="求学之所"></em-table-col>
                <em-table-col prop="major" label="专业" width="150"></em-table-col>
                <em-table-col prop="grade" label="年级"></em-table-col>
            </em-table>
            <h4 class="cell-title">显示索引</h4>
            <em-table :data="origin" :height="400" align="center" :index="{ align: 'center', width: 40 }">
                <em-table-col prop="name" label="姓名"></em-table-col>
                <em-table-col prop="score" label="分数"></em-table-col>
                <em-table-col prop="school" label="求学之所"></em-table-col>
                <em-table-col prop="major" label="专业" width="150"></em-table-col>
                <em-table-col prop="grade" label="年级"></em-table-col>
            </em-table>
            <h4 class="cell-title">排序事件</h4>
            <em-table :data="dataList1" :height="400" align="center" @sort="handleSort">
                <em-table-col prop="name" label="姓名" sortable></em-table-col>
                <em-table-col prop="score" label="分数" sortable></em-table-col>
                <em-table-col prop="school" label="求学之所"></em-table-col>
                <em-table-col prop="major" label="专业" width="150"></em-table-col>
                <em-table-col prop="grade" label="年级"></em-table-col>
            </em-table>
            <h4 class="cell-title">自定义列模板</h4>
            <em-table :data="origin" :height="400" align="center">
                <em-table-col prop="name" label="姓名"></em-table-col>
                <em-table-col prop="score" label="分数">
                    <template #value="{ row }">
                        <view class="score-wrapper">
                            <view class="score">{{ row.score }}</view>
                            <view>
                                同比
                                <text class="compare">{{ row.compare }}</text>
                            </view>
                        </view>
                    </template>
                </em-table-col>
                <em-table-col prop="school" label="求学之所"></em-table-col>
                <em-table-col prop="major" label="专业" width="150"></em-table-col>
                <em-table-col prop="grade" label="年级"></em-table-col>
            </em-table>
            <h4 class="cell-title">不固定表头结合分页器使用</h4>
            <em-table :data="dataList2" align="center" :fixed-header="false">
                <em-table-col prop="name" label="姓名" fixed></em-table-col>
                <em-table-col prop="score" label="分数" fixed></em-table-col>
                <em-table-col prop="school" label="求学之所"></em-table-col>
                <em-table-col prop="major" label="专业" width="150"></em-table-col>
                <em-table-col prop="grade" label="年级"></em-table-col>
            </em-table>
            <em-pagination
                v-model="currentPage"
                class="pagination"
                :items-per-page="perPageSize"
                mode="simple"
                :total-items="origin.length"
            ></em-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
            perPageSize: 5,
            origin: [
                {
                    name: '赵云',
                    score: 87,
                    school: '河南理工大学',
                    major: '计算机科学与技术',
                    grade: '2015级',
                    compare: '1.2%'
                },
                {
                    name: '孔明',
                    score: 100,
                    school: '河南理工大学',
                    major: '计算机科学与技术',
                    grade: '2015级',
                    compare: '1.2%'
                },
                {
                    name: '刘备',
                    score: 90,
                    school: '河南理工大学',
                    major: '计算机科学与技术',
                    compare: '1.2%',
                    grade: '2015级'
                },
                {
                    name: '关羽',
                    score: 88,
                    school: '河南理工大学',
                    compare: '1.2%',
                    major: '计算机科学与技术',
                    grade: '2015级'
                },
                {
                    name: '张飞',
                    score: 21,
                    school: '河南理工大学',
                    compare: '1.2%',
                    major: '计算机科学与技术',
                    grade: '2015级'
                },
                {
                    name: '曹操',
                    score: 99,
                    school: '河南理工大学',
                    compare: '1.2%',
                    major: '计算机科学与技术',
                    grade: '2015级'
                },
                {
                    name: '马超',
                    score: 70,
                    school: '河南理工大学',
                    compare: '1.2%',
                    major: '计算机科学与技术',
                    grade: '2015级'
                },
                {
                    name: '孔明',
                    score: 100,
                    school: '河南理工大学',
                    compare: '1.2%',
                    major: '计算机科学与技术',
                    grade: '2015级'
                },
                {
                    name: '刘备',
                    score: 90,
                    school: '河南理工大学',
                    compare: '1.2%',
                    major: '计算机科学与技术',
                    grade: '2015级'
                },
                {
                    name: '关羽',
                    score: 88,
                    school: '河南理工大学',
                    compare: '1.2%',
                    major: '计算机科学与技术',
                    grade: '2015级'
                },
                {
                    name: '张飞',
                    score: 21,
                    school: '河南理工大学',
                    compare: '1.2%',
                    major: '计算机科学与技术',
                    grade: '2015级'
                },
                {
                    name: '曹操',
                    score: 99,
                    school: '河南理工大学',
                    compare: '1.2%',
                    major: '计算机科学与技术',
                    grade: '2015级'
                },
                {
                    name: '马超',
                    score: 70,
                    school: '河南理工大学',
                    compare: '1.2%',
                    major: '计算机科学与技术',
                    grade: '2015级'
                }
            ],
            dataList1: []
        };
    },

    computed: {
        dataList2(){
            return this.origin.slice((this.currentPage - 1) * this.perPageSize, this.currentPage * this.perPageSize);
        }
    },

    created() {
        this.dataList1 = this.origin.slice(0);
    },

    methods: {
        handleRowClick(row) {
            console.log('点击行', row);
        },
        handleSort(e) {
            console.log('排序事件', e);
            // e.sortDirection === 0, 未排序
            // e.sortDirection === -1，升序, 箭头向下
            // e.sortDirection === 1，降序, 箭头向上
            const getSortFn = (prop, sortDirection) => {
                if (prop === 'name') {
                    return (a, b) => b.name.localeCompare(a.name) * sortDirection;
                } else if (prop === 'score') {
                    return (a, b) => (b.score - a.score) * sortDirection;
                }
            };
            this.dataList1 = this.origin.slice(0);
            this.dataList1.sort(getSortFn(e.prop, e.sortDirection));
        }
    }
};
</script>
<style scoped>
.van-content {
    /* height: 100vh; */
    padding: 0 10px 20px;
    /* background-color: #f7f8fa; */
}
.score-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    font-size: 14px;
    font-weight: 400;
}
.score,
.compare {
    font-size: 14px;
    font-weight: 400;
}
.score {
    color: aqua;
}
.compare {
    color: red;
}
.pagination{
    margin-top: 10px;
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
