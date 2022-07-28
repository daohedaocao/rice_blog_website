<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/15 18:14-->
<!--#@Author : rice_straw-->
<!--#@File : SecondaryBg.vue-->
<!--#@Software:WebStorm-->

<template>
  <div class="secondary_bg">
    <img :src="datas.secondary['img']" alt="" />
    <div class="secondary_bg_second_floor">
      <div class="second_floor">
        <h2 class="texts">{{ text }}</h2>
        <span>取法于上，仅得为中；取法于中，故为其下。</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
const secondary_stores = useStore()
// 获取传递的数据
const datas = secondary_stores.getters['secondary/getValue']

// const text_h2 = document.getElementById('texts')
const text = ref('取法于上，仅得为中；取法于中，故为其下!')
const texts = ref('取法于上，仅得为中；取法于中，故为其下!')
let text_index = 1
let speed = 300 / 1.5
const writeTexts = (isScroll: boolean) => {
  if (isScroll) {
    const writeText = () => {
      text.value = texts.value.slice(0, text_index)
      text_index++
      if (text_index > texts.value.length) {
        text_index = 1
      }
      setTimeout(writeText, speed)
    }
    writeText()
  } else {
    text.value = texts.value
  }
}
onMounted(() => {
  writeTexts(false)
})
</script>

<style lang="less" scoped>
@import url('./SecondaryBg.less');
</style>
