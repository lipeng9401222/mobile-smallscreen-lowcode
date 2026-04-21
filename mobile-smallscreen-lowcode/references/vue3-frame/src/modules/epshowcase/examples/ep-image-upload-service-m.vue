<template>
  <ep-image-upload-service-m v-model:image-list="imageList" action="/uploadaction/getImageUploadModel" />
</template>
<script setup>
import { ref } from 'vue';

const imageList = ref([]);
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>