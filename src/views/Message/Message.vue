<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Message.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <div class="message_container">
    <div class="message_top">
      <el-input
        v-model.trim="textarea"
        resize="none"
        :rows="11"
        :autofocus="true"
        maxlength="1000"
        type="textarea"
        placeholder="留下心中的言语，长存着、等待着走入他人心中！"
      />
      <div style="display: flex">
        <el-input v-model="name_input" placeholder="昵称" clearable />
        <el-input v-model="email_input" placeholder="邮箱" clearable />
      </div>
      <p>
        <el-button type="primary" round @click="uploadMessage">发布留言</el-button>
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
import validates from '@/Utils/form_validation'
// 传递的数据
const secondary_data: any = ref<any>({
  cover_img: 'https://s2.loli.net/2022/08/05/kYge92sNHZFEajB.jpg',
  title_one: '懂得欣赏的人,找到的是感觉;懂得知足的人,找到的是快乐;懂得珍惜的人,找到的是幸福。',
  title_two: '- - 留言板 - - '
})
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
  const isEmalis: any = validates.isEmali(email_input.value)
  if (isEmalis === 'success') {
    message_data.emali = email_input.value
  } else {
    ElMessage({
      showClose: true,
      message: '邮箱格式错误,请改正！',
      type: 'error'
    })
  }
  message_data.nickname = name_input.value
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
      message: '亲,内容有错误,请改正后重试！',
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
