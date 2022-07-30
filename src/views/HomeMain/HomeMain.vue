<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 21:38-->
<!--#@Author : rice_straw-->
<!--#@File : HomeMain.vue-->
<!--#@Software:WebStorm-->

<template>
  <div class="home_main_h3">最新文章</div>
  <br />
  <!--  <hr class="home_main_hr" />-->
  <div class="home_mains">
    <div class="home_mains_one">
      <div v-if="!article_list_state">加载中。。。</div>
      <ArticleList
        v-for="item in article_ten_list.length"
        v-else
        :key="item"
        :article_data_single="article_ten_list[item - 1]"
      ></ArticleList>
    </div>
    <div class="home_mains_two">
      <div class="home_mains_two_right home_mains_two_announcement" style="height: 7.6rem">
        <p>公告</p>
        <!--        revolvingLight-->
        <div class="revolvingLight">
          <div class="wrapper">
            <div class="marqueeWords">
              Hello
              world!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热烈庆祝程序员节！&nbsp;&nbsp;May
              you have a happy day!&nbsp;&nbsp;God bless you!&nbsp;&nbsp;Thank you!&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
      <div class="home_mains_two_right home_mains_two_label">
        <p>所有标签</p>
        <Lables></Lables>
      </div>
      <div class="home_mains_two_right home_mains_two_calendar">
        <p>日历</p>
        <el-calendar v-model="value" />
      </div>
      <div class="home_mains_two_right home_mains_two_comment">
        <p>最新评论</p>
        <!--        只取前4个评论-->
        <div v-for="item in 4" :key="item" class="home_mains_two_comment_one">
          <span>2022/7/15 13:22 {{ item }}</span>
          <span>你是最好的你是最好的你是最好的你是最好的你是最好的你是最好的</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticleList from '@/components/ArticleList/ArticleList.vue'
import Lables from '@/components/Lables/Lables.vue'
import { ref } from 'vue'
import { getArticleTen } from '@/api/article_upload'
import { decryptDES } from '@/encryption/des_encryption'
// 日历
const value = ref(new Date())

let article_ten_list: any = ref<Array<any>>([])
let article_list_state = ref(false)
onMounted(() => {
  // 获取文章最新数据
  getArticleTen().then((result: any) => {
    if (result.result == 200) {
      const { articlelist } = result
      console.log(articlelist.length)
      for (let item in articlelist) {
        articlelist[item].content = decryptDES(articlelist[item].content)
        article_ten_list.value.push(articlelist[item])
      }
      // article_ten_list = article_ten_list.value.reverse()
      article_list_state.value = true
    } else {
      console.log('请求失败！')
    }
  })
})
</script>

<style lang="less" scoped>
@import url('./HomeMain.less');
</style>
