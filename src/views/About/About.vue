<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:39-->
<!--#@Author : rice_straw-->
<!--#@File : About.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <div class="about_container">
    <div class="about_top">
      <img src="https://s2.loli.net/2022/08/09/UZhNO58kD9rLgX1.png" alt="" />
      <h3>RICE AND RICE STRAW</h3>
    </div>
    <div class="quotations">
      <h3>{{ quotations_h3.data }}</h3>
      <p>- - {{ quotations_h3.penName }}</p>
    </div>
    <div class="myStory">
      <h3>故事</h3>
      <div class="introduce">
        有人喜欢你，那是他在你身上，照见了他喜欢的特质，跟你无关。有人讨厌你，那是他在你身上，
        投射到他排斥的自己，跟你无关。你只需坦然面对，并做好自己。
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
      <h3><span class="many">￥</span> <span class="reward">鼓励本站</span></h3>
      <p style="padding: 1rem; font-size: 1.15rem">
        我们如同街边的艺人,用笔写着自己的歌谣,如果有一天你感动了,那么期待您请我们来一杯咖啡!
      </p>
      <div class="qrCode">
        <div></div>
        <div></div>
        <div>
          <img src="https://s2.loli.net/2022/08/09/Cx74mdMjRXzZ9yo.jpg" alt="" />
          <p>微信</p>
        </div>
        <div>
          <img src="https://s2.loli.net/2022/08/09/l9bCXGpPJYkhVrQ.jpg" alt="" />
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
  cover_img: 'https://s2.loli.net/2022/08/16/2oZye7wRcBFt5Wh.jpg',
  title_one: '如果回帖是一种美德，那我早就成为圣人了。',
  title_two: '- - 关于站长 - - '
})
const quotations_h3_data: any = ref<any>([
  { data: '慢慢理解世界,慢慢更新自己。', penName: '有人与你共鸣' },
  { data: '不辜负生活,不迷失热爱。', penName: '你是我打不倒的热爱' },
  { data: '执着于理想,存粹于当下。', penName: '愿你满载而归' },
  { data: '当你足够努力,幸运与你不期而遇。', penName: '不负光阴不负卿' },
  { data: '有时候你以为天要塌下来了,其实是你站歪了。', penName: '站内经典笔录' },
  { data: '少年何止带来了阳光,还带来了曙光。', penName: '站内经典笔录' },
  { data: '我走的很慢,但我从来不会后退。', penName: '站内经典笔录' },
  { data: '谁不是一边孤独,一边流浪。', penName: '站内经典笔录' },
  {
    data: '所谓人生就是：听不完的谎言，看不透的人心，放不下的牵挂，经历不完的酸甜苦辣。世间套路深，你很难独善其身。',
    penName: '站内经典笔录'
  },
  { data: '浪荡天涯的孩子,忽晴忽雨的江湖,祝你有梦为马,永远随处可栖。', penName: '大冰' }
])
const quotations_h3: any = ref<any>()
let quotations_h3_num: any = Math.floor(Math.random() * quotations_h3_data.value.length)
quotations_h3.value = quotations_h3_data.value[quotations_h3_num]
</script>

<style lang="less" scoped>
@import url('./About.less');
</style>
