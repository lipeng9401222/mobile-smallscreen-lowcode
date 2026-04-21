<template>
    <div class="van-content">
        <div class="example-group">

            <text class="cell-title">基本用法</text>

            <div class="example-card">

                <e-timeline-m>
                <e-timeline-item-m v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
                    {{ activity.content }}
                </e-timeline-item-m>
            </e-timeline-m>

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">自定义节点</text>

            <div class="example-card">

                <e-timeline-m>
                <e-timeline-item-m
                    v-for="(activity, index) in activities"
                    :key="index"
                    :icon="activity.icon"
                    :type="activity.type"
                    :color="activity.color"
                    :size="activity.size"
                    :hollow="activity.hollow"
                    :timestamp="activity.timestamp"
                >
                    {{ activity.content }}
                </e-timeline-item-m>
            </e-timeline-m>

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">自定义时间戳</text>

            <div class="example-card">

                <e-timeline-m>
                <e-timeline-item-m timestamp="2018/4/12" placement="top">
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/12 20:46</p>
                </e-timeline-item-m>
                <e-timeline-item-m timestamp="2018/4/3" placement="top">
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/3 20:46</p>
                </e-timeline-item-m>
                <e-timeline-item-m timestamp="2018/4/2" placement="top">
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/2 20:46</p>
                </e-timeline-item-m>
            </e-timeline-m>

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">垂直居中</text>

            <div class="example-card">

                <e-timeline-m>
                <e-timeline-item-m center timestamp="2018/4/12" placement="top">
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/12 20:46</p>
                </e-timeline-item-m>
                <e-timeline-item-m timestamp="2018/4/3" placement="top">
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/3 20:46</p>
                </e-timeline-item-m>
                <e-timeline-item-m center timestamp="2018/4/2" placement="top">Event start</e-timeline-item-m>
                <e-timeline-item-m timestamp="2018/4/2" placement="top">Event end</e-timeline-item-m>
            </e-timeline-m>

            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@epoint-mfe/eui-icons';

const activities = [
    {
        content: 'Custom icon',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: MoreFilled
    },
    {
        content: 'Custom color',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87'
    },
    {
        content: 'Custom size',
        timestamp: '2018-04-03 20:46',
        size: 'large'
    },
    {
        content: 'Custom hollow',
        timestamp: '2018-04-03 20:46',
        type: 'primary',
        hollow: true
    },
    {
        content: 'Default node',
        timestamp: '2018-04-03 20:46'
    }
];
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
