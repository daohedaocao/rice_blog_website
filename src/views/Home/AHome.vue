<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/13 16:23-->
<!--#@Author : rice_straw-->
<!--#@File : AHome.vue-->
<!--#@Software:WebStorm-->
<template>
  <div class="a_home_nav_top">
    <img src="../../assets/images/bg04.jpg" alt="" />
  </div>
  <!--  pc端-->
  <el-menu
    :default-active="activeIndex"
    :router="true"
    :ellipsis="false"
    class="el-menu-demo1"
    mode="vertical"
    background-color=""
    text-color=""
    active-text-color="#df3535"
    @select="handleSelect"
  >
    <el-menu-item index="1" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>首页</li>
        <li>Home</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="2" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>博客</li>
        <li>Home</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="3" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>归档</li>
        <li>Home</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="4" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>资源库</li>
        <li>Home</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="5" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>画廊</li>
        <li>Home</li>
      </ul></el-menu-item
    >
    <el-menu-item index="6" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>留言板</li>
        <li>Home</li>
      </ul></el-menu-item
    >
    <el-menu-item index="7" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>关于站长</li>
        <li>Home</li>
      </ul></el-menu-item
    >
  </el-menu>
</template>
<script lang="ts" setup>
// 引入icon
import { HomeTwo } from '@icon-park/vue-next'
import { reactive, ref, toRefs } from 'vue'
// 导航
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// 头像
const state = reactive({
  circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const
})
const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>
<style lang="less" scoped>
.a_home_nav_top {
  @height: 11rem;
  height: @height;
  background: red;
  width: 100%;
  margin-bottom: 2rem;
  img {
    height: @height;
    width: 100%;
  }
}

//重载el样式
//nav
.el-menu-demo1 {
  //background: @nav_background;
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
      //backdrop-filter: blur(40px);
    }
  }
}
</style>
