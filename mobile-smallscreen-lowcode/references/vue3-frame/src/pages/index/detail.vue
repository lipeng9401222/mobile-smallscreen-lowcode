<template>
    <div class="content">
        详情页
        <div>id:{{id}}</div>
        <div>name:{{name}}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const id = ref('');
const name = ref('');

onLoad((option) => {
    id.value = option.id;
    name.value = option.name;
});
</script>

<style  lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
