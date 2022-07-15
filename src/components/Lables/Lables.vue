<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/15 14:57-->
<!--#@Author : rice_straw-->
<!--#@File : Lables.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  标签-->
  <div class="flex flex-wrap gap-2 my-2">
    <!--          round是否为圆形-->
    <el-tag v-for="item in arr" :key="item" :type="item" class="mx-1 home_labels" effect="Light">
      {{ item }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
// 标签颜色
// 'danger',
//   'success',
//   'info',
//   'warning',
const arr = [
  '博客',
  'danger',
  'success',
  'info',
  'warning',
  'danger',
  'success',
  'info',
  'warning',
  'danger'
]
</script>

<style lang="less" scoped>
@import url('./Lables.less');
</style>
