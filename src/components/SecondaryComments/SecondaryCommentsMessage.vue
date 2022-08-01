<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/20 20:35-->
<!--#@Author : rice_straw-->
<!--#@File : SecondaryComments.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  <h2>Home组件</h2>-->
  <div class="comments_container">
    <br />
    <!--    一级评论-->
    <div v-for="item in message_one_data" :key="item">
      <div class="top_comments">
        <div class="top_comments_one">
          <img :src="item.headimg" alt="" />
          <span class="top_comments_name">{{ item.username }}</span>
          <!--        <span class="top_comments_date">{{ message_one_data }}</span>-->
          <span class="top_comments_date">{{ item.date }}</span>
        </div>
        <div class="top_comments_content">
          {{ item.content }}
          <div v-show="!item.states" class="top_comments_reply" @click="item.states = true">
            回复评论
          </div>
          <div v-show="item.states" class="reply_textarea">
            <el-input
              v-model.trim="reply_textarea"
              :autofocus="true"
              maxlength="1000"
              :rows="4"
              type="textarea"
              placeholder="亲,请输入要回复的内容..."
            />
          </div>
          <div v-show="item.states" class="reply_button">
            <el-button
              type="primary"
              @click="ConfirmReply(item.uid, item.tel, item.count, (item.states = false))"
              >确认回复</el-button
            >
          </div>
        </div>
      </div>
      <!--    二级评论-->
      <!--    ======-->
      <div
        v-for="items in message_one_data_two"
        v-show="item.count === items.count"
        :key="items"
        class="top_comments"
        style="
          width: 93% !important;
          margin-right: 0 !important;
          margin-left: auto !important;
          background: #efeeee !important;
        "
      >
        <!--        {{ items.uid }}-->
        <!--        {{ item.uid }}-->
        <div class="top_comments_one" style="padding-left: 2rem !important">
          <!--        谁回复了谁-->
          <img :src="items.headimg2" alt="" />
          <span class="top_comments_name"
            >{{ items.username2 }} <b style="color: #ababab">回复了</b></span
          >
          <img :src="items.headimg" alt="" />
          <span class="top_comments_name">{{ items.username }}</span>
          <span class="top_comments_date">{{ items.date }}</span>
        </div>
        <div class="top_comments_content">
          {{ items.content }}

          <div v-show="!items.states" class="top_comments_reply" @click="items.states = true">
            回复评论
          </div>
          <div v-show="items.states" class="reply_textarea">
            <el-input
              v-model.trim="reply_textarea2"
              :autofocus="true"
              maxlength="1000"
              :rows="4"
              type="textarea"
              placeholder="亲,请输入要回复的内容..."
            />
          </div>
          <!--          {{ items }}-->
          <div v-show="items.states" class="reply_button">
            <el-button
              type="primary"
              @click="ConfirmReply2(items.uid, items.tel, item.count, (items.states = false))"
              >确认回复</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  {{ message_one_data }}-->
  <!--  <br />-->
  <!--  <br />-->
  <!--  <br />-->
  <!--  {{ message_one_data_two }}-->
</template>

<script lang="ts" setup>
import { defineEmits, ref } from 'vue'
import { articleMessageSon } from '@/api/article_upload'
import { encryptDES } from '@/encryption/des_encryption'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { isToken } from '@/api/user'
const router = useRoute()
const message_store = useStore()

defineProps({
  // eslint-disable-next-line vue/prop-name-casing
  message_one_data: {
    type: Array,
    required: true,
    default: () => []
  },
  // eslint-disable-next-line vue/prop-name-casing
  message_one_data_two: {
    type: Array,
    required: true,
    default: () => []
  }
})
// const article_user=ref([])
// console.log(message_one_datas.message_one_data[0].aid, 1.345)
// 一级评论内容渲染
// let massage_content = decryptDES(message_one_data.message_one_data[0].uid)
// console.log(massage_content)

// 回复内容
// 一级评论
const reply_textarea = ref('')
// 二级评论
const reply_textarea2 = ref('')
// 一级评论

// 回复的回调

// 回复的数据
const ReplyState_message_data: ReplyStateData = reactive<any>({
  aid: '',
  tel: '',
  uid: '',
  teltwo: '',
  uidtwo: '',
  content: '',
  count: ''
})
const message_state_refresh_emit = defineEmits(['message_listen'])
// 一级 确认回复的回调
const ConfirmReply = async (comment_uid: any, comment_tel: any, comment_count: any, b: boolean) => {
  const tokens = message_store.getters['user/getValue'].rice_user.token
  const { result }: any = await isToken({ token: tokens })
  if (result == 200) {
    if (reply_textarea.value != '') {
      ReplyState_message_data.aid = String(router.params.id)
      ReplyState_message_data.tel = comment_tel
      ReplyState_message_data.uid = comment_uid
      ReplyState_message_data.teltwo = String(message_store.getters['user/getValue'].rice_user.tel)
      ReplyState_message_data.uidtwo = String(message_store.getters['user/getValue'].rice_user.uid)
      ReplyState_message_data.content = encryptDES(reply_textarea.value)
      ReplyState_message_data.count = comment_count
      const { aid, tel, uid, teltwo, uidtwo, content, count } = ReplyState_message_data
      articleMessageSon({ aid, tel, uid, teltwo, uidtwo, content, count }).then((result: any) => {
        if (result.result == 200) {
          ElMessage({
            showClose: true,
            message: '回复成功!你的评论将在1 S后显示在回复区下方！',
            type: 'success'
          })
          reply_textarea.value = ''
          message_state_refresh_emit('message_listen', { state: 'one' })
        } else {
          ElMessage({
            showClose: true,
            message: '回复失败,请稍后重试！',
            type: 'error'
          })
        }
      })
    } else {
      ElMessage({
        showClose: true,
        message: '亲,回复内容不能为空哦！',
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
// 二级评论
// 回复的回调

// 二级 确认回复的回调
const ConfirmReply2 = async (
  comment_son_uid: any,
  comment_son_tel: any,
  comment_son_count: any,
  b: boolean
) => {
  const tokens = message_store.getters['user/getValue'].rice_user.token
  const { result }: any = await isToken({ token: tokens })
  if (result == 200) {
    if (reply_textarea2.value != '') {
      ReplyState_message_data.aid = String(router.params.id)
      ReplyState_message_data.tel = comment_son_tel
      ReplyState_message_data.uid = comment_son_uid
      ReplyState_message_data.teltwo = String(message_store.getters['user/getValue'].rice_user.tel)
      ReplyState_message_data.uidtwo = String(message_store.getters['user/getValue'].rice_user.uid)
      ReplyState_message_data.content = encryptDES(reply_textarea2.value)
      ReplyState_message_data.count = comment_son_count
      const { aid, tel, uid, teltwo, uidtwo, content, count } = ReplyState_message_data
      articleMessageSon({ aid, tel, uid, teltwo, uidtwo, content, count }).then((result: any) => {
        if (result.result == 200) {
          ElMessage({
            showClose: true,
            message: '回复成功!你的评论将在1 S后显示在回复区下方！',
            type: 'success'
          })
          reply_textarea2.value = ''
          message_state_refresh_emit('message_listen', { state: 'two' })
        } else {
          ElMessage({
            showClose: true,
            message: '回复失败,请稍后重试！',
            type: 'error'
          })
        }
      })
    } else {
      ElMessage({
        showClose: true,
        message: '亲,回复内容不能为空哦！',
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
</script>

<style lang="less" scoped>
@import url('./SecondaryComments.less');
</style>
