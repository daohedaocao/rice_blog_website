<template>
  <div class="app_center">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<!--setup 自动装配引入的内容-->
<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

console.log('%c没有完美的人,只有完美的眼光。', 'color:#cc5d0e;font-size:4em')
</script>

<!--scoped 编译避免样式污染-->
<style lang="less" scoped>
.app_center {
  justify-content: center;
  width: 100%;
  background: #e7e7e7;
  position: absolute;
  z-index: -1;
  background-size: cover;
  overflow: hidden;
}
</style>
