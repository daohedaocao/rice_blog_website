<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Resource.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg></SecondaryBg>
  <div class="resource_container">
    <div class="box_container">
      <h2>学习资源</h2>
      <div class="box_container_one">
        <div v-for="item in 14" :key="item" class="box_container_two">
          <img
            src="http://127.0.0.1:5000/gallery/20220801-f30a0e61-63d5-4c31-b93d-b2c3c06bb2b9.jpg"
            alt=""
          />
          <span>哔哩哔哩</span>
          <span>一个学习的网站一个学习的网站一个学习的网站一个学习的网站</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
</script>

<style lang="less" scoped>
@import url('./Resource.less');
</style>
