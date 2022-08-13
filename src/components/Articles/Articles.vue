<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/20 15:02-->
<!--#@Author : rice_straw-->
<!--#@File : Articles.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  <h2>Articles</h2>-->
  <SecondaryBgTwo :secondary_data="secondary_data"></SecondaryBgTwo>
  <div class="articles_container">
    <div class="articles_container_left">
      <ul class="articles_container_left_ul">
        <li @click="likeOn">
          <!--          点赞-->
          <thumbs-up
            class="articles_container_left_icon"
            title="点赞"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li v-if="collect_state" @click="collectArticle">
          <!--          收藏-->
          <like
            title="收藏"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li v-else @click="closeCollectArticle">
          <!--          已收藏-->
          <like
            title="取消收藏"
            class="articles_container_left_icon"
            theme="filled"
            size="24"
            fill="#ff0000"
          />
        </li>
        <!--        ================-->
        <li @click="goComments">
          <!--          评论-->
          <comments
            title="评论"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li @click="forWards">
          <!--          转发-->
          <share-one
            title="转发"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li @click="Mores">
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
            <img v-lazy="article_data.headimg" class="articles_img" alt="" />
            <span class="articles_span_one">
              <b style="font-size: 1rem">{{ article_data.username }}</b>
              <br />
              {{ article_data.date }}</span
            >
          </div>
        </div>
        <!--        ====-->
        <!--        文章容器-->
        <div class="user_article_container" v-html="article_data.content"></div>
        <!--        =======-->

        <div class="copyrightNotice">
          <span>未经作者允许 禁止转载!</span>
          <div class="article_tags">
            标签:
            <el-tag
              v-for="tag in tags"
              v-show="tag.name !== ''"
              :key="tag.name"
              class="mx-1"
              style="margin-left: 0.5rem"
              :type="tag.type"
              effect="dark"
            >
              {{ tag.name }}
              <!--              {{ tag.state }}-->
            </el-tag>
          </div>
        </div>
        <!--        ===-->

        <!--        评论-->
        <div ref="comment" class="comment_container">
          <h3>评论</h3>
          <div class="textarea_inputs">
            <el-input
              v-model.trim="textarea"
              resize="none"
              :rows="9"
              type="textarea"
              maxlength="1000"
              placeholder="您给评评理！"
              :autofocus="true"
              @blur="InputBlur"
              @focus="InputFocus"
            />
          </div>
          <div class="input_button">
            <el-button type="primary" @click="submitComments">提交评论</el-button>
          </div>
          <!--评论显示区域-->
          <div class="show_comment_container">
            <SecondaryComments
              :message_one_data="massage_datas_one"
              :message_one_data_two="massage_datas_two"
              @message_listen="messageStateRefresh"
            ></SecondaryComments>
          </div>
        </div>
      </div>

      <div class="articles_container_item2">
        <div class="articles_right_top">
          <img v-lazy="secondary_data.cover_img" alt="" />
        </div>
        <div class="articles_container_item2_right">
          <h3 class="arc_h3">
            <img v-lazy="article_data.headimg" alt="" />
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
import SecondaryBgTwo from '@/components/SecondaryBg/SecondaryBgTwo.vue'
// 引入icon
import { ThumbsUp, BookOpen, Comments, Like, ShareOne, MoreOne } from '@icon-park/vue-next'
import SecondaryComments from '@/components/SecondaryComments/SecondaryComments.vue'
import { ref } from 'vue'
import {
  articleCollect,
  articleMessageFather,
  dropArticleCollect,
  getArticleMessageFather,
  getArticleMessageUserSon,
  getArticles
} from '@/api/article_upload'
import { decryptDES, encryptDES } from '@/encryption/des_encryption'
import { useStore } from 'vuex'

import { useRoute, useRouter } from 'vue-router'
import { isToken } from '@/api/user'

const router = useRoute()
const routers = useRouter()
const article_store = useStore()
// 标签数据
// 原本用的是ref
let tags = reactive<Array<any>>([
  { id: 1, name: '', type: '', state: true },
  { id: 2, name: '', type: 'success', state: true },
  { id: 3, name: '', type: 'info', state: true }
])
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
const secondary_data: any = ref<any>({
  cover_img: '',
  title_one: '',
  title_two: ''
})
watch(
  secondary_data,
  (newdatas: any) => {
    secondary_data.value = newdatas
  },
  { deep: true }
)
// 需要传递一个 aid uid tel  外界传入
const query_data: queryData = reactive({
  tel: '',
  uid: '',
  aid: ''
})
// 加载数据
onMounted(() => {
  query_data.aid = String(router.params.id)
  const { tel, uid, aid } = query_data
  getArticles({ tel, uid, aid }).then((result: any) => {
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
      article_data.introduce = decryptDES(introduce)
      article_data.headimg = headimg
      article_data.cover = cover
      article_data.date = date
      article_data.lable_one = lable_one
      article_data.lable_two = lable_two
      article_data.lable_three = lable_three
      article_data.coverimg = coverimg
      article_data.content = decryptDES(content)
      article_data.title = title
      secondary_data.value.title_one = title
      secondary_data.value.title_two = username
      secondary_data.value.cover_img = coverimg
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
    } else {
      ElMessage({
        showClose: true,
        message: '加载数据失败,请稍后重试！',
        type: 'error'
      })
    }
  })
})

