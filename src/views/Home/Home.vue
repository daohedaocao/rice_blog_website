<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:37-->
<!--#@Author : rice_straw-->
<!--#@File : Home.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <div class="home_box">
    <div class="home_top">
      <img
        style="height: 2.5rem; width: 2.5rem; float: left; margin-top: 0.25rem; margin-left: 0.5rem"
        src="../../assets/images/logo2.png"
        alt=""
      />
      <p>欢迎光顾</p>
    </div>
    <!--  <div class="home_hr" />-->
    <!--轮番-->
    <div class="home_container">
      <div class="carousel_s1">
        <el-carousel indicator-position="outside" class="el-carousels">
          <el-carousel-item v-for="item in arr" :key="item">
            <!--          <h3 text="2xl" justify="center">{{ item }}</h3>-->
            <img v-lazy="item" style="user-select: none" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="carousel_s2">
        <div class="information">
          <div class="information_one">
            <div class="home_avatar_a">
              <img
                class="home_avatar"
                src="https://s2.loli.net/2022/08/09/UZhNO58kD9rLgX1.png"
                alt=""
              />
            </div>
            <p class="nickName">昵称</p>
            <p class="introduction">简介</p>
            <div class="left">
              <p>{{ my_article_lists }}</p>
              <p>文章数</p>
            </div>
            <div class="right">
              <p>{{ my_label_lists }}</p>
              <p>标签数</p>
            </div>
            <div class="button_icon">
              <p>
                <!--              gitee,github,qq,掘金-->
                <a href="https://gitee.com/zhuzhisheng"
                  ><img title="gitee" src="https://gitee.com/favicon.ico" alt="gitee"
                /></a>
                <a href="https://github.com/daohedaocao"
                  ><img title="github" src="https://github.com/favicon.ico" alt="github"
                /></a>
                <a href="https://juejin.cn/user/2067546139277063"
                  ><img title="掘金" src="https://juejin.cn/favicon.ico" alt="掘金"
                /></a>
                <a href="https://blog.csdn.net/m0_55334999"
                  ><img title="CSDN" src="https://www.csdn.net/favicon.ico" alt=""
                /></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- home main-->
    <HomeMain></HomeMain>
  </div>
</template>

<script lang="ts" setup>
import HomeMain from '@/views/HomeMain/HomeMain.vue'
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { getArticleNum, getLabelNum } from '@/api/home'
// 传递的数据
const secondary_data: any = ref<any>({
  cover_img: 'https://s2.loli.net/2022/08/05/zeUInVBOCj5pr3w.jpg',
  title_one: '在理想的最美好世界中，一切都是为最美好的目的而设。',
  title_two: '- - welcome Friends - -'
})
const bg_arr: any = ref<any>([
  'https://s2.loli.net/2022/08/05/OrpKdP3eDX6fmJ2.jpg',
  'https://s2.loli.net/2022/08/05/Bp5jwAhV9rsdxRK.jpg',
  'https://s2.loli.net/2022/08/05/zeUInVBOCj5pr3w.jpg',
  'https://s2.loli.net/2022/08/05/T5KWpirOACYbGHV.jpg',
  'https://s2.loli.net/2022/08/05/KpnCMLWsayF2hRB.jpg',
  'https://s2.loli.net/2022/08/05/rGDTH2hBta1URC5.jpg',
  'https://s2.loli.net/2022/08/05/pR2jxTP7XrvYk4h.jpg',
  'https://s2.loli.net/2022/08/05/kYge92sNHZFEajB.jpg'
])
let bg_arr_num: any = Math.floor(Math.random() * bg_arr.value.length)
secondary_data.value.cover_img = bg_arr.value[bg_arr_num]
// 轮番
const arr = [
  'https://s2.loli.net/2022/08/16/ohnY9irOBZlgFc1.jpg',
  'https://s2.loli.net/2022/08/16/vCliQYJ7X2uOsIp.jpg',
  'https://s2.loli.net/2022/08/16/wfYD6LCdPaxRtiZ.jpg',
  'https://s2.loli.net/2022/08/16/ai71kX5hLw4tOyF.jpg',
  'https://s2.loli.net/2022/08/16/JQSg5CWkcAvLT2u.jpg',
  'https://s2.loli.net/2022/08/16/oTQMwGtBHhgc36y.jpg'
]
const my_article_lists: any = ref<any>()
const my_label_lists: any = ref<any>()
onMounted(async () => {
  // 文章数
  const { my_article_list }: any = await getArticleNum()
  my_article_lists.value = my_article_list.length
  // 标签数
  const { my_label_list }: any = await getLabelNum()
  my_label_lists.value = my_label_list.length
})
</script>

<style lang="less" scoped>
@import url('./Home.less');
</style>
