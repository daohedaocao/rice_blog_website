<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 21:28-->
<!--#@Author : rice_straw-->
<!--#@File : ArticleList.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  文章组件-->
  <router-link
    :to="`/layout/articles/${article_datas.article_data_single.aid}`"
    style="color: black; text-decoration: none"
  >
    <div class="articles_list">
      <img v-lazy="article_datas.article_data_single.coverimg" :style="left_layout" alt="" />
      <div class="articles_list_content" :style="right_layout">
        <div class="graphics"></div>
        <!--      日期 标签3个 标题 内容-->
        <div class="art_contents">
          <h3 v-if="article_datas.article_data_single.title === ''">Rice-blog 随笔</h3>
          <h3 v-else>{{ article_datas.article_data_single.title }}</h3>
          <div class="art_text" style="word-wrap: break-word" v-html="contens_data"></div>
          <p>
            <span>{{ article_datas.article_data_single.date }}</span>
            <!--        标签-->
            <span>{{ article_datas.article_data_single.label_one }}</span>
            <span>{{ article_datas.article_data_single.label_two }}</span>
            <span>{{ article_datas.article_data_single.label_three }}</span>
            <!--          <el-tag class="ml-2" type="success">Tag 2</el-tag>-->
            <!--          <el-tag class="ml-2" type="info">Tag 3</el-tag>-->
            <!--          <el-tag class="ml-2" type="warning">Tag 4</el-tag>-->
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
// 文章数据
import { getArticleList } from '@/api/article_upload'
import { decryptDES } from '@/encryption/des_encryption'
// 单个文章数据
const article_datas: any = defineProps({
  // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
  article_data_single: <object>{
    type: Object as () => Array<any>, //(string也可以是其他你自定义的接口)
    required: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: () => []
  }
})
const right_layout: any = ref<any>({ right: 0 })
const left_layout: any = ref<any>({ left: 0 })
const state_layout: any = reactive<any>([{ right: 0 }, { left: 0 }])
let state_layout_num: any = Math.floor(Math.random() * state_layout.length)
if (state_layout_num === 1) {
  right_layout.value = state_layout[1]
  left_layout.value = state_layout[0]
} else if (state_layout_num.value === 0) {
  left_layout.value = state_layout[1]
  right_layout.value = state_layout[0]
}
let contens_data: any = ref<any>(
  String(article_datas.article_data_single.content).replaceAll('img ', "img style='display:none'")
)
contens_data.value = String(contens_data.value).replaceAll('pre ', "pre style='display:none'")
contens_data.value = String(contens_data.value).replaceAll('h1', 'h4')
contens_data.value = String(contens_data.value).replaceAll('h2', 'h4')
contens_data.value = String(contens_data.value).replaceAll('h3', 'h4')
contens_data.value = String(contens_data.value).replaceAll('hr', '')
</script>

<style lang="less" scoped>
@import url('ArticleList.less');
</style>
