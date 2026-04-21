<template>
    <div class="container">
        <div class="van-content">
            <map
                id="map"
                style="width: 100vw;height: 300px;"
                :longitude="longitude"
                :latitude="latitude"
                show-location
                :circles="circles"
                :controls="controls"
                @controltap="update"
            >
            </map>
            <em-cell-group class="mt10">
                <em-cell
                    v-for="(item, index) in pois"
                    :title="item.name"
                    :key="index"
                    :label="item.address"
                    icon="location-o"
                    size="large"
                ></em-cell>
            </em-cell-group>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Map',
    data() {
        return {
            // 周边POI信息数组
            pois: [],
            // 正在定位标识
            loading: true,
            // 当前位置经纬度
            longitude: 0,
            latitude: 0,
            // 在地图上的圆数组
            circles: []
        };
    },
    computed: {
        // 地图控件使用的图片
        iconPath() {
            return `/static/images/map-icon-${this.loading ? 'waite' : 'locate'}.png`;
        },
        // 自定义控件数组，本示例自定义的控件为定位控件
        controls() {
            return [
                {
                    id: 1,
                    position: {
                        width: 32,
                        height: 32,
                        left: 10,
                        top: 300 - 42
                    },
                    iconPath: this.iconPath,
                    clickable: true
                }
            ];
        }
    },
    methods: {
        // 刷新定位
        update() {
            this.loading = true;

            EmMap({
                // 组件提供的函数获取POI信息需要传腾讯地图的key
                qqMapKey: '76FBZ-4C76F-733J7-NFVFX-5O6A6-VRFSW',
                // 获取周边信息
                poicallback: (res) => {
                    this.pois = res.pois.slice(0);
                },
                error: (err) => {
                    this.loading = false;
                    console.error('定位失败：', err);
                },
                success: (position) => {
                    this.loading = false;
                    this.longitude = position[0];
                    this.latitude = position[1];

                    this.circles = [
                        {
                            longitude: this.longitude,
                            latitude: this.latitude,
                            radius: 100,
                            strokeWidth: 2,
                            color: '#2e6be5' + '9A',
                            fillColor: '#d8e4ff' + '6A'
                        }
                    ];
                }
            });
        }
    },
    mounted() {
        this.update();
    }
};
</script>

<style lang="scss" scoped>
.mt10 {
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
    color: rgba(69, 90, 100, .6);
    font-size: 14px;
    font-weight: 400;
}
</style>