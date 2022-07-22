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
  <!--  底部-->
  <Footer></Footer>
</template>

<script lang="ts" setup>
import PNavigation from '@/views/Navigation/PNavigation.vue'
import Footer from '@/components/Footer/Footer.vue'
// import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
</script>

<style lang="less" scoped>
@import url('./Layout.less');
</style>
