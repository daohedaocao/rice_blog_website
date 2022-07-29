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
    <div v-for="item in message_one_data" :key="item" class="top_comments">
      <div class="top_comments_one">
        <img :src="item.headimg" alt="" />
        <span class="top_comments_name">{{ item.username }}</span>
        <!--        <span class="top_comments_date">{{ message_one_data }}</span>-->
        <span class="top_comments_date">{{ item.date }}</span>
      </div>
      <div class="top_comments_content">
        {{ item.content }}
        <div
          v-show="!item.states"
          class="top_comments_reply"
          @click="ReplyState(item.uid, (item.states = true))"
        >
          回复评论
        </div>
        <div v-show="item.states" class="reply_textarea">
          <el-input
            v-model="reply_textarea"
            :autofocus="true"
            :rows="4"
            type="textarea"
            placeholder="请输入要回复的内容..."
          />
        </div>
        <div v-show="item.states" class="reply_button">
          <el-button type="primary" @click="ConfirmReply(item.uid, item.tel, (item.states = false))"
            >确认回复</el-button
          >
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
            v-model="reply_textarea2"
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
  {{ message_one_data_two }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { articleMessageSon } from '@/api/article_upload'
import { decryptDES, encryptDES } from '@/encryption/des_encryption'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const router = useRoute()
const message_store = useStore()

defineProps({
  message_one_data: {
    type: Array,
    required: true,
    default: () => []
  },
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
let reply_input_state2 = ref(false)
// 一级评论

// 回复的回调
const ReplyState = (uid: any, state: any) => {
  console.log(state)
  console.log(uid)
  console.log(String(router.params.id))
  console.log(String(message_store.getters['user/getValue'].rice_user.uid), '-----')
}
// 回复的数据
const ReplyState_message_data: ReplyStateData = reactive<any>({
  aid: '',
  tel: '',
  uid: '',
  teltwo: '',
  uidtwo: '',
  content: ''
})
// 确认回复的回调
const ConfirmReply = (comment_uid: any, comment_tel: any) => {
  ReplyState_message_data.aid = String(router.params.id)
  ReplyState_message_data.tel = comment_tel
  ReplyState_message_data.uid = comment_uid
  ReplyState_message_data.teltwo = String(message_store.getters['user/getValue'].rice_user.tel)
  ReplyState_message_data.uidtwo = String(message_store.getters['user/getValue'].rice_user.uid)
  ReplyState_message_data.content = encryptDES(reply_textarea.value)
  const { aid, tel, uid, teltwo, uidtwo, content } = ReplyState_message_data
  articleMessageSon({ aid, tel, uid, teltwo, uidtwo, content }).then((result: any) => {
    const { response } = result
    console.log(response)
  })
}
// 二级评论
// 回复的回调
const ReplyState2 = () => {
  reply_input_state2.value = true
}
// 确认回复的回调
const ConfirmReply2 = () => {
  reply_input_state2.value = false
  console.log(reply_textarea2.value)
}
</script>

<style lang="less" scoped>
@import url('./SecondaryComments.less');
</style>
