<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/15 14:57-->
<!--#@Author : rice_straw-->
<!--#@File : Lables.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  标签-->
  <div class="flex flex-wrap gap-2 my-2">
    <!--          round是否为圆形-->
    <el-tag
      v-for="item in arr"
      :key="item.id"
      :type="item.type"
      class="mx-1 home_labels"
      effect="light"
    >
      {{ item.name }}
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
  { id: 1, name: '博客', type: 'danger' as const },
  { id: 2, name: 'VUe', type: 'success' as const },
  { id: 3, name: '留言', type: 'info' as const },
  { id: 4, name: '生活', type: 'warning' as const },
  { id: 5, name: '世界', type: 'danger' as const },
  { id: 6, name: '美好的生活', type: 'danger' as const },
  { id: 7, name: '你好世界', type: 'success' as const },
  { id: 8, name: '博客', type: 'info' as const },
  { id: 9, name: 'hello', type: 'warning' as const },
  { id: 10, name: 'c++', type: 'danger' as const },
  { id: 1, name: '博客', type: 'danger' as const },
  { id: 2, name: 'VUe', type: 'success' as const },
  { id: 3, name: '留言', type: 'info' as const },
  { id: 4, name: '生活', type: 'warning' as const },
  { id: 5, name: '世界', type: 'danger' as const },
  { id: 6, name: '美好的生活', type: 'danger' as const },
  { id: 7, name: '你好世界', type: 'success' as const },
  { id: 8, name: '博客', type: 'info' as const },
  { id: 9, name: 'hello', type: 'warning' as const },
  { id: 10, name: 'c++', type: 'danger' as const },
  { id: 1, name: '博客', type: 'danger' as const },
  { id: 2, name: 'VUe', type: 'success' as const },
  { id: 3, name: '留言', type: 'info' as const },
  { id: 4, name: '生活', type: 'warning' as const },
  { id: 5, name: '世界', type: 'danger' as const },
  { id: 6, name: '美好的生活', type: 'danger' as const },
  { id: 7, name: '你好世界', type: 'success' as const },
  { id: 8, name: '博客', type: 'info' as const },
  { id: 9, name: 'hello', type: 'warning' as const },
  { id: 10, name: 'c++', type: 'danger' as const },
  { id: 1, name: '博客', type: 'danger' as const },
  { id: 2, name: 'VUe', type: 'success' as const },
  { id: 3, name: '留言', type: 'info' as const },
  { id: 4, name: '生活', type: 'warning' as const },
  { id: 5, name: '世界', type: 'danger' as const },
  { id: 6, name: '美好的生活', type: 'danger' as const },
  { id: 7, name: '你好世界', type: 'success' as const },
  { id: 8, name: '博客', type: 'info' as const },
  { id: 9, name: 'hello', type: 'warning' as const },
  { id: 10, name: 'c++', type: 'danger' as const }
]
</script>

<style lang="less" scoped>
@import url('./Lables.less');
</style>
