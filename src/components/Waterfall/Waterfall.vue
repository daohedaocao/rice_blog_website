<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/16 22:35-->
<!--#@Author : rice_straw-->
<!--#@File : Waterfall.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  瀑布流-->
  <!--  <h3>{{ browser_width }}</h3>-->
  <!--  <h3>{{ browser_widths }}</h3>-->
  <div v-show="is_big_container" class="big_img">
    <div class="big_img_close">
      <close
        class="big_img_close_icon"
        title="点击关闭"
        theme="outline"
        size="28"
        fill="#fffbf7"
        @click="bigImgClose"
      />
    </div>
    <div class="big_img_left">
      <left class="big_img_left_icon" theme="outline" size="32" fill="#fffbf7" />
    </div>
    <div class="big_img_right">
      <right class="big_img_right_icon" theme="outline" size="32" fill="#fffbf7" />
    </div>
    <div
      v-if="browser_width > 900 || browser_widths > 900"
      class="big_img_container"
      :style="{ width: image_width + '%', height: image_height + '%', transform: image_rotate }"
    >
      <!--放大的照片容器-->
      <img class="big_imgs" :src="big_imgs" alt="" />
    </div>
    <!--    安卓-->
    <div
      v-else
      class="big_img_container"
      :style="{ width: image_width2 + '%', height: image_height2 + '%', transform: image_rotate }"
    >
      <!--放大的照片容器-->
      <img class="big_imgs" :src="big_imgs" alt="" />
    </div>

    <div class="big_img_nav">
      <span>
        <!--        缩小-->
        <zoom-out theme="outline" size="28" fill="#fffbf7" @click="imageZoomOut" />
      </span>
      <span>
        <!--        放大-->
        <zoom-in theme="outline" size="28" fill="#fffbf7" @click="imageBig" />
      </span>
      <!--      旋转-->
      <span>
        <undo theme="outline" size="28" fill="#fffbf7" @click="imageRotateLeft" />
      </span>
      <span>
        <redo theme="outline" size="28" fill="#fffbf7" @click="imageRotateRight" />
      </span>
    </div>
  </div>
  <div v-if="list.length === 0">空空如也</div>
  <Waterfall
    :list="list"
    :breakpoints="{
      2000: { rowPerView: 4 },
      1800: { rowPerView: 4 },
      1500: { rowPerView: 4 },
      1200: { rowPerView: 3 },
      1800: { rowPerView: 4 },
      800: { rowPerView: 2 },
      500: { rowPerView: 1 }
    }"
    :load-props="{ loading, error }"
    :gutter="5"
    :has-around-gutter="false"
  >
    <template #item="{ item }">
      <div style="height: 0.6rem" />
      <el-card :body-style="{ padding: '2px' }" class="waterfall_card">
        <LazyImg :url="item.url" style="min-height: 8rem" @click="bigImgShow" />
        <div class="waterfall_card_bottom">
          <!--          <span>{{ item.name }}&#45;&#45;背景图片</span>-->
          <!--          作者头像 作者昵称 上传时间 图片分类标签-->
          <div class="waterfall_container">
            <div class="waterfall_container_left">
              <img :src="item.headimg" alt="" />
              <span class="water_name">{{ item.username }}</span>
            </div>
            <div class="waterfall_container_right">
              <span class="water_category">{{ item.category }}</span>
              <span class="water_date">{{ item.date }}</span>
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
import loading from '@/assets/images/loading.gif'
import error from '@/assets/images/error.png'
// 引入icon
import { ZoomOut, ZoomIn, Undo, Redo, Close, Left, Right } from '@icon-park/vue-next'

defineProps({
  list: {
    type: Array as () => Array<any>, //(string也可以是其他你自定义的接口)
    required: true,
    default: () => []
  }
})
const url = ref('https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg')
const srcList = ref([
  'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg',
  'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg',
  'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg',
  'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg'
])
const big_imgs = ref('https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg')
// 图片放大是否显示
const is_big_container = ref(false)
const bigImgShow = (values: any) => {
  // 显示图片放大容器
  is_big_container.value = true
  console.log(values.srcElement.src)
  big_imgs.value = values.srcElement.src
}

// 监视浏览器宽度
const browser_width = ref(document.body.clientWidth)
const browser_widths = ref(window.screen.width)
// 监视浏览器的宽度变化
onMounted(() => {
  window.onresize = () => {
    browser_width.value = document.body.clientWidth
    browser_widths.value = window.screen.width
    return { browser_width, browser_widths }
  }
})
onUnmounted(() => {
  // 销毁，防止继续占用内存
  window.onresize = null
})
// 图片放大 zoomOut
let image_width = ref(60)
let image_height = ref(65)

let image_width2 = ref(80)
let image_height2 = ref(30)
const imageBig = () => {
  if (image_width.value && image_height.value < 300) {
    image_width.value += 10
    image_height.value += 10
    image_width2.value += 10
    image_height2.value += 2
  }
}
const imageZoomOut = () => {
  if (image_width.value && image_height.value > 15) {
    image_width.value -= 10
    image_height.value -= 10
    image_width2.value -= 8
    image_height2.value -= 3
  }
}
// rotate
let image_rotate_num = ref(0)
let image_rotate = ref('rotate(' + image_rotate_num + 'deg)')
const imageRotateLeft = () => {
  image_rotate_num.value -= 90
  image_rotate.value = 'rotate(' + image_rotate_num.value + 'deg)'
}
const imageRotateRight = () => {
  image_rotate_num.value += 90
  image_rotate.value = 'rotate(' + image_rotate_num.value + 'deg)'
}

// 关闭图片放大容器的回调 重置数据
const bigImgClose = () => {
  is_big_container.value = false
  image_rotate_num.value = 0
  image_rotate.value = 'rotate(' + image_rotate_num.value + 'deg)'
  image_height.value = 60
  image_width.value = 65
  image_height2.value = 80
  image_width2.value = 25
}
</script>

<style lang="less" scoped>
@import url('./Waterfall.less');
</style>
