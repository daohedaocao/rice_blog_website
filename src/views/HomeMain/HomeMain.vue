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
      <div class="home_mains_two_right home_mains_two_announcement" style="height: 7rem">
        <p>公告</p>
        <div></div>
      </div>
      <div class="home_mains_two_right home_mains_two_label">
        <p>所有标签</p>
      </div>
      <div class="home_mains_two_right home_mains_two_calendar">
        <p>日历</p>
        <el-calendar v-model="value" />
      </div>
      <div class="home_mains_two_right home_mains_two_comment">
        <p>最新评论</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Articles from '@/components/Articles/Articles.vue'

import { ref } from 'vue'
const value = ref(new Date())
</script>

<style lang="less" scoped>
@import url('./HomeMain.less');
</style>
