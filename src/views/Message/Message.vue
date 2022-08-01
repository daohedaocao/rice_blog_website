<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Message.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg></SecondaryBg>
  <div class="message_container">
    <div class="message_top">
      <el-input v-model="textarea" :rows="6" type="textarea" placeholder="亲,请输入你的留言！" />
      <div style="display: flex">
        <el-input v-model="name_input" placeholder="昵称" clearable />
        <el-input v-model="email_input" placeholder="邮箱" clearable />
      </div>
      <p>
        <el-button type="">发布留言</el-button>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
// 留言内容
const textarea = ref('')
// 昵称
const name_input = ref('')
// 邮箱
const email_input = ref('')
</script>

<style lang="less" scoped>
@import url('./Message.less');
</style>
