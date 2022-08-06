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
      <div class="top_comments top_commentss_top">
        <div class="top_comments_one">
          <img
            src="http://127.0.0.1:5000/cover/20220729-7bf8b188-5cc4-4ce8-9a44-15db1acbe415.jpg"
            alt=""
          />
          <span class="top_comments_name">{{ item.nickname }}</span>
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
            <div style="display: flex">
              <el-input v-model="name_input" placeholder="昵称" clearable />
              <el-input v-model="email_input" placeholder="邮箱" clearable />
            </div>
          </div>
          <div v-show="item.states" class="reply_button">
            <el-button
              type="primary"
              @click="ConfirmReply(item.nickname, item.emali, item.count, (item.states = false))"
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
        class="top_comments top_commentss_bottom"
        style="width: 93% !important; margin-right: 0 !important; margin-left: auto !important"
      >
        <!--        {{ items.uid }}-->
        <!--        {{ item.uid }}-->
        <div class="top_comments_one" style="padding-left: 2rem !important">
          <!--        谁回复了谁-->
          <img
            src="http://127.0.0.1:5000/cover/20220729-7bf8b188-5cc4-4ce8-9a44-15db1acbe415.jpg"
            alt=""
          />
          <span class="top_comments_name"
            >{{ items.nicknametwo }} <b style="color: #ababab">回复了</b></span
          >
          <img
            src="http://127.0.0.1:5000/cover/20220729-7bf8b188-5cc4-4ce8-9a44-15db1acbe415.jpg"
            alt=""
          />
          <span class="top_comments_name">{{ items.nickname }}</span>
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
            <div style="display: flex">
              <el-input v-model="name_input_two" placeholder="昵称" clearable />
              <el-input v-model="email_input_two" placeholder="邮箱" clearable />
            </div>
          </div>
          <!--          {{ items }}-->
          <div v-show="items.states" class="reply_button">
            <el-button
              type="primary"
              @click="
                ConfirmReply2(items.nicknametwo, items.emalitwo, item.count, (items.states = false))
              "
              >确认回复</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from 'vue'
import { encryptDES } from '@/encryption/des_encryption'
import { messageSon } from '@/api/message'
import validates from '@/Utils/form_validation'
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
// 回复内容
// 一级评论
const reply_textarea = ref('')
// 二级评论
const reply_textarea2 = ref('')
// 一级评论

// 回复的回调

// 回复的数据
const ReplyState_message_data: ReplyStateMessageDataSon = reactive<any>({
  nickname: '',
  nicknametwo: '',
  emali: '',
  emalitwo: '',
  content: '',
  count: ''
})
// 回复的昵称和邮箱
let name_input = ref<any>('')
let email_input = ref<any>('')
let name_input_two = ref<any>('')
let email_input_two = ref<any>('')
const message_state_refresh_emit = defineEmits(['message_listens'])
// 一级 确认回复的回调
const ConfirmReply = async (
  comment_nickname: any,
  comment_emali: any,
  comment_count: any,
  b: boolean
) => {
  const isEmalis: any = validates.isEmali(email_input.value)
  if (isEmalis === 'success') {
    ReplyState_message_data.emali = email_input.value
  } else {
    ElMessage({
      showClose: true,
      message: '邮箱格式错误,请改正！',
      type: 'error'
    })
  }
  if (
    reply_textarea.value != '' &&
    name_input.value != '' &&
    email_input.value != '' &&
    ReplyState_message_data.emali != ''
  ) {
    ReplyState_message_data.nickname = comment_nickname
    ReplyState_message_data.nicknametwo = name_input.value
    ReplyState_message_data.emali = comment_emali
    ReplyState_message_data.emalitwo = email_input.value
    ReplyState_message_data.count = comment_count
    ReplyState_message_data.content = encryptDES(reply_textarea.value)
    const { nickname, nicknametwo, emali, emalitwo, content, count } = ReplyState_message_data
    messageSon({ nickname, nicknametwo, emali, emalitwo, content, count }).then((result: any) => {
      if (result.result == 200) {
        ElMessage({
          showClose: true,
          message: '回复成功!你的评论将在1 S后显示在回复区下方！',
          type: 'success'
        })
        reply_textarea.value = ''
        name_input.value = ''
        email_input.value = ''
        message_state_refresh_emit('message_listens', { state: 'one' })
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
      message: '亲,内容有错误,请改正后重试！',
      type: 'error'
    })
  }
}
// 二级评论
// 回复的回调

// 二级 确认回复的回调
const ConfirmReply2 = async (
  comment_nickname: any,
  comment_emali: any,
  comment_count: any,
  b: boolean
) => {
  const isEmalis: any = validates.isEmali(email_input.value)
  if (isEmalis === 'success') {
    ReplyState_message_data.emali = email_input.value
  } else {
    ElMessage({
      showClose: true,
      message: '邮箱格式错误,请改正！',
      type: 'error'
    })
  }
  if (
    reply_textarea2.value != '' &&
    email_input_two.value != '' &&
    name_input_two.value != '' &&
    ReplyState_message_data.emali != ''
  ) {
    ReplyState_message_data.nickname = comment_nickname
    ReplyState_message_data.nicknametwo = name_input_two.value
    ReplyState_message_data.emali = comment_emali
    ReplyState_message_data.emalitwo = email_input_two.value
    ReplyState_message_data.count = comment_count
    ReplyState_message_data.content = encryptDES(reply_textarea2.value)
    const { nickname, nicknametwo, emali, emalitwo, content, count } = ReplyState_message_data
    messageSon({ nickname, nicknametwo, emali, emalitwo, content, count }).then((result: any) => {
      if (result.result == 200) {
        ElMessage({
          showClose: true,
          message: '回复成功!你的评论将在1 S后显示在回复区下方！',
          type: 'success'
        })
        reply_textarea2.value = ''
        name_input_two.value = ''
        email_input_two.value = ''
        message_state_refresh_emit('message_listens', { state: 'one' })
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
      message: '亲,内容有错误,请改正后重试！',
      type: 'error'
    })
  }
}
</script>

<style lang="less" scoped>
@import url('./SecondaryComments.less');
</style>
