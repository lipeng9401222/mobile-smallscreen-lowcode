<template>
    <div class="container" :class="showPicker ? 'scrollforbid' : ''">
        <div class="em-content">
            <em-cell is-link @click="showPicker = true" title="基础用法" />
            <em-picker
                v-model="showPicker"
                title="标题"
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="onCancel"
                @change="onChange"
            />

            <em-cell is-link @click="show2 = true" title="默认选中项" />
            <em-picker show-toolbar v-model="show2" :columns="column1" :default-index="2" />

            <em-cell is-link @click="show3 = true" title="展示顶部栏" />
            <em-picker
                show-toolbar
                v-model="show3"
                title="标题"
                :columns="column1"
                @change="onChange"
                @confirm="onConfirm"
                @cancel="onCancel"
            />
            <em-cell is-link @click="show7 = true" title="多列选择" />
            <em-picker v-model="show7" show-toolbar title="标题" :columns="column7" />

            <em-cell is-link @click="show4 = true" title="动态设置选项" />
            <em-picker
                v-model="show4"
                show-toolbar
                :columns="column4"
                @change="onChange2"
                @confirm="onConfirm"
                @cancel="onCancel"
                ref="picker"
            />

            <em-cell is-link @click="show8 = true" title="级联选项" />
            <em-picker v-model="show8" show-toolbar :columns="column8" @confirm="onConfirm" @cancel="onCancel" />

            <em-cell is-link @click="show5 = true" title="禁用选项" />
            <em-picker v-model="show5" show-toolbar :columns="column2" />

            <em-cell is-link @click="onClickLoading" title="加载状态" />
            <em-picker v-model="show6" :loading="loading" show-toolbar :columns="column6" />
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script lang="ts">
const cities = {
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    福建: ['福州', '厦门', '莆田', '三明', '泉州']
};

export default {
    name: 'Picker',
    data() {
        return {
            showPicker: false,
            columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
            loading: true,
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            column2: [{ text: '杭州', disabled: true }, { text: '宁波' }, { text: '温州' }],
            column3: {
                浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
                福建: ['福州', '厦门', '莆田', '三明', '泉州']
            },
            column5: {
                杭州: ['滨江区', '淳安县', '富阳区', '拱墅区'],
                福州: ['仓山区', '福清市', '鼓楼区', '晋安区', '连江县']
            },
            column4: [{ values: Object.keys(cities) }, { values: cities['浙江'] }],
            column6: [],
            column7: [
                // 第一列
                {
                    values: ['周一', '周二', '周三', '周四', '周五'],
                    defaultIndex: 2
                },
                // 第二列
                {
                    values: ['上午', '下午', '晚上'],
                    defaultIndex: 1
                }
            ],
            show8: false,
            column8: [
                {
                    text: '浙江',
                    children: [
                        {
                            text: '杭州',
                            children: [{ text: '西湖区' }, { text: '余杭区' }]
                        },
                        {
                            text: '温州',
                            children: [{ text: '鹿城区' }, { text: '瓯海区' }]
                        }
                    ]
                },
                {
                    text: '福建',
                    children: [
                        {
                            text: '福州',
                            children: [{ text: '鼓楼区' }, { text: '台江区' }]
                        },
                        {
                            text: '厦门',
                            children: [{ text: '思明区' }, { text: '海沧区' }]
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        onChange(value, index) {
            Toast({
                zIndex: 3000,
                message: `Value: ${value}, Index:${index}`
            });
        },
        onConfirm(value, index) {
            Toast({
                zIndex: 3000,
                message: `Value: ${value}, Index:${index}`
            });
        },
        onCancel() {
            Toast({
                zIndex: 3000,
                message: '取消'
            });
        },
        onChange2(values) {
            this.$refs.picker.setColumnValues(1, cities[values[0]]);
        },
        onClickLoading() {
            this.loading = true;
            this.show6 = true;
            setTimeout(() => {
                this.loading = false;
                this.column6 = ['选项'];
            }, 2000);
        }
    }
};
</script>

<style scoped lang="scss">
.container {
    box-sizing: border-box;
    padding: 10px;
    height: 100vh;
}

.scrollforbid {
    overflow: hidden;
}
.em-content {
    background-color: #f7f8fa;
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