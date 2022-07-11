<template>
  <router-view></router-view>
  <Test></Test>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Test from '@/views/Test/Test.vue'
export default defineComponent({
  name: 'App',
  components: { Test }
})
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
