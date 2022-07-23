<template>
  <h2>Test组件</h2>
  <div>你好你好</div>
</template>

<script lang="ts" setup>
import { userAccountLogin } from '@/api/user'
import request from '@/Utils/request'
const form = reactive({
  isAgree: true,
  account: '张三三',
  password: '9876564sasdasdc',
  mobile: null,
  code: null
})
const { account, password } = form
console.log(account, password)
// const a = userAccountLogin({ name: '张三', pwd: '13364' })
// console.log(a.then())
console.log(123)
request('/rice/register', 'post', { account, password })
</script>

<!--<style lang="less" scoped>-->
<!--@import url('./Navigation.less');-->
<!--</style>-->
