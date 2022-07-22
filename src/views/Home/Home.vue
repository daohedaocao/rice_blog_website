<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:37-->
<!--#@Author : rice_straw-->
<!--#@File : Home.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg></SecondaryBg>
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
              <p>88</p>
              <p>文章数</p>
            </div>
            <div class="right">
              <p>65</p>
              <p>标签数</p>
            </div>
            <div class="button_icon">
              <p>
                <!--              gitee,github,qq,掘金-->
                <a
                  ><img
                    title="gitee"
                    src="https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg"
                    alt=""
                /></a>
                <a><img src="https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg" alt="" /></a>
                <a><img src="https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg" alt="" /></a>
                <a><img src="https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg" alt="" /></a>
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

const arr = [
  'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
  'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg',
  'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg',
  'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg',
  'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg',
  'https://i.loli.net/2021/10/02/e58OKC3HnprQjzi.jpg'
]
</script>

<style lang="less" scoped>
@import url('./Home.less');
</style>
