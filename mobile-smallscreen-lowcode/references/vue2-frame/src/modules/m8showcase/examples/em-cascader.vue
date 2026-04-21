<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-field
                v-model="fieldValue"
                is-link
                readonly
                label="地区"
                placeholder="请选择所在地区"
                @touchend.native="show = true"
            />
            <em-cascader
                v-model="show"
                title="请选择所在地区"
                :selectedValue="cascaderValue"
                :options="options"
                @close="show = false"
                @finish="onFinish"
            />

            <h4 class="cell-title">自定义颜色</h4>
            <em-field
                v-model="fieldValue2"
                is-link
                readonly
                label="地区"
                placeholder="请选择所在地区"
                @touchend.native="show2 = true"
            />
            <em-cascader
                v-model="show2"
                title="请选择所在地区"
                active-color="#1989fa"
                :options="options"
                @close="show2 = false"
                @finish="onFinish2"
            />

            <h4 class="cell-title">异步加载选项</h4>
            <em-field
                v-model="fieldValue3"
                is-link
                readonly
                label="地区"
                placeholder="请选择所在地区"
                @touchend.native="show3 = true"
            />
            <em-cascader
                v-model="show3"
                :selectedValue="cascaderValue2"
                title="请选择所在地区"
                :options="options2"
                @close="show3 = false"
                @finish="onFinish3"
                @change="onChange"
            />

            <h4 class="cell-title">自定义字段名</h4>
            <em-field
                v-model="fieldValue4"
                is-link
                readonly
                label="地区"
                placeholder="请选择所在地区"
                @touchend.native="show4 = true"
            />
            <em-cascader
                v-model="show4"
                title="请选择所在地区"
                :options="options3"
                :field-names="fieldNames"
                @close="show4 = false"
                @finish="onFinish4"
            />
        </div>
    </div>
</template>

<script>

export default {
    name: 'Cascader',
    data() {
        return {
            show: false,
            show2: false,
            show3: false,
            show4: false,
            fieldValue: '',
            fieldValue2: '',
            fieldValue3: '',
            fieldValue4: '',
            cascaderValue: '',
            cascaderValue2: '',
            // 选项列表，children 代表子选项，支持多级嵌套
            options: [
                {
                    text: '浙江省',
                    value: '330000',
                    children: [{ text: '杭州市', value: '330100' }]
                },
                {
                    text: '江苏省',
                    value: '320000',
                    children: [{ text: '南京市', value: '320100' }]
                }
            ],
            options2: [
                {
                    text: '浙江省',
                    value: '330000',
                    children: []
                }
            ],
            options3: [
                {
                    name: '浙江省',
                    code: '330000',
                    items: [{ name: '杭州市', code: '330100' }]
                },
                {
                    name: '江苏省',
                    code: '320000',
                    items: [{ name: '南京市', code: '320100' }]
                }
            ],
            fieldNames: {
                text: 'name',
                value: 'code',
                children: 'items'
            }
        };
    },
    methods: {
        onFinish({ selectedOptions }) {
            this.show = false;
            this.fieldValue = selectedOptions.map((option) => option.text).join('/');
        },
        onFinish2({ selectedOptions }) {
            this.show2 = false;
            this.fieldValue2 = selectedOptions.map((option) => option.text).join('/');
        },
        onFinish3({ selectedOptions }) {
            this.show3 = false;
            this.fieldValue3 = selectedOptions.map((option) => option.text).join('/');
        },
        onFinish4({ selectedOptions }) {
            this.show4 = false;
            this.fieldValue4 = selectedOptions.map((option) => option.name).join('/');
        },
        onChange({ value }) {
            if (value === this.options2[0].value) {
                setTimeout(() => {
                    this.options2[0].children = [
                        { text: '杭州市', value: '330100' },
                        { text: '宁波市', value: '330200' }
                    ];
                }, 500);
            }
        }
    }
};
</script>

<style scoped>
.van-content {
    padding: 10px;
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