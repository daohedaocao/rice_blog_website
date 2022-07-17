<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/16 22:35-->
<!--#@Author : rice_straw-->
<!--#@File : Waterfall.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  瀑布流-->
  <!--  <div class="big_img">-->
  <!--    &lt;!&ndash;    <img :src="big_imgs" alt="" />&ndash;&gt;-->
  <!--    <el-image-->
  <!--      style="width: 100px; height: 100px"-->
  <!--      :src="ul"-->
  <!--      :preview-src-list="srcList"-->
  <!--      :initial-index="4"-->
  <!--      fit="cover"-->
  <!--    />-->
  <!--  </div>-->
  <Waterfall
    :list="list"
    :breakpoints="{
      1200: { rowPerView: 4 },
      800: { rowPerView: 3 },
      500: { rowPerView: 2 }
    }"
    :load-props="{ loading, error }"
    :gutter="5"
    :has-around-gutter="false"
  >
    <template #item="{ item }">
      <div style="height: 0.6rem" />
      <el-card :body-style="{ padding: '2px' }" class="waterfall_card">
        <LazyImg :url="item.url" @click="show" />
        <div class="waterfall_card_bottom">
          <!--          <span>{{ item.name }}&#45;&#45;背景图片</span>-->
          <!--          作者头像 作者昵称 上传时间 图片分类标签-->
          <div class="waterfall_container">
            <div class="waterfall_container_left">
              <img src="https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg" alt="" />
              <span class="water_name">稻和稻草稻草稻草稻和稻草稻草稻草</span>
            </div>
            <div class="waterfall_container_right">
              <span class="water_category">动漫二次元</span>
              <span class="water_date">2022 7-17</span>
            </div>
          </div>
        </div>
      </el-card>
    </template>
  </Waterfall>
</template>

<script lang="ts" setup>
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/style.css'
import loading from '@/assets/images/bg04.jpg'
import error from '@/assets/images/logo1.png'

defineProps({
  list: {
    type: Array as () => Array<string>, //(string也可以是其他你自定义的接口)
    required: true,
    default: () => []
  }
})
const ul = ref('https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg')
const srcList = ref([
  'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg',
  'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg',
  'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg',
  'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg'
])
const big_imgs = ref('')
const show = x => {
  console.log(x.srcElement.src)
  big_imgs.value = x.srcElement.src
}
</script>

<style lang="less" scoped>
@import url('./Waterfall.less');
</style>
