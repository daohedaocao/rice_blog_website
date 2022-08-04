<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/15 18:14-->
<!--#@Author : rice_straw-->
<!--#@File : SecondaryBg.vue-->
<!--#@Software:WebStorm-->

<template>
  <div class="secondary_bg">
    <img :src="secondary_datas.secondary_data.cover_img" alt="" />
    <div class="secondary_bg_second_floor">
      <div class="second_floor">
        <h2 class="texts">{{ text }}</h2>
        <span> {{ secondary_datas.secondary_data.title_two }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 获取传递的数据
let secondary_datas: any = defineProps({
  // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
  secondary_data: <object>{
    type: Object as () => Array<any>, //(string也可以是其他你自定义的接口)
    required: true,
    default: () => []
  }
})
// const secondary_data: any = ref<any>({
//   cover_img: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
//   title_one: '哈哈哈',
//   title_two: '哈哈哈哈哈'
// })
let text = ref()
const texts = ref(secondary_datas.secondary_data.title_one)
let text_index = 1
let speed = 300 / 0.5
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
  writeTexts(true)
})
</script>

<style lang="less" scoped>
@import url('./SecondaryBg.less');
</style>
