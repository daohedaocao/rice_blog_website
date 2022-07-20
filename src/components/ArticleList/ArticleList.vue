<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 21:28-->
<!--#@Author : rice_straw-->
<!--#@File : ArticleList.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  文章组件-->
  <router-link to="/layout/articles" style="color: black">
    <div class="articles_list">
      <img src="https://i.loli.net/2021/10/02/lCrnmxtTEFZDIcM.jpg" alt="" />
      <div class="articles_list_content">
        <div class="graphics"></div>
        <!--      日期 标签3个 标题 内容-->
        <div class="art_contents">
          <h3>
            标题：你是怎样成神的你是怎样成神的你是怎样成你是怎样成神的你是怎样成神的你是怎样成神的你是怎样成神的你是怎样成神的你是怎样成神的你是怎样成神的你是怎样成神的神的你是怎样成神的
          </h3>
          <div class="art_text">
            作为编程语言界崛起之秀Golang，凭借语法简单、媲美C或C++代码的速度、无硬件局限性、易于维护、效率高等优势火速出圈。Golang的框架功能强大，结构扎实，可承载的类型多，适用性强，本期技术专题我们来聊聊Go语言框架吧
          </div>
          <p>
            <span>2022/7/15 16:12</span>
            <!--        标签-->
            <span>vue</span>
            <span>javascrpit</span>
            <span>java</span>
            <!--          <el-tag class="ml-2" type="success">Tag 2</el-tag>-->
            <!--          <el-tag class="ml-2" type="info">Tag 3</el-tag>-->
            <!--          <el-tag class="ml-2" type="warning">Tag 4</el-tag>-->
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
@import url('ArticleList.less');
</style>
