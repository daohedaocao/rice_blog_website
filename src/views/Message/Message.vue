<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Message.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg></SecondaryBg>
  <div class="message_container">
    <div class="message_top">
      <el-input v-model="textarea" :rows="6" type="textarea" placeholder="亲,请输入你的留言！" />
      <div style="display: flex">
        <el-input v-model="name_input" placeholder="昵称" clearable />
        <el-input v-model="email_input" placeholder="邮箱" clearable />
      </div>
      <p>
        <el-button type="" @click="uploadMessage">发布留言</el-button>
      </p>
    </div>
    <SecondaryCommentsMessage
      :message_one_data="message_data__one"
      :message_one_data_two="message_data__two"
      @message_listens="messageStateRefreshs"
    ></SecondaryCommentsMessage>
  </div>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { getMessageFather, getMessageSon, messageFather } from '@/api/message'
import { decryptDES, encryptDES } from '@/encryption/des_encryption'
import { ref } from 'vue'
import SecondaryCommentsMessage from '@/components/SecondaryComments/SecondaryCommentsMessage.vue'
import { getArticleMessageFather, getArticleMessageUserSon } from '@/api/article_upload'
// 留言内容
const textarea = ref('')
// 昵称
const name_input = ref('')
// 邮箱
const email_input = ref('')

// 内容
const message_data: messagesData = reactive<any>({
  nickname: '',
  emali: '',
  content: ''
})
// 发布留言回调
const uploadMessage = () => {
  message_data.nickname = name_input.value
  message_data.emali = email_input.value
  message_data.content = encryptDES(textarea.value)
  if (message_data.nickname != '' && message_data.emali != '' && message_data.content != '') {
    const { nickname, emali, content } = message_data
    messageFather({ nickname, emali, content }).then((result: any) => {
      if (result.result == 200) {
        ElMessage({
          showClose: true,
          message: '评论成功!你的评论将在1 S后显示在评论区！',
          type: 'success'
        })
        textarea.value = ''
        name_input.value = ''
        email_input.value = ''
        setTimeout(() => {
          getMessageFather().then((result: any) => {
            const { response } = result
            message_data__one.value.splice(0, message_data__one.value.length)
            for (let item in response) {
              response[item].content = decryptDES(response[item].content)
              message_data__one.value.push(response[item])
            }
            message_data__one.value.reverse()
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
      message: '亲,信息内容不可为空哦!',
      type: 'error'
    })
  }
}

// 一级留言内容
let message_data__one: any = ref<Array<any>>([])
// 获取一级留言
getMessageFather().then((result: any) => {
  if (result.result == 200) {
    const { response }: any = result
    for (let item in response) {
      response[item].content = decryptDES(response[item].content)
      message_data__one.value.push(response[item])
    }
    message_data__one.value.reverse()
  }
})
// 获取二级评论
let message_data__two: any = ref<Array<any>>([])
getMessageSon().then((result: any) => {
  if (result.result == 200) {
    const { responses }: any = result
    for (let item in responses) {
      responses[item].content = decryptDES(responses[item].content)
      message_data__two.value.push(responses[item])
    }
  }
})

// 状态刷新
const messageStateRefreshs = () => {
  setTimeout(() => {
    getMessageSon().then((result: any) => {
      const { responses } = result
      message_data__two.value.splice(0, message_data__two.value.length)
      for (let item in responses) {
        responses[item].content = decryptDES(responses[item].content)
        message_data__two.value.push(responses[item])
      }
    })
  }, 600)
}
</script>

<style lang="less" scoped>
@import url('./Message.less');
</style>
