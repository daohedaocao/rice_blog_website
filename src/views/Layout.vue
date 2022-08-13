<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/11 20:24 -->
<!--#@Author : rice_straw -->
<!--#@File : Layout.vue -->
<!--#@Software:WebStorm-->
<template>
  <!--  导航nav-->
  <PNavigation></PNavigation>
  <!--  <SecondaryBg></SecondaryBg>-->
  <!--  主题-->
  <div class="main_theme">
    <router-view></router-view>
  </div>
  <div v-show="is_back_top" class="back_top">
    <img
      class="back_top_icon"
      src="https://s2.loli.net/2022/08/09/TteZ3jpFJo7VX92.png"
      alt=""
      @click="goBack"
    />
  </div>
  <!--  底部-->
  <Footer></Footer>
  <div class="bg_container">
    <video
      class="video_background"
      preload="auto"
      loop
      playsinline
      autoplay
      x5-video-player-type="h5"
      webkit-playsinline="true"
      x5-video-orientation="portraint"
      controls
      :src="video_url"
      tabindex="-100"
      muted
    ></video>
  </div>
</template>

<script lang="ts" setup>
import PNavigation from '@/views/Navigation/PNavigation.vue'
import Footer from '@/components/Footer/Footer.vue'

let is_back_top = ref(false)
onMounted(() => {
  window.addEventListener('scroll', () => {
    let top = Math.floor(
      document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
    )
    is_back_top.value = top > 333
  })
})
// 回到顶部
const goBack = () => {
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
  // window.parent.document.documentElement.scrollTop = 0
}
// ===
const video_data: any = ref<any>([
  '/video/videobg1.mp4',
  '/video/videobg2.mp4',
  '/video/videobg3.mp4',
  '/video/videobg4.mp4'
])
let video_url: any = ref<any>('/video/videobg2.mp4')
let video_data_num: any = Math.floor(Math.random() * video_data.value.length)
video_url.value = video_data.value[video_data_num]
</script>

<style lang="less" scoped>
@import url('./Layout.less');
</style>
