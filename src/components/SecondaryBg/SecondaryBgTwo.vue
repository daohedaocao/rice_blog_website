<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/15 18:14-->
<!--#@Author : rice_straw-->
<!--#@File : SecondaryBg.vue-->
<!--#@Software:WebStorm-->

<template>
  <div class="secondary_bg">
    <img alt="" :src="secondary_data_datas.cover_img" />
    <div class="secondary_bg_second_floor">
      <div class="second_floor">
        <h2 class="texts">{{ text }}</h2>
        <span style="font-weight: bold; color: #ff6b6b">{{ secondary_data_datas.title_two }}</span>
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
const secondary_data_datas: any = ref<any>({
  cover_img: 'https://s2.loli.net/2022/08/07/zofqOiZyngGv8B3.png',
  title_one: '加载中...',
  title_two: '加载中...'
})

let text = ref()
const texts = ref(secondary_data_datas.value.title_one)
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
watch(
  secondary_datas,
  (newdatas: any) => {
    secondary_data_datas.value.cover_img = newdatas.secondary_data.cover_img
    secondary_data_datas.value.title_one = newdatas.secondary_data.title_one
    texts.value = newdatas.secondary_data.title_one
    secondary_data_datas.value.title_two = newdatas.secondary_data.title_two
  },
  { deep: true }
)
</script>

<style lang="less" scoped>
@import url('./SecondaryBg.less');
</style>
