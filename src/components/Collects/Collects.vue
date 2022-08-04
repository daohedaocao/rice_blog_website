<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/8/3 21:42-->
<!--#@Author : rice_straw-->
<!--#@File : Collects.vue-->
<!--#@Software:WebStorm-->

<template>
  <div v-for="item in collects_datas" :key="item" class="collects_container">
    <router-link :to="`/layout/articles/${item.collectaid}`">
      <div class="collects_container_son">
        <img :src="item.coverimg" alt="" />
        <div class="collects_container_son_son">
          <h2>{{ item.articletitle }}</h2>
          <p>
            <span style="color: #e25de7">{{ item.lable_one }}</span>
            <span style="color: #26d2f3">{{ item.lable_two }}</span>
            <span style="color: #f67b00">{{ item.lable_three }}</span>
          </p>
        </div>
      </div>
    </router-link>
  </div>
  <!--  {{ collects_datas }}-->
  {{ collects_datas.length }}
</template>

<script lang="ts" setup>
const collects_datas: any = defineProps({
  // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
  collects_data_single: <object>{
    type: Object as () => Array<any>, //(string也可以是其他你自定义的接口)
    required: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: () => []
  }
})
</script>

<style lang="less" scoped>
@import url('./Collects.less');
</style>
