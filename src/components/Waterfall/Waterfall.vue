<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/16 22:35-->
<!--#@Author : rice_straw-->
<!--#@File : Waterfall.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  瀑布流-->
  <Waterfall
    :list="list"
    :breakpoints="{ 1200: { rowPerView: 4 }, 800: { rowPerView: 3 }, 500: { rowPerView: 2 } }"
    :load-props="{ loading, error }"
  >
    <template #item="{ item }">
      <el-card :body-style="{ padding: '0px' }">
        <LazyImg :url="item" />
        <div style="padding: 1rem; background: yellow">
          <span>{{ item.fromPageTitleEnc }}背景图片</span>
        </div>
      </el-card>
    </template>
  </Waterfall>
</template>

<script lang="ts" setup>
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/style.css'
import loading from '@/assets/images/bg04.jpg'
import error from '@/assets/images/logo1.png'

defineProps({
  list: {
    type: Array as () => Array<string>, //(string也可以是其他你自定义的接口)
    required: true,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
@import url('./Waterfall.less');
</style>
