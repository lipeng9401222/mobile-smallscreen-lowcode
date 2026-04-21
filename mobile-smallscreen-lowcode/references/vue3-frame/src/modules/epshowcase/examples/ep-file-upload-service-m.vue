<template>
    <ep-file-upload-service-m v-model:file-list="fileList" action="/uploadaction/getFileUploadModel" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fileList = ref([]);
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>