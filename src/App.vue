<template>
  <div class="app_center">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.app_center {
  justify-content: center;
  width: 100%;
  background: #e7e7e7;
  position: absolute;
  z-index: -1;
}
</style>
