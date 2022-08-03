<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/8/3 21:42-->
<!--#@Author : rice_straw-->
<!--#@File : Collects.vue-->
<!--#@Software:WebStorm-->

<template>
  <div v-for="item in 8" :key="item" class="collects_container">
    <div class="collects_container_son">
      <img src="https://i.loli.net/2021/10/02/HG6zU2ix7YRDp1L.jpg" alt="" />
      <div class="collects_container_son_son">
        <h2>标题标题标题标题标题标题标题标题标题标题标题标题</h2>
        <p>
          <span style="color: #e25de7">标签标签1</span>
          <span style="color: #26d2f3">标签标签1</span>
          <span style="color: #f67b00">标签标签1</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
@import url('./Collects.less');
</style>
