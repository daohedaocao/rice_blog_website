<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/11 20:24 -->
<!--#@Author : rice_straw -->
<!--#@File : Layout.vue -->
<!--#@Software:WebStorm-->
<template>
  <!--  导航nav-->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="less" scoped>
@import url('./Layout.less');
</style>
