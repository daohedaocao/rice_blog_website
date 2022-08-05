<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Blog.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  <h2>Blog组件</h2>-->
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <div class="blog_top">
    <div class="blog_arc_nav">
      <div class="blog_arc_nav_text" style="min-width: 10rem">
        <img
          style="
            height: 2.5rem;
            width: 2.5rem;
            float: left;
            margin-top: 0.25rem;
            margin-left: 0.5rem;
          "
          src="../../assets/images/logo2.png"
          alt=""
        />
        博客文章列表
      </div>
      <div class="blog_arc_nav_text" style="min-width: 15rem">
        <input v-model="input_text" type="text" placeholder="搜索文章" autocomplete="off" />
        <search class="blog_button" theme="outline" size="34" fill="#00c2fd" />
      </div>
    </div>
    <div class="blog_nav">
      <el-tabs v-if="input_text === ''" type="border-card" @tab-click="tabsClick">
        <el-tab-pane label="最新文章">
          <div v-if="!article_list_state">
            <img style="height: 14rem" src="../../assets/images/loading.gif" alt="loading" />
          </div>
          <ArticleList
            v-for="item in citrus.length"
            v-else
            :key="item"
            :article_data_single="citrus[item - 1]"
          ></ArticleList>
        </el-tab-pane>
        <el-tab-pane label="推荐">
          <!--          <h1 v-for="item in citrus" :key="item">{{ item }}</h1>-->
          <div v-if="!article_list_state">
            <img style="height: 14rem" src="../../assets/images/loading.gif" alt="loading" />
          </div>
          <ArticleList
            v-for="item in citrus.length"
            v-else
            :key="item"
            :article_data_single="citrus[item - 1]"
          ></ArticleList>
        </el-tab-pane>
        <el-tab-pane label="热榜">
          <div v-if="!article_list_state">
            <img style="height: 14rem" src="../../assets/images/loading.gif" alt="loading" />
          </div>
          <ArticleList
            v-for="item in citrus.length"
            v-else
            :key="item"
            :article_data_single="citrus[item - 1]"
          ></ArticleList>
        </el-tab-pane>
      </el-tabs>
      <!--      搜索的文章容器-->
      <el-tabs v-else type="border-card">
        <div v-show="citrus_input_state">没有找到你要的结果哦！</div>
        <el-tab-pane :label="input_texts">
          <ArticleList
            v-for="item in citrus_input.length"
            :key="item"
            :article_data_single="citrus_input[item - 1]"
          ></ArticleList>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-pagination
      v-model="changePage.currentPage"
      background
      :page-size="page_size"
      :pager-count="pager_count"
      layout="prev, pager, next"
      :total="changePage.total"
      @current-change="currentChange"
    />
  </div>
</template>

<script lang="ts" setup>
// 引入icon
import { Search } from '@icon-park/vue-next'
import ArticleList from '@/components/ArticleList/ArticleList.vue'
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { getArticleList } from '@/api/article_upload'
import { decryptDES } from '@/encryption/des_encryption'

// 传递的数据
const secondary_data: any = ref<any>({
  cover_img: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
  title_one: ' 步伐多慢无关紧要，只要你坚持不懈。',
  title_two: '你的博客'
})

// 文章列表数据
let article_list: any = ref<Array<any>>([])
let article_list_state = ref(false)
// 获取文章列表数据
getArticleList().then((result: any) => {
  if (result.result == 200) {
    const { articlelist } = result
    // 一共多少数据
    changePage.total = articlelist.length
    for (let item in articlelist) {
      articlelist[item].content = decryptDES(articlelist[item].content)
      article_list.value.push(articlelist[item])
    }
    article_list = article_list.value.reverse()
    article_list_state.value = true
  } else {
    ElMessage({
      showClose: true,
      message: '亲,文章请求失败,请稍后重试!',
      type: 'error'
    })
  }
})

const page_size = ref(10)
const pager_count = ref(5)
// 默认
let citrus = ref<any>('')
const changePage = reactive({
  currentPage: 1, //默认当前页面为1
  total: Number(1) //总共有多少数据
})
// 拿到当前页数
const currentChange = (values: any) => {
  if (values == 1) {
    citrus.value = article_list.value.slice(0, 10 * values)
  } else {
    citrus.value = article_list.value.slice(10 * values - 9, 10 * values + 1)
    // citrus.value = arrs.slice((y - 1) * 10 + 1, 10 * y)
  }
}
// 分类回调
const tabsClick = (pane: any) => {
  if (pane.props.label == '最新文章') {
    getArticleList().then((result: any) => {
      if (result.result == 200) {
        const { articlelist } = result
        // 一共多少数据
        changePage.total = articlelist.length
        article_list.value.splice(0, article_list.value.length)
        for (let item in articlelist) {
          articlelist[item].content = decryptDES(articlelist[item].content)
          article_list.value.push(articlelist[item])
        }
        article_list = article_list.value.reverse()
        article_list_state.value = true
      } else {
        ElMessage({
          showClose: true,
          message: '亲,文章请求失败,请稍后重试!',
          type: 'error'
        })
      }
    })
  } else if (pane.props.label == '推荐') {
    getArticleList().then((result: any) => {
      if (result.result == 200) {
        const { articlelist } = result
        // 一共多少数据
        changePage.total = articlelist.length
        article_list.value.splice(0, article_list.value.length)
        for (let item in articlelist) {
          articlelist[item].content = decryptDES(articlelist[item].content)
          article_list.value.push(articlelist[item])
        }
        article_list = article_list.value.sort(() => (Math.random() > 0.5 ? -1 : 1))
        article_list_state.value = true
      } else {
        ElMessage({
          showClose: true,
          message: '亲,文章请求失败,请稍后重试!',
          type: 'error'
        })
      }
    })
  } else if (pane.props.label == '热榜') {
    getArticleList().then((result: any) => {
      if (result.result == 200) {
        const { articlelist } = result
        // 一共多少数据
        changePage.total = articlelist.length
        article_list.value.splice(0, article_list.value.length)
        for (let item in articlelist) {
          articlelist[item].content = decryptDES(articlelist[item].content)
          article_list.value.push(articlelist[item])
        }
        // article_list = article_list.value.reverse()
        article_list_state.value = true
      } else {
        ElMessage({
          showClose: true,
          message: '亲,文章请求失败,请稍后重试!',
          type: 'error'
        })
      }
    })
  }
}

// 监听
watch(
  article_list,
  (new_datas: any) => {
    article_list.value = new_datas
    citrus.value = article_list.value.slice(0, 10)
  },
  // 深度监听
  { deep: true }
)

// 搜索框内容
const input_text = ref('')
const input_texts = ref('')
// 搜索
let article_list_input: any = ref<Array<any>>([])
let citrus_input = ref<any>('')
let citrus_input_state = ref<any>(false)
// 监听input_text
watch(
  input_text,
  () => {
    input_texts.value = '搜索关键词：' + input_text.value
    article_list_input.value.splice(0, article_list_input.value.length)
    for (let item in article_list) {
      if (String(article_list.value[item].title).search(input_text.value) > -1) {
        article_list_input.value.push(article_list.value[item])
      }
    }
    citrus_input.value = article_list_input.value
    changePage.total = citrus_input.value.length
    citrus_input_state.value = citrus_input.value == ''
  },
  { deep: true }
)
</script>

<style lang="less" scoped>
@import url('./Blog.less');
</style>
