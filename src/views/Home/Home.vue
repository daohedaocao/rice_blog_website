<template>
  <!--  pc端-->
  <el-menu
    :default-active="activeIndex"
    :router="true"
    :ellipsis="false"
    class="el-menu-demo"
    mode="horizontal"
    background-color=""
    text-color=""
    active-text-color="#df3535"
    @select="handleSelect"
  >
    <!--      logo-->
    <el-menu-item class="logo">
      <el-image
        style="width: 100px; height: 60px; margin-right: 5rem; margin-left: 7rem"
        :src="url"
      />
    </el-menu-item>

    <el-menu-item index="1" class="nav_list">
      <ul class="nav_font_ul">
        <li>首页</li>
        <li>Home</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="2" class="nav_list">
      <ul class="nav_font_ul">
        <li>博客</li>
        <li>Home</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="3" class="nav_list">
      <ul class="nav_font_ul">
        <li>归档</li>
        <li>Home</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="4" class="nav_list">
      <ul class="nav_font_ul">
        <li>资源库</li>
        <li>Home</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="5" class="nav_list">
      <ul class="nav_font_ul">
        <li>画廊</li>
        <li>Home</li>
      </ul></el-menu-item
    >
    <el-menu-item index="6" class="nav_list">
      <ul class="nav_font_ul">
        <li>留言板</li>
        <li>Home</li>
      </ul></el-menu-item
    >
    <el-menu-item index="7" class="nav_list">
      <ul class="nav_font_ul">
        <li>关于站长</li>
        <li>Home</li>
      </ul></el-menu-item
    >

    <!--    头像-->
    <div class="block">
      <el-avatar :size="40" :src="circleUrl" />
    </div>
  </el-menu>
</template>
<script lang="ts" setup>
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

// logo
const url = 'http://49.233.53.82/myweb/logo1.png'
</script>
<style lang="less" scoped>
@import url('./Home.less');
</style>
