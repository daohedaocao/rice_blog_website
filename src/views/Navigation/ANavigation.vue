<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/13 16:23-->
<!--#@Author : rice_straw-->
<!--#@File : ANavigation.vue-->
<!--#@Software:WebStorm-->
<template>
  <div class="a_home_nav_top">
    <button class="btn" @click="btn_close">
      <close theme="outline" size="24" fill="#080808" />
    </button>
    <img src="https://s2.loli.net/2022/08/05/rGDTH2hBta1URC5.jpg" alt="" />
  </div>
  <!--  安卓端-->
  <el-menu
    :default-active="activeIndex"
    :router="true"
    :ellipsis="false"
    class="el-menu-demo1"
    mode="vertical"
    background-color="0"
    text-color=""
    active-text-color="#ff6b6b"
    @select="handleSelect"
  >
    <el-menu-item index="/layout/home" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>首页</li>
        <li>Home</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/blog" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <book-one theme="outline" size="24" fill="#000000" />
        </li>
        <li>博客</li>
        <li>Blog</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/archive" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <doc-detail theme="outline" size="24" fill="#000000" />
        </li>
        <li>归档</li>
        <li>Archive</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/resource" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <earth theme="outline" size="24" fill="#000000" />
        </li>
        <li>资源库</li>
        <li>Resource</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/gallery" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <material-three theme="outline" size="24" fill="#000000" />
        </li>
        <li>画廊</li>
        <li>Gallery</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/message" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <writing-fluently theme="outline" size="24" fill="#000000" />
        </li>
        <li>留言板</li>
        <li>Message</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/about" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <helpcenter theme="outline" size="24" fill="#000000" />
        </li>
        <li>关于站长</li>
        <li>About</li>
      </ul>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
// 引入icon
import {
  HomeTwo,
  Close,
  BookOne,
  DocDetail,
  Earth,
  MaterialThree,
  WritingFluently,
  Helpcenter
} from '@icon-park/vue-next'
import { ref, defineEmits } from 'vue'
// 导航
const activeIndex = ref('/layout/home')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// 监听hash的函数
const pathArrHome = ['#/layout/home']
const pathArrBlog = ['#/layout/blog']
const pathArrArchive = ['#/layout/archive']
const pathArrResource = ['#/layout/resource']
const pathArrGallery = ['#/layout/gallery']
const pathArrMessage = ['#/layout/message']
const pathArrAbout = ['#/layout/about']
if (pathArrHome.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/home'
} else if (pathArrBlog.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/blog'
} else if (pathArrArchive.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/archive'
} else if (pathArrResource.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/resource'
} else if (pathArrGallery.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/gallery'
} else if (pathArrMessage.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/message'
} else if (pathArrAbout.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/about'
} else {
  activeIndex.value = ''
}
// 关闭侧边的方法
const emit = defineEmits(['listen'])
const btn_close = () => {
  // 子传父
  emit('listen', false)
}
</script>
<style lang="less" scoped>
.a_home_nav_top {
  @height: 11rem;
  height: @height;
  //background: red;
  width: 100%;
  margin-bottom: 2rem;
  //关闭按钮
  .btn {
    position: absolute;
    z-index: 2;
    cursor: pointer;
    top: 1.5rem;
    right: 2rem;
    border-radius: 50%;
    justify-content: center;
    border: 0;
    background: rgba(208, 194, 194, 0.6);
  }

  img {
    position: relative;
    height: @height;
    width: 100%;
  }
}

//重载el样式
//nav
.el-menu-item {
  background-color: rgba(255, 255, 255, 0) !important;
}
.el-menu-demo1 {
  background-color: rgba(255, 255, 255, 0) !important;
  width: 100%;
  &:hover {
    background: @nav_background !important;
  }

  //导航栏
  .nav_font_ul {
    //height: 7rem;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    li {
      height: 1.4rem;
    }
  }

  .nav_list {
    color: @nav_font_color;
    height: 3.5rem;
    line-height: 1.4rem;
    //font-weight: bold;
    font-size: @nav_font_size;

    &:hover {
      //background: 0;
      //border-radius: 75%;
      //box-shadow: #1f909d 10px 10px 10px var(--hoverColor, rgb(250, 14, 73));
      text-shadow: @nav_text-shadow;
      color: #ff6b6b;
      //backdrop-filter: blur(40px);
    }
  }
}
</style>
