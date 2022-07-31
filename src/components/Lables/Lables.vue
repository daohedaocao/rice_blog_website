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
      v-for="item in lable_arr"
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
import { getLables } from '@/api/article_upload'

// 标签列表
let lable_arr = ref<any>([])
onMounted(async () => {
  const { lables }: any = await getLables()
  lable_arr.value = lables
})
</script>

<style lang="less" scoped>
@import url('./Lables.less');
</style>
