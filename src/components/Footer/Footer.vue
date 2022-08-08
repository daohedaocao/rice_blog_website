<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/15 17:36 -->
<!--#@Author : rice_straw -->
<!--#@File : Footer.vue-->
<!--#@Software:WebStorm-->

<template>
  <div class="footer">
    <div class="footer_container">
      <div class="footer_left">
        <h3 style="color: #ff7878; font-weight: bold; font-size: 1.2rem">Rice-Blog</h3>
        <p style="color: #f87100; font-size: 1.1rem">有志者,事竟成。</p>
      </div>
      <div class="footer_right">
        <p style="color: #ff8e12">
          博客已萌萌哒的运行：{{ days }}天{{ hours }}小时{{ minute }}分{{ secondss }}秒
        </p>
        <p style="color: rgb(114, 113, 113)">
          声明：本博客属个人所有,不涉及商业目的,博客内部分网络资源,<br />若有侵权,请点击关于站长页面联系我删除!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let days: any = ref<any>()
let hours: any = ref<any>()
let minute: any = ref<any>()
let secondss: any = ref<any>()

const NewDate = (str: any) => {
  str = str.split('-')
  let date = new Date()
  date.setUTCFullYear(str[0], str[1] - 1, str[2])
  date.setUTCHours(0, 0, 0, 0)
  return date
}
const calculate = () => {
  const birthDay = NewDate('2021-8-6')
  let today = new Date()
  let timeold = today.getTime() - birthDay.getTime()
  let msPerDay = 24 * 60 * 60 * 1000
  let e_daysold = timeold / msPerDay
  let daysold = Math.floor(e_daysold)
  let e_hrsold = (daysold - e_daysold) * -24
  let hrsold = Math.floor(e_hrsold)
  let e_minsold = (hrsold - e_hrsold) * -60
  let minsold = Math.floor((hrsold - e_hrsold) * -60)
  let seconds = Math.floor((minsold - e_minsold) * -60).toString()
  days.value = daysold
  hours.value = hrsold
  minute.value = minsold
  secondss.value = seconds
  setTimeout(calculate, 1000)
}
calculate()
</script>

<style lang="less" scoped>
@import url('./Footer.less');
</style>
