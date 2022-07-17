<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Gallery.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  画廊-->

  <div class="gallery_container">
    <div class="gallery_container_nav">
      <span>你的画廊</span>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="默认分类" name="first">
          <Waterfall :list="lists"></Waterfall>
        </el-tab-pane>
        <el-tab-pane label="动漫二次元" name="second">
          <Waterfall :list="lists"></Waterfall>
        </el-tab-pane>
        <el-tab-pane label="风景" name="third">
          <Waterfall :list="lists"></Waterfall>
        </el-tab-pane>
        <el-tab-pane label="人物" name="fourth">
          <Waterfall :list="lists"></Waterfall>
        </el-tab-pane>
        <el-tab-pane label="美女" name="fourth">
          <Waterfall :list="lists"></Waterfall>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Waterfall from '@/components/Waterfall/Waterfall.vue'
import type { TabsPaneContext } from 'element-plus'

// 标签页
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const lists = reactive([
  {
    id: 1,
    name: '美女',
    url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg'
  },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' },
  {
    id: 1,
    name: '美女',
    url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg'
  },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/e58OKC3HnprQjzi.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' }
])
</script>

<style lang="less" scoped>
@import url('./Gallery.less');
</style>
