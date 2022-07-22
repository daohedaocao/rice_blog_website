<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:39-->
<!--#@Author : rice_straw-->
<!--#@File : About.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg></SecondaryBg>
  <h2>About组件</h2>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { useStore } from 'vuex'
import { encryptDES, decryptDES } from '@/encryption/des_encryption'
const store = useStore()
store.commit('user/setRedirectUrl', 'https://www.baidu.com')
store.commit('user/setUser', {
  id: '12',
  avatar: '你好',
  nickname: '张三',
  token: 'shad jfhjsdhfjhsjkfsjfchsdjfvsvbjsdbijvhfgj'
})
console.log(encryptDES('987654321'))
console.log(decryptDES(encryptDES('987654321')))
</script>

<!--<style lang="less" scoped>-->
<!--@import url('./Home.less');-->
<!--</style>-->
