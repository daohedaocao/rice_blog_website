<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Gallery.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  画廊-->
  <h2>Gallery组件</h2>
  <div class="gallery_container">
    <Waterfall :list="arr"></Waterfall>
  </div>
</template>

<script lang="ts" setup>
import Waterfall from '@/components/Waterfall/Waterfall.vue'
const arr = [
  'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
  'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg',
  'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg',
  'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg',
  'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg',
  'https://i.loli.net/2021/10/02/e58OKC3HnprQjzi.jpg',
  'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
  'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg',
  'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg',
  'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg',
  'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg',
  'https://i.loli.net/2021/10/02/e58OKC3HnprQjzi.jpg',
  'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
  'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg',
  'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg',
  'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg',
  'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg',
  'https://i.loli.net/2021/10/02/e58OKC3HnprQjzi.jpg'
]
</script>

<style lang="less" scoped>
@import url('./Gallery.less');
</style>
