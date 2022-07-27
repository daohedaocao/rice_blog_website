<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/20 15:02-->
<!--#@Author : rice_straw-->
<!--#@File : Articles.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  <h2>Articles</h2>-->
  <SecondaryBg></SecondaryBg>
  <div class="articles_container">
    <div class="articles_container_left">
      <ul class="articles_container_left_ul">
        <li>
          <!--          点赞-->
          <thumbs-up
            class="articles_container_left_icon"
            title="点赞"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li>
          <!--          收藏-->
          <like
            title="收藏"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li>
          <!--          评论-->
          <comments
            title="评论"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li>
          <!--          转发-->
          <share-one
            title="转发"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li>
          <!--          更多好文 到时候链接文章页面-->
          <more-one
            title="更多好文"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
      </ul>
    </div>
    <!--    文章标题，标签，文章内容容器，作者头像，昵称，个人签名，发布日期，留言数量，未经作者允许禁止转载，点赞，收藏-->
    <div class="articles_container_father">
      <!--      =====-->
      <div class="articles_container_item1">
        <div class="articles_container_item1_center">
          <h1>{{ article_data.title }}</h1>
          <div class="articles_author_information">
            <img class="articles_img" :src="article_data.headimg" alt="" />
            <span class="articles_span_one">
              <b style="font-size: 1rem">{{ article_data.username }}</b>
              <br />
              {{ article_data.date }}</span
            >
          </div>
        </div>
        <!--        ====-->
        <!--        文章容器-->
        <div class="user_article_container">加载中...</div>
        <!--        =======-->

        <div class="copyrightNotice">
          <span>未经作者允许 禁止转载!</span>
          <div class="article_tags">
            标签:
            <el-tag
              v-for="tag in tags"
              v-show="tag.state"
              :key="tag.name"
              class="mx-1"
              style="margin-left: 0.5rem"
              :type="tag.type"
              effect="dark"
            >
              {{ tag.name }}
            </el-tag>
          </div>
        </div>
        <!--        ===-->

        <!--        评论-->
        <div class="comment_container">
          <h3>评论</h3>
          <div class="textarea_inputs">
            <el-input
              v-model="textarea"
              :rows="8"
              type="textarea"
              placeholder="请输入你的评论！"
              :autofocus="true"
              @blur="InputBlur"
              @focus="InputFocus"
            />
          </div>
          <div class="input_button">
            <el-button type="primary">提交评论</el-button>
          </div>
          <!--评论显示区域-->
          <div class="show_comment_container">
            <SecondaryComments></SecondaryComments>
            <!--            <div class="top_comments">-->
            <!--              <div class="top_comments_one">-->
            <!--                <img src="https://i.loli.net/2021/10/02/zIHf4MV3DNrYwWb.jpg" alt="" />-->
            <!--                <span class="top_comments_name">稻和稻草</span>-->
            <!--                <span class="top_comments_date">2022-7-20</span>-->
            <!--              </div>-->
            <!--              <div class="top_comments_content">-->
            <!--                使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。-->
            <!--                <div class="top_comments_reply">回复评论</div>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>
      </div>

      <div class="articles_container_item2">
        <div class="articles_right_top">
          <img :src="article_data.cover" alt="" />
        </div>
        <div class="articles_container_item2_right">
          <h3 class="arc_h3">
            <img :src="article_data.headimg" alt="" />
            <span class="span_one">{{ article_data.username }}</span>
            <span class="span_two"> 个性签名:{{ article_data.introduce }} </span>
          </h3>
          <h6>
            <book-open
              style="position: relative; top: 0.3rem"
              theme="outline"
              size="15"
              fill="#080808"
            />
            文章数：65
          </h6>
          <h6>
            <thumbs-up
              style="position: relative; top: 0.2rem"
              theme="outline"
              size="15"
              fill="#080808"
            />
            获赞数：95
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
// 引入icon
import { ThumbsUp, BookOpen, Comments, Like, ShareOne, MoreOne } from '@icon-park/vue-next'
import SecondaryComments from '@/components/SecondaryComments/SecondaryComments.vue'
import { ref } from 'vue'
import { getArticles } from '@/api/article_upload'
import { decryptDES } from '@/encryption/des_encryption'
import { useStore } from 'vuex'
const article_store = useStore()
// 标签数据
// 原本用的是ref
let tags = reactive<Array<any>>([
  { id: 1, name: '', type: '', state: true },
  { id: 2, name: '', type: 'success', state: true },
  { id: 3, name: '', type: 'info', state: true }
])

// defineProps({
//   list: {
//     type: Array as () => Array<any>, //(string也可以是其他你自定义的接口)
//     required: true,
//     default: () => []
//   }
// })

//文章数据
const article_data: articleData = reactive<any>([
  {
    username: '',
    introduce: '', //个性签名
    headimg: '', //用户头像
    cover: '', //用户个人封面
    date: '',
    lable_one: '',
    lable_two: '',
    lable_three: '',
    content: '',
    coverimg: '',
    title: ''
  }
])
// 传递给 顶栏的数据
const secondary_data: secondaryData = reactive<any>({
  title: '',
  img: ''
})
// 需要传递一个 aid uid tel  外界传入
const query_data: queryData = reactive({
  tel: '',
  uid: '',
  aid: '20220727write677cf458c4b840c29b9934abf933502c'
})
// 加载数据
onMounted(() => {
  const { tel, uid, aid } = query_data
  getArticles({ tel, uid, aid }).then((result: any) => {
    console.log(result)
    console.log(result.result)
    if (result.result == 200) {
      const {
        username,
        introduce,
        headimg,
        cover,
        date,
        lable_one,
        lable_two,
        lable_three,
        content,
        coverimg,
        title
      } = result
      article_data.username = username
      article_data.introduce = introduce
      article_data.headimg = headimg
      article_data.cover = cover
      article_data.date = date
      article_data.lable_one = lable_one
      article_data.lable_two = lable_two
      article_data.lable_three = lable_three
      article_data.coverimg = coverimg
      article_data.title = title
      secondary_data.title = title
      secondary_data.img = coverimg
      // 解密并 渲染HTML
      const contents = decryptDES(content)
      const article_container: any = document.querySelector('.user_article_container')
      article_container.innerHTML = contents
      // 渲染标签
      tags[0].name = article_data.lable_one
      tags[1].name = article_data.lable_two
      tags[2].name = article_data.lable_three
      if (article_data.lable_one == '') {
        tags[0].state = false
      } else if (article_data.lable_two == '') {
        tags[1].state = false
      } else if (article_data.lable_three == '') {
        tags[2].state = false
      }
      // 设置顶中栏数据
      article_store.commit('secondary/setUser', secondary_data)
    } else {
      console.log('失败')
    }
  })
})

// 评论数据
let input_bg = ref('')
const textarea = ref('')
// 获取焦点
const InputFocus = () => {
  input_bg.value = 'https://i.loli.net/2021/10/02/HG6zU2ix7YRDp1L.jpg'
  // input_bg.value = '@/assets/images/bg04.jpg'
}
// 失去
const InputBlur = () => {
  input_bg.value = 'https://i.loli.net/2021/10/02/HG6zU2ix7YRDp1L.jpg'
}
</script>

<style lang="less" scoped>
@import url('./Articles.less');
</style>
