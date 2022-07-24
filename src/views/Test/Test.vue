<template>
  <h2>Test组件</h2>
  <div @click="show">你好你好</div>
  <!--  <input v-model="pwd" type="text" />-->
  <!--  {{ pwd }}-->
  <!--  <span v-show="abc">密码错误</span>-->
</template>

<script lang="ts" setup>
// import test from '@/Utils/form_validation'
// const pwd = ref('')
// const abc = ref(test.password(pwd))
// console.log(test.password(123456))
// import request from '@/Utils/request'
// const form = reactive({
//   isAgree: true,
//   account: '张三三',
//   password: '9876564sasdasdc',
//   mobile: null,
//   code: null
// })
// const { account, password } = form
// console.log(account, password)
// // const a = userAccountLogin({ name: '张三', pwd: '13364' })
// // console.log(a.then())
// console.log(123)
// request('/rice/register', 'post', { account, password })
import { ElNotification } from 'element-plus'

const show = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success'
  })
}
</script>

<style lang="less" scoped>
:deep(.el-notification__group) {
  background: red;
}
</style>
