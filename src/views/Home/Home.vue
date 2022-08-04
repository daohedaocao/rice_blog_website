<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:37-->
<!--#@Author : rice_straw-->
<!--#@File : Home.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <div class="home_box">
    <div class="home_top">
      <p>欢迎光顾</p>
    </div>
    <!--  <div class="home_hr" />-->
    <!--轮番-->
    <div class="home_container">
      <div class="carousel_s1">
        <el-carousel indicator-position="outside" class="el-carousels">
          <el-carousel-item v-for="item in arr" :key="item">
            <!--          <h3 text="2xl" justify="center">{{ item }}</h3>-->
            <img :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="carousel_s2">
        <div class="information">
          <div class="information_one">
            <div class="home_avatar_a">
              <img
                class="home_avatar"
                src="https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg"
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
  cover_img: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
  title_one: '在理想的最美好世界中，一切都是为最美好的目的而设。',
  title_two: '-- 伏尔泰'
})
const arr = [
  'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
  'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg',
  'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg',
  'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg',
  'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg',
  'https://i.loli.net/2021/10/02/e58OKC3HnprQjzi.jpg'
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
