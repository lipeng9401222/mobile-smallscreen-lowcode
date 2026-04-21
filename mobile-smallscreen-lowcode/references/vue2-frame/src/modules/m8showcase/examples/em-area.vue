<template>
    <div class="container">
        <div class="van-content">
            <em-cell @click="show1 = true">基础用法</em-cell>
            <em-area
                v-model="show1"
                title="标题"
                :area-list="areaList"
            ></em-area>
            <em-cell @click="show2 = true">选中省市区</em-cell>
            <em-area
                v-model="show2"
                title="标题"
                :area-list="areaList"
                code-value="120105"
            ></em-area>
            <em-cell @click="show3 = true">配置显示列</em-cell>
            <em-area
                v-model="show3"
                title="标题"
                :area-list="areaList"
                :columns-num="2"
            ></em-area>
            <em-cell @click="show4 = true">配置列占位提示文字</em-cell>
            <em-area
                v-model="show4"
                title="标题"
                :area-list="areaList"
                :columns-placeholder="['请选择', '请选择', '请选择']"
            ></em-area>
            <em-toast ref="emToast"></em-toast>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AreaDemo',
    data() {
        return {
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            areaList: {
                province_list: {
                    110000: '北京市',
                    120000: '天津市'
                },
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市',
                    120200: '县'
                },
                county_list: {
                    110101: '东城区',
                    110102: '西城区',
                    110105: '朝阳区',
                    110106: '丰台区',
                    120101: '和平区',
                    120102: '河东区',
                    120103: '河西区',
                    120104: '南开区',
                    120105: '河北区'
                }
            }
        };
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
    color: rgba(69, 90, 100, .6);
    font-size: 14px;
    font-weight: 400;
}
</style>