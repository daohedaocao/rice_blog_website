<template>
  <h2>Home组件</h2>
  <div>
    <el-button disabled>Default</el-button>
    <el-button type="primary" disabled>Primary</el-button>
    <el-button type="success" disabled>Success</el-button>
    <el-button type="info" disabled>Info</el-button>
  </div>
  <router-view></router-view>
  <router-link to="/home/test">下一页</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home'
})
</script>

<style lang="less" scoped>
@import url('./Home.less');
</style>
