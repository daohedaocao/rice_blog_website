<template>
  <!--  pc端-->
  <el-menu
    :default-active="activeIndex"
    :router="true"
    :ellipsis="false"
    class="el-menu-demo"
    mode="horizontal"
    :background-color="nav_colors"
    text-color=""
    active-text-color="#00c2fd"
    @select="handleSelect"
  >
    <!--    安卓端适配-->
    <!--    <button class="a_menu">按钮</button>-->
    <el-button type="" class="a_menu" @click="drawer = true">
      <!--      icon-->
      <hamburger-button theme="outline" size="24" fill="#080808" />
    </el-button>

    <el-drawer
      v-model="drawer"
      direction="ltr"
      title=""
      :z-index="99"
      size="20rem"
      :with-header="false"
    >
      <ANavigation @listen="a_home_close"></ANavigation>
    </el-drawer>

    <!--      logo-->
    <el-menu-item class="logo">
      <el-image class="img" :src="url" />
    </el-menu-item>

    <el-menu-item index="/layout/home" class="nav_list">
      <ul class="nav_font_ul">
        <li>首页</li>
        <li>Home</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/blog" class="nav_list">
      <ul class="nav_font_ul">
        <li>博客</li>
        <li>Blog</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/archive" class="nav_list">
      <ul class="nav_font_ul">
        <li>归档</li>
        <li>Archive</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/resource" class="nav_list">
      <ul class="nav_font_ul">
        <li>资源库</li>
        <li>Resource</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/gallery" class="nav_list">
      <ul class="nav_font_ul">
        <li>画廊</li>
        <li>Gallery</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/message" class="nav_list">
      <ul class="nav_font_ul">
        <li>留言板</li>
        <li>Message</li>
      </ul>
    </el-menu-item>
    <el-menu-item index="/layout/about" class="nav_list">
      <ul class="nav_font_ul">
        <li>关于站长</li>
        <li>About</li>
      </ul>
    </el-menu-item>

    <!--    头像-->
    <div class="block">
      <el-avatar :size="40" :src="circleUrl" />
    </div>
  </el-menu>
</template>
<script lang="ts" setup>
// 引入icon
import { HamburgerButton } from '@icon-park/vue-next'
import { reactive, ref, toRefs } from 'vue'
import ANavigation from '@/views/Navigation/ANavigation.vue'
// 导航
const activeIndex = ref('/layout/home')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// 头像
const state = reactive({
  circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const
})
const { circleUrl, squareUrl, sizeList } = toRefs(state)

// logo
const url = 'http://49.233.53.82/myweb/logo1.png'
// 安卓端适配按钮
// const aa = ref()
const drawer = ref(false)
// 接受子组件传递过来的值，关闭侧边
const a_home_close = (closes: boolean) => {
  drawer.value = closes
}
// 鼠标滚动改变nav颜色
const nav_colors = ref('0')
onMounted(() => {
  window.addEventListener('scroll', () => {
    let top = Math.floor(
      document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
    )
    if (top > 250) {
      nav_colors.value = '#ffffff'
    } else {
      nav_colors.value = '0'
    }
    console.log(top)
  })

  // a.style.background = '#282c34'
  // a.console.log()
})
</script>
<style lang="less" scoped>
@import url('PNavigation.less');
</style>
