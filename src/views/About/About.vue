<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:39-->
<!--#@Author : rice_straw-->
<!--#@File : About.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <div class="about_container">
    <div class="about_top">
      <img src="https://s2.loli.net/2022/08/05/kYge92sNHZFEajB.jpg" alt="" />
      <h3>RICE AND RICE STRAW</h3>
    </div>
    <div class="quotations">
      <h3>的就撒好的就撒好地撒大家带回家爱上帝</h3>
      <p>---第三季度哈哈是的</p>
    </div>
    <div class="myStory">
      <h3>我的故事</h3>
      <div class="introduce">
        岁月的河流缓缓流过，成长的脚印深深留下，蓦然回首，长大的路上留下一串串或深或浅的脚印，
        记载着欢乐，记载着忧伤，伴随我一路走来。
      </div>
    </div>
    <div class="about_content">
      <h3>联系我</h3>
      <ul>
        <li>
          <accept-email
            style="position: relative; top: 0.3rem; right: 0.2rem"
            theme="filled"
            size="20"
            fill="#000000"
            :stroke-width="2"
          />Emali:2053662445@qq.com
        </li>
        <li>
          <tencent-qq
            style="position: relative; top: 0.3rem; right: 0.2rem"
            theme="filled"
            size="20"
            fill="#000000"
            :stroke-width="2"
          />Q Q:2053662445
        </li>
        <li>
          <wechat
            style="position: relative; top: 0.3rem; right: 0.2rem"
            theme="filled"
            size="20"
            fill="#000000"
            :stroke-width="2"
          />微信:shengbao2053662445
        </li>
      </ul>
      <br />
    </div>
    <div class="about_bottom">
      <h3><span class="many">¥</span> <span class="reward">打赏本站</span></h3>
      <p>6959</p>
      <div class="qrCode">
        <div></div>
        <div></div>
        <div>
          <img src="https://s2.loli.net/2022/08/05/kYge92sNHZFEajB.jpg" alt="" />
          <p>微信</p>
        </div>
        <div>
          <img src="https://s2.loli.net/2022/08/05/kYge92sNHZFEajB.jpg" alt="" />
          <p>支付宝</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AcceptEmail, TencentQq, Wechat } from '@icon-park/vue-next'
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
// 传递的数据
const secondary_data: any = ref<any>({
  cover_img: 'https://s2.loli.net/2022/08/05/VPZGFM9hqaAwUQR.jpg',
  title_one: '如果回帖是一种美德，那我早就成为圣人了。',
  title_two: '- - 关于站长 - - '
})
</script>

<style lang="less" scoped>
@import url('./About.less');
</style>