let massage_datas_one: any = ref<Array<any>>([])
const article_aid: any = String(router.params.id)
// 获取一级评论
getArticleMessageFather({ aid: article_aid }).then((result: any) => {
  const { response } = result
  for (let item in response) {
    response[item].content = decryptDES(response[item].content)
    massage_datas_one.value.push(response[item])
  }
  massage_datas_one.value.reverse()
})
// 获取二级评论
let massage_datas_two: any = ref<Array<any>>([])
getArticleMessageUserSon({ aid: article_aid }).then((result: any) => {
  const { responses } = result
  for (let item in responses) {
    responses[item].content = decryptDES(responses[item].content)
    massage_datas_two.value.push(responses[item])
  }
})
watch(
  massage_datas_one,
  (newdata: any) => {
    massage_datas_one.value = newdata
  },
  { deep: true }
)

// 评论数据
let input_bg = ref('')
const textarea = ref('')
// 一级评论
const message_data = ref<any>({
  aid: '',
  tel: '',
  uid: '',
  content: ''
})
const submitComments = async () => {
  const tokens = article_store.getters['user/getValue'].rice_user.token
  const { result }: any = await isToken({ token: tokens })
  if (result == 200) {
    if (textarea.value != '') {
      message_data.value.content = encryptDES(textarea.value)
      message_data.value.aid = String(router.params.id)
      message_data.value.uid = article_store.getters['user/getValue'].rice_user.uid
      message_data.value.tel = article_store.getters['user/getValue'].rice_user.tel
      const { aid, tel, uid, content } = message_data.value
      articleMessageFather({ aid, tel, uid, content }).then((result: any) => {
        if (result.result == 200) {
          ElMessage({
            showClose: true,
            message: '评论成功!你的评论将在1 S后显示在评论区！',
            type: 'success'
          })
          textarea.value = ''
          setTimeout(() => {
            getArticleMessageFather({ aid: article_aid }).then((result: any) => {
              const { response } = result
              massage_datas_one.value.splice(0, massage_datas_one.value.length)
              for (let item in response) {
                response[item].content = decryptDES(response[item].content)
                massage_datas_one.value.push(response[item])
              }
              massage_datas_one.value.reverse()
            })
          }, 600)
        } else {
          ElMessage({
            showClose: true,
            message: '亲,评论失败,请稍后重试!',
            type: 'error'
          })
        }
      })
    } else {
      ElMessage({
        showClose: true,
        message: '亲,请输入评论内容!',
        type: 'error'
      })
    }
  } else {
    ElMessage({
      showClose: true,
      message: '亲,请登录后再进行评论!',
      type: 'error'
    })
  }
}

// 评论状态,刷新评论
const messageStateRefresh = () => {
  setTimeout(() => {
    getArticleMessageUserSon({ aid: article_aid }).then((result: any) => {
      const { responses } = result
      massage_datas_two.value.splice(0, massage_datas_two.value.length)
      for (let item in responses) {
        responses[item].content = decryptDES(responses[item].content)
        massage_datas_two.value.push(responses[item])
      }
    })
  }, 600)
}

// 获取焦点
const InputFocus = () => {
  input_bg.value = 'https://i.loli.net/2021/10/02/HG6zU2ix7YRDp1L.jpg'
  // input_bg.value = '@/assets/images/bg04.jpg'
}
// 失去
const InputBlur = () => {
  input_bg.value = 'https://i.loli.net/2021/10/02/HG6zU2ix7YRDp1L.jpg'
}

// 文章收藏===================
let collect_data: any = reactive<any>({
  collectaid: '',
  uid: '',
  tel: '',
  username: '',
  articletitle: '',
  coverimg: '',
  lable_one: '',
  lable_two: '',
  lable_three: ''
})
let collect_state: any = ref<any>(true)
const collectArticle = () => {
  collect_data.collectaid = String(router.params.id)
  collect_data.uid = article_store.getters['user/getValue'].rice_user.uid
  collect_data.tel = article_store.getters['user/getValue'].rice_user.tel
  collect_data.username = ''
  collect_data.articletitle = article_data.title
  collect_data.coverimg = article_data.coverimg
  collect_data.lable_one = article_data.lable_one
  collect_data.lable_two = article_data.lable_two
  collect_data.lable_three = article_data.lable_three
  const {
    collectaid,
    uid,
    tel,
    username,
    articletitle,
    coverimg,
    lable_one,
    lable_two,
    lable_three
  } = collect_data
  articleCollect({
    collectaid,
    uid,
    tel,
    username,
    articletitle,
    coverimg,
    lable_one,
    lable_two,
    lable_three
  }).then((result: any) => {
    if (result.result == 200) {
      ElMessage({
        message: '亲,收藏成功啦！',
        type: 'success'
      })
      collect_state.value = false
    } else {
      ElMessage({
        message: '亲,收藏失败,请稍后重试！',
        type: 'error'
      })
    }
  })
}
// 取消收藏
const closeCollectArticle = () => {
  const { collectaid, uid } = collect_data
  dropArticleCollect({ uid, collectaid }).then((result: any) => {
    if (result.result == 200) {
      ElMessage({
        message: '取消收藏成功！',
        type: 'success'
      })
      collect_state.value = true
    } else {
      ElMessage({
        message: '亲,取消收藏失败,请稍后重试！',
        type: 'error'
      })
    }
  })
}

// 点赞功能
const likeOn = () => {
  ElMessage({
    message: '亲,功能还未开发！',
    type: 'success'
  })
}
// 转发
const forWards = () => {
  ElMessage({
    message: '亲,功能还未开发！',
    type: 'success'
  })
}
// 更多
const Mores = () => {
  routers.push('/layout/blog')
}
// 评论
const comment: any = ref<HTMLElement>()
const goComments = () => {
  // document.documentElement.scrollTo({ top: 200, behavior: 'smooth' })
  let height = comment.value.offsetTop
  document.documentElement.scrollTo({ top: height, behavior: 'smooth' })
}
</script>

<style lang="less" scoped>
@import url('./Articles.less');
</style>
