<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Resource.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <div class="resource_container">
    <!--    =============-->
    <div v-for="item in get_datas" :key="item" class="box_container">
      <h2>
        <img
          style="height: 2.5rem; width: 2.5rem; float: left; margin: -0.2rem 0.2rem 0 0"
          src="../../assets/images/logo2.png"
          alt=""
        />{{ item.category }}
      </h2>
      <div class="box_container_one">
        <div v-for="items in item.arc" :key="items" class="box_container_two">
          <a :href="items.url">
            <img :src="items.logourl" alt="" />
            <span>{{ items.resourcename }}</span>
            <span>{{ items.intrudoce }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { getResources, uploadResources } from '@/api/resource'

// 传递的数据
const secondary_data: any = ref<any>({
  cover_img: 'https://s2.loli.net/2022/08/05/HBx9eMDZ3lqwaET.jpg',
  title_one: '可以不光芒万丈，但不能停止自己发光。',
  title_two: '资源库'
})

const bg_arr: any = ref<any>([
  'https://s2.loli.net/2022/08/05/fH7cjGPrQlhYnyW.jpg',
  'https://s2.loli.net/2022/08/05/HBx9eMDZ3lqwaET.jpg'
])
let bg_arr_num: any = Math.floor(Math.random() * bg_arr.value.length)
secondary_data.value.cover_img = bg_arr.value[bg_arr_num]

let get_datas: any = ref<any>([])
// 获取
getResources().then((result: any) => {
  if (result.result == 200) {
    const { response } = result
    get_datas.value = response
  }
})
</script>

<style lang="less" scoped>
@import url('./Resource.less');
</style>
