<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Blog.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  <h2>Blog组件</h2>-->
  <SecondaryBg></SecondaryBg>
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
          <div v-if="!article_list_state">加载中.....</div>
          <ArticleList
            v-for="item in article_list.length - 1"
            v-else
            :key="item"
            :article_data_single="article_list[item]"
          ></ArticleList>
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
      :page-size="page_size"
      :pager-count="pager_count"
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
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { getArticleList } from '@/api/article_upload'
import { decryptDES } from '@/encryption/des_encryption'

// 文章列表数据
let article_list: any[] = []
let article_list_state = ref(false)
// onBeforeMount(() => {
// 获取文章列表数据
getArticleList().then((result: any) => {
  if (result.result == 200) {
    const { articlelist } = result
    for (let item in articlelist) {
      articlelist[item].content = decryptDES(articlelist[item].content)
      article_list.push(articlelist[item])
      console.log(item)
      console.log(article_list.length)
    }
    article_list = article_list.reverse()
    article_list_state.value = true
  } else {
    console.log('请求失败！')
  }
})
// })

console.log(article_list.length)
const page_size = ref(2)
const pager_count = ref(3)
const arrs: Array<number> = []
for (let i = 0; i <= 50; i++) {
  arrs.push(i)
}
// 默认
let citrus = ref(arrs.slice(0, 10))
const changePage = reactive({
  currentPage: 1, //默认当前页面为1
  total: Number(arrs.length) //总共有多少数据
})
const sizeChange = (value: any) => {
  console.log(value)
}
// 拿到当前页数
const currentChange = (values: any) => {
  if (values == 1) {
    citrus.value = arrs.slice(0, 10 * values)
  } else {
    citrus.value = arrs.slice(10 * values - 9, 10 * values + 1)
    // citrus.value = arrs.slice((y - 1) * 10 + 1, 10 * y)
  }
}
// 上一页
const prevClick = (values: any) => {
  console.log('==========')
  console.log(values)
}
// 下一页
const nextClick = (values: any) => {
  console.log('==========')
  console.log(values)
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
