<template>
  <!--  pc端-->
  <el-menu
    :default-active="activeIndex"
    :router="true"
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

    <el-menu-item index="1" class="nav_list">首页</el-menu-item>
    <el-menu-item index="2" class="nav_list">博客</el-menu-item>
    <el-menu-item index="3" class="nav_list">归档</el-menu-item>
    <el-menu-item index="4" class="nav_list">资源库</el-menu-item>
    <el-menu-item index="5" class="nav_list">画廊</el-menu-item>
    <el-menu-item index="6" class="nav_list">留言板</el-menu-item>
    <el-menu-item index="7" class="nav_list">关于站长</el-menu-item>

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
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>
<style lang="less" scoped>
//头像
.block {
  width: 100%;
  text-align: right;
  line-height: 3px;
  padding-top: 0.6rem;
}

//重载el样式
:deep(.el-menu-item) {
  //margin-left: 1rem;
}

//nav
.el-menu-demo {
  padding: 0 2rem 0 0;
  background: @nav_background;
  width: 100%;
  min-width: 700px;
  box-shadow: #afb0b0 10px 10px 50px;
  height: 59px;

  .nav_list {
    color: @nav_font;
    &:hover {
      background: #3e4451;
    }
  }

  .logo {
    background: @nav_background;

    &:hover {
      background: @nav_background !important;
    }
  }
}
</style>
