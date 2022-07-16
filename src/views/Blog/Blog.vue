<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Blog.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  <h2>Blog组件</h2>-->
  <div class="blog_top">
    <div class="blog_arc_nav">
      <div class="blog_arc_nav_text" style="min-width: 10rem">博客文章列表</div>
      <div class="blog_arc_nav_text" style="min-width: 15rem">
        <input v-model="input_text" type="text" placeholder="搜索文章" autocomplete="off" />
        <search class="blog_button" theme="outline" size="34" fill="#00c2fd" />
      </div>
    </div>
    <div class="blog_nav">
      <el-tabs v-if="input_text === ''" type="border-card">
        <el-tab-pane label="最新推荐">
          <!--          <h1 v-for="item in citrus" :key="item">{{ item }}</h1>-->
          <ArticleList v-for="item in 10" :key="item"></ArticleList>
        </el-tab-pane>
        <el-tab-pane label="最新文章"> 最新文章 </el-tab-pane>
        <el-tab-pane label="热榜"> 热榜 </el-tab-pane>
      </el-tabs>
      <!--      搜索的文章容器-->
      <el-tabs v-else type="border-card">
        <el-tab-pane :label="input_texts">
          {{ input_text }}
        </el-tab-pane>
      </el-tabs>
    </div>

    <!--    page-size每页显示条目个数，支持 v-model 双向绑定-->
    <!--    total总条目数-->
    <!--    sizes / prev / pager / next / jumper / -> / total / slot-->
    <!--    <div class="example-demonstration">-->
    <!--      <ArticleList v-for="item in aaa" :key="item"></ArticleList>-->
    <!--    </div>-->
    <el-pagination
      v-model="changePage.currentPage"
      background
      page-size="2"
      pager-count="3"
      layout="prev, pager, next"
      :total="changePage.total"
      @size-change="sizeChange"
      @current-change="currentChange"
      @prev-click="prevClick"
      @next-click="nextClick"
    />
  </div>
</template>

<script lang="ts" setup>
// 引入icon
import { Search } from '@icon-park/vue-next'
import ArticleList from '@/components/ArticleList/ArticleList.vue'
import { valueEquals } from 'element-plus'
// const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// 模拟
const arrs = []
for (let i = 0; i <= 50; i++) {
  arrs.push(i)
}
// 默认
let citrus = ref(arrs.slice(0, 10))
const changePage = reactive({
  currentPage: 1, //默认当前页面为1
  total: Number(arrs.length) //总共有多少数据
})
const sizeChange = x => {
  console.log(x)
}
// 拿到当前页数
const currentChange = y => {
  if (y == 1) {
    citrus.value = arrs.slice(0, 10 * y)
  } else {
    citrus.value = arrs.slice(10 * y - 9, 10 * y + 1)
    // citrus.value = arrs.slice((y - 1) * 10 + 1, 10 * y)
  }
}
// 上一页
const prevClick = y => {
  console.log('==========')
  console.log(y)
}
// 下一页
const nextClick = y => {
  console.log('==========')
  console.log(y)
}

// 搜索框内容
const input_text = ref('')
const input_texts = ref('')
if (input_text.value !== '') {
  console.log(input_text.value)
}
// 监听input_text
watch(input_text, () => {
  input_texts.value = '搜索关键词：' + input_text.value
})
</script>

<style lang="less" scoped>
@import url('./Blog.less');
</style>
