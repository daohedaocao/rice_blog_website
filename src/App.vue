<template>
  <div class="app_center">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

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
