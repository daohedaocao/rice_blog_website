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
    <rocket-one
      class="back_top_icon"
      theme="two-tone"
      size="50"
      :fill="['#0a0000', '#f39466']"
      :stroke-width="2.5"
      @click="goBack"
    />
  </div>
  <!--  底部-->
  <Footer></Footer>
  <div class="bg_container"></div>
</template>

<script lang="ts" setup>
import { RocketOne } from '@icon-park/vue-next'
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
}
</script>

<style lang="less" scoped>
@import url('./Layout.less');
</style>
