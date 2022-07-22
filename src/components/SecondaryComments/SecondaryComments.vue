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
    <div class="top_comments">
      <div class="top_comments_one">
        <img src="https://i.loli.net/2021/10/02/zIHf4MV3DNrYwWb.jpg" alt="" />
        <span class="top_comments_name">稻和稻草</span>
        <span class="top_comments_date">2022-7-20 21:14</span>
      </div>
      <div class="top_comments_content">
        使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
        <div v-show="!reply_input_state" class="top_comments_reply" @click="ReplyState">
          回复评论
        </div>
        <div v-show="reply_input_state" class="reply_textarea">
          <el-input
            v-model="reply_textarea"
            :autofocus="true"
            :rows="4"
            type="textarea"
            placeholder="请输入要回复的内容..."
          />
        </div>
        <div v-show="reply_input_state" class="reply_button">
          <el-button type="primary" @click="ConfirmReply">确认回复</el-button>
        </div>
      </div>
    </div>
    <!--    二级评论-->
    <!--    ======-->
    <div
      class="top_comments"
      style="
        width: 93% !important;
        margin-right: 0 !important;
        margin-left: auto !important;
        background: #efeeee !important;
      "
    >
      <div class="top_comments_one" style="padding-left: 2rem !important">
        <!--        谁回复了谁-->
        <img src="https://i.loli.net/2021/10/02/zIHf4MV3DNrYwWb.jpg" alt="" />
        <span class="top_comments_name">稻和稻草 <b style="color: #ababab">回复了</b></span>
        <img src="https://i.loli.net/2021/10/02/zIHf4MV3DNrYwWb.jpg" alt="" />
        <span class="top_comments_name">张三</span>
        <span class="top_comments_date">2022-7-20 21:14</span>
      </div>
      <div class="top_comments_content">
        使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
        <div v-show="!reply_input_state2" class="top_comments_reply" @click="ReplyState2">
          回复评论
        </div>
        <div v-show="reply_input_state2" class="reply_textarea">
          <el-input
            v-model="reply_textarea"
            :autofocus="true"
            :rows="4"
            type="textarea"
            placeholder="请输入要回复的内容..."
          />
        </div>
        <div v-show="reply_input_state2" class="reply_button">
          <el-button type="primary" @click="ConfirmReply2">确认回复</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 回复内容
const reply_textarea = ref('')
// 一级评论
let reply_input_state = ref(false)
// 二级评论
let reply_input_state2 = ref(false)
// 一级评论
// 回复的回调
const ReplyState = () => {
  reply_input_state.value = true
}
// 确认回复的回调
const ConfirmReply = () => {
  reply_input_state.value = false
}
// 二级评论
// 回复的回调
const ReplyState2 = () => {
  reply_input_state2.value = true
}
// 确认回复的回调
const ConfirmReply2 = () => {
  reply_input_state2.value = false
}
</script>

<style lang="less" scoped>
@import url('./SecondaryComments.less');
</style>
