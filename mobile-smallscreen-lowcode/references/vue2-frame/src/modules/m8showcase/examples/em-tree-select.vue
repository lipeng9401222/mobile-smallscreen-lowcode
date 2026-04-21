<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">单选模式</h4>
            <em-tree-select
                :items="items"
                :active-id.sync="activeId"
                :main-active-index.sync="activeIndex"
                @click-nav="onNavClick"
                @click-item="onItemClick"
            >
            </em-tree-select>
            <h4 class="cell-title">多选模式</h4>
            <em-tree-select
                :items="items"
                :active-id.sync="activeIds"
                :main-active-index.sync="activeIndex1"
                @click-nav="onNavClick"
                @click-item="onItemClick"
            >
            </em-tree-select>
            <h4 class="cell-title">自定义内容</h4>
            <em-tree-select
                :items="items1"
                :main-active-index.sync="activeIndex2"
                @click-nav="onNavClick"
            >
                <template #content>
                    <em-image
                        v-if="activeIndex2 === 0"
                        :width="240"
                        :height="190"
                        src="https://img.yzcdn.cn/vant/apple-1.jpg"
                    />
                    <em-image
                        :width="240"
                        :height="190"
                        v-if="activeIndex2 === 1"
                        src="https://img.yzcdn.cn/vant/apple-2.jpg"
                    />
                </template>
            </em-tree-select>
            <h4 class="cell-title">徽标提示</h4>
            <em-tree-select
                :items="items2"
                :main-active-index.sync="activeIndex3"
            >
            </em-tree-select>
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script>
export default {
    name: 'treeSelectDemo',
    data() {
        return {
            items: [
                {
                    text: '所有城市',
                    children: [
                        {
                            text: '温州',
                            id: 1,
                            disabled: true
                        },
                        {
                            text: '杭州',
                            id: 2
                        },
                        {
                            text: '南京',
                            id: 3
                        },
                        {
                            text: '苏州',
                            id: 4
                        }
                    ]
                },
                {
                    text: '浙江',
                    children: [
                        {
                            text: '温州',
                            id: 1,
                            disabled: true
                        },
                        {
                            text: '杭州',
                            id: 2
                        }
                    ]
                },
                {
                    text: '江苏',
                    children: [
                        {
                            text: '南京',
                            id: 3
                        },
                        {
                            text: '苏州',
                            id: 4
                        }
                    ]
                }
            ],
            items1: [
                {
                    text: '分组1'
                },
                {
                    text: '分组2'
                }
            ],
            items2: [
                {
                    text: '浙江',
                    dot: true,
                    children: [
                        {
                            text: '温州',
                            id: 1,
                            disabled: true
                        },
                        {
                            text: '杭州',
                            id: 2
                        }
                    ]
                },
                {
                    text: '江苏',
                    badge: 5,
                    children: [
                        {
                            text: '南京',
                            id: 3
                        },
                        {
                            text: '苏州',
                            id: 4
                        }
                    ]
                }
            ],
            activeId: 2,
            activeIds: [2],
            activeIndex: 1,
            activeIndex1: 1,
            activeIndex2: 1,
            activeIndex3: 1,
            max: 2
        };
    },
    methods: {
        onNavClick(index) {
            Toast(`触发点击事件，index:${index}`);
        },
        onItemClick(item) {
            Toast(`触发点击事件，item:${JSON.stringify(item)}`);
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
    color: rgba(69, 90, 100, .6);
    font-size: 14px;
    font-weight: 400;
}
</style>