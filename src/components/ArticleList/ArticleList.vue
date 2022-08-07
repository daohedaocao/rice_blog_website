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
      <img v-lazy="article_datas.article_data_single.coverimg" alt="" />
      <div class="articles_list_content">
        <div class="graphics"></div>
        <!--      日期 标签3个 标题 内容-->
        <div class="art_contents">
          <h3>{{ article_datas.article_data_single.title }}</h3>
          <div class="art_text" v-html="article_datas.article_data_single.content"></div>
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
// console.log(article_datas.article_data_single)
// console.log(123)
</script>

<style lang="less" scoped>
@import url('ArticleList.less');
</style>
