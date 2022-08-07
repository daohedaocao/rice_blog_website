<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:39-->
<!--#@Author : rice_straw-->
<!--#@File : About.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <h2>About组件</h2>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
// 传递的数据
const secondary_data: any = ref<any>({
  cover_img: 'https://s2.loli.net/2022/08/05/VPZGFM9hqaAwUQR.jpg',
  title_one: '如果回帖是一种美德，那我早就成为圣人了。',
  title_two: '- - 关于站长 - - '
})
</script>

<!--<style lang="less" scoped>-->
<!--@import url('./Home.less');-->
<!--</style>-->
