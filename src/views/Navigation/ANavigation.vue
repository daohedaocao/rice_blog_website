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
    <img src="../../assets/images/bg04.jpg" alt="" />
  </div>
  <!--  安卓端-->
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
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>博客</li>
        <li>Blog</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/archive" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>归档</li>
        <li>Archive</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/resource" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>资源库</li>
        <li>Resource</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/gallery" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>画廊</li>
        <li>Gallery</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/message" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>留言板</li>
        <li>Message</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/about" class="nav_list">
      <ul class="nav_font_ul">
        <li style="float: left; line-height: 2rem; height: 3.5rem; margin-right: 0.8rem">
          <home-two theme="outline" size="24" fill="#080808" />
        </li>
        <li>关于站长</li>
        <li>About</li>
      </ul>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
// 引入icon
import { HomeTwo, Close } from '@icon-park/vue-next'
import { reactive, ref, toRefs, defineEmits } from 'vue'
// 导航
const activeIndex = ref('/layout/home')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
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
    background: #38e89e;
  }

  img {
    position: relative;
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
