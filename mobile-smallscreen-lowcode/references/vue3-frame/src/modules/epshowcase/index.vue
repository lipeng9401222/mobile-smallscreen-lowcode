<template>
    <div>
        <em-collapse v-model="activeNames">
            <em-collapse-item v-for="(v, i) in menu" :title="v.title" :name="i + 1" :key="i">
                <em-cell-group :border="false">
                    <em-cell
                        v-for="(item, index) in v.children"
                        :key="index"
                        :url="item.to"
                        is-link
                        :title="item.title"
                        :border="index !== v.children.length - 1"
                    ></em-cell>
                </em-cell-group>
            </em-collapse-item>
        </em-collapse>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Navigation',
    data() {
        return {
            activeNames: [1],
            menu: [
                {
                    title: '基础组件',
                    children: [
                        {
                            title: 'Button',
                            to: 'examples/e-button-m'
                        },
                        {
                            title: 'Collapse',
                            to: 'examples/e-collapse-m'
                        },
                        {
                            title: 'Badge',
                            to: 'examples/e-badge-m'
                        },
                        {
                            title: 'Slider',
                            to: 'examples/e-slider-m'
                        },
                        {
                            title: 'Checkbox',
                            to: 'examples/e-checkbox-m'
                        },
                        {
                            title: 'Switch',
                            to: 'examples/e-switch-m'
                        },
                        {
                            title: 'Dialog',
                            to: 'examples/e-dialog-m'
                        },
                        {
                            title: 'Icon',
                            to: 'examples/e-icon-m'
                        },
                        {
                            title: 'Tooltip',
                            to: 'examples/e-tooltip-m'
                        },
                        {
                            title: 'Radiobox',
                            to: 'examples/e-radio-m'
                        },
                        {
                            title: 'Rate',
                            to: 'examples/e-rate-m'
                        },
                        {
                            title: 'Tag',
                            to: 'examples/e-tag-m'
                        },
                        {
                            title: 'Drawer',
                            to: 'examples/e-drawer-m'
                        },
                        {
                            title: 'Buttonedit',
                            to: 'examples/e-buttonedit-m'
                        },
                        {
                            title: 'Step',
                            to: 'examples/e-steps-m'
                        },
                        {
                            title: 'Popover',
                            to: 'examples/e-popover-m'
                        },
                        {
                            title: 'overlay',
                            to: 'examples/e-overlay-m'
                        },
                        {
                            title: 'input-number',
                            to: 'examples/e-input-number-m'
                        },
                        {
                            title: 'progress',
                            to: 'examples/e-progress-m'
                        },
                        {
                            title: 'layout',
                            to: 'examples/e-layout-m'
                        },
                        {
                            title: 'dropdown',
                            to: 'examples/e-dropdown-m'
                        },
                        {
                            title: 'toolbar-btns',
                            to: 'examples/e-toolbar-btns-m'
                        },
                        {
                            title: 'input',
                            to: 'examples/e-input-m'
                        },
                        {
                            title: 'autocomplete',
                            to: 'examples/e-autocomplete-m'
                        },
                        {
                            title: 'popover',
                            to: 'examples/e-popover-m'
                        },
                        {
                            title: 'image',
                            to: 'examples/e-image-m'
                        },
                        {
                            title: 'select',
                            to: 'examples/e-select-m'
                        },
                        {
                            title: 'divider',
                            to: 'examples/e-divider-m'
                        },
                        {
                            title: 'cascader',
                            to: 'examples/e-cascader-m'
                        },
                        {
                            title: 'form',
                            to: 'examples/e-form-m'
                        },
                        {
                            title: 'tree',
                            to: 'examples/e-tree-m'
                        },
                        {
                            title: 'tree-select',
                            to: 'examples/e-tree-select-m'
                        },
                        {
                            title: 'tree-select-v2',
                            to: 'examples/e-tree-select-m'
                        },
                        {
                            title: 'verifycode',
                            to: 'examples/e-verifycode-m'
                        },
                        {
                            title: 'ewebeditor',
                            to: 'examples/e-eweb-editor-m'
                        },
                        {
                            title: 'workflow',
                            to: 'examples/e-workflow-m'
                        },
                        {
                            title: 'webuploader',
                            to: 'examples/e-upload-m'
                        },
                        {
                            title: 'table',
                            to: 'examples/e-table-m'
                        },
                        {
                            title: 'table',
                            to: 'examples/e-date-picker-m'
                        },
                        {
                            title: 'picker',
                            to: 'examples/e-picker-m'
                        },
                        {
                            title: 'calendar',
                            to: 'examples/e-calendar-m'
                        },
                        {
                            title: 'datetime-picker',
                            to: 'examples/e-datetime-picker-m'
                        },
                        {
                            title: 'breadcrumb',
                            to: 'examples/e-breadcrumb-m'
                        },
                        {
                            title: 'sublist',
                            to: 'examples/e-sublist-m'
                        },
                        {
                            title: 'pagination',
                            to: 'examples/e-pagination-m'
                        },
                        {
                            title: 'affix',
                            to: 'examples/e-affix-m'
                        },
                        {
                            title: 'avatar',
                            to: 'examples/e-avatar-m'
                        },
                        {
                            title: 'input-tag',
                            to: 'examples/e-input-tag-m'
                        },
                        {
                            title: 'card',
                            to: 'examples/e-card-m'
                        }

                    ]
                }
            ]
        };
    },
    methods: {
        openPage(url: string) {
            uni.navigateTo({
                url
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding: 10px;
}

.component-title {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    color: #455a64;
}

.list {
    margin-top: 100px;
    flex: 1;
    height: 600px;
}
.cell {
    height: 60px;
    border-bottom: 1px solid #888;
}
.cell-text {
    font-size: 18px;
}
</style>
