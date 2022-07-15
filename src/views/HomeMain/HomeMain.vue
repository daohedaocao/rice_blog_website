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
        <!--        revolvingLight-->
        <div class="revolvingLight">
          <div class="wrapper">
            <div class="marqueeWords">
              Hello
              world!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热烈庆祝程序员节！&nbsp;&nbsp;May
              you have a happy day!&nbsp;&nbsp;God bless you!&nbsp;&nbsp;Thank you!&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
      <div class="home_mains_two_right home_mains_two_label">
        <p>所有标签</p>
        <div class="flex flex-wrap gap-2 my-2">
          <!--          round是否为圆形-->
          <el-tag
            v-for="item in arr"
            :key="item"
            :type="item"
            class="mx-1 home_labels"
            effect="Light"
          >
            {{ item }}
          </el-tag>
        </div>
      </div>
      <div class="home_mains_two_right home_mains_two_calendar">
        <p>日历</p>
        <el-calendar v-model="value" />
      </div>
      <div class="home_mains_two_right home_mains_two_comment">
        <p>最新评论</p>
        <!--        只取前4个评论-->
        <div v-for="item in 4" :key="item" class="home_mains_two_comment_one">
          <span>2022/7/15 13:22 {{ item }}</span>
          <span>你是最好的你是最好的你是最好的你是最好的你是最好的你是最好的</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Articles from '@/components/Articles/Articles.vue'

import { ref } from 'vue'
// 日历
const value = ref(new Date())
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
@import url('./HomeMain.less');
</style>
