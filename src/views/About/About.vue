<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:39-->
<!--#@Author : rice_straw-->
<!--#@File : About.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg></SecondaryBg>
  <h2>About组件</h2>
  <Test></Test>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
// import { useStore } from 'vuex'
// import { encryptDES, decryptDES } from '@/encryption/des_encryption'
import Test from '@/views/Test/Test.vue'
// const store = useStore()
// // store.commit('user/setRedirectUrl', 'https://www.baidu.com')
// store.commit('user/setUser', {
//   id: '12',
//   avatar: '你好',
//   nickname: '张三',
//   token: 'shad jfhjsdhfjhsjkfsjfchsdjfvsvbjsdbijvhfgj'
// })
// store.commit('articles/setUser', { id: 1, name: '张三', age: 22 })
// const a = store.getters['articles/getValue']
// const b = store.getters['user/getValue']
// console.log(a)
// console.log(b)
// console.log(123)
// const user: User = {
//   avatar: '',
//   id: '',
//   role: '',
//   username: '',
//   nickname: '',
//   introduce: '',
//   banner: ''
// }
// user.id = '1'
</script>

<!--<style lang="less" scoped>-->
<!--@import url('./Home.less');-->
<!--</style>-->
