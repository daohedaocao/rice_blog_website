<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 21:38-->
<!--#@Author : rice_straw-->
<!--#@File : HomeMain.vue-->
<!--#@Software:WebStorm-->

<template>
  <h3>最新文章</h3>
  <div class="home_mains">
    <div class="home_mains_one">
      <Articles></Articles>
    </div>
    <div class="home_mains_two">
      <div class="home_mains_two_right" style="height: 7rem">公告</div>
      <div class="home_mains_two_right">所有标签</div>
      <div class="home_mains_two_right">日历</div>
      <div class="home_mains_two_right">最新评论</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Articles from '@/components/Articles/Articles.vue'
</script>

<style lang="less" scoped>
@import url('./HomeMain.less');
</style>
