<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Resource.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg></SecondaryBg>
  <h2>Resource组件</h2>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { useStore } from 'vuex'
const store = useStore()
const a = store.getters['articles/getValue']
console.log(a)
</script>

<!--<style lang="less" scoped>-->
<!--@import url('./Home.less');-->
<!--</style>-->
