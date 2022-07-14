<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/11 20:24 -->
<!--#@Author : rice_straw -->
<!--#@File : Layout.vue -->
<!--#@Software:WebStorm-->
<template>
  <!--  导航nav-->
  <Home></Home>
  <!--  主题-->
  <div class="main_theme">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup></script>

<script>
import Home from './Navigation/PNavigation'
export default {
  components: { Home }
}
</script>
<style lang="less" scoped>
@import url('./Layout.less');
</style>
