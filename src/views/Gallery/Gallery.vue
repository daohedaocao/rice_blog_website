<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Gallery.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  画廊-->
  <SecondaryBg></SecondaryBg>
  <div class="gallery_container">
    <div class="gallery_container_nav">
      <div class="upload_img">
        <span>你的画廊</span>
        <span>
          <!--          <img src="https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg" alt="" />-->
          <upload-picture class="img" theme="outline" size="32" fill="#080808" />
          点击上传
        </span>
      </div>
      <p>
        世界美妙的世界美妙的世界美妙的世界美妙的世界美妙的世界美妙的世界美妙的世界美妙的世界的世界美妙的世界
      </p>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="默认分类" name="one" />
        <el-tab-pane label="动漫二次元" name="two" />
        <el-tab-pane label="风景" name="three" />
        <el-tab-pane label="美女" name="fore" />
        <el-tab-pane label="人物" name="five" />
        <el-tab-pane label="背景" name="six" />
      </el-tabs>
    </div>
    <Waterfall :list="lists"></Waterfall>
  </div>
</template>

<script lang="ts" setup>
// 引入icon
import { UploadPicture } from '@icon-park/vue-next'
import Waterfall from '@/components/Waterfall/Waterfall.vue'
import type { TabsPaneContext } from 'element-plus'
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'

let lists = ref([
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' }
])
const arr = ref([
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/e58OKC3HnprQjzi.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' }
])

// 标签页
let he = reactive({
  id: 1,
  name: 'zhjansgan'
})

const activeName = ref('one')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
  console.log(tab.paneName)
  // const a = event.target
  // console.log(a.innerText)
  lists.value = arr.value
  console.log(lists)
  he.id = 2
}
</script>

<style lang="less" scoped>
@import url('./Gallery.less');
</style>
