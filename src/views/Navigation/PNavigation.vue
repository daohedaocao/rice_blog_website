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
    active-text-color="#ff6b6b"
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
      <img class="img" src="https://s2.loli.net/2022/08/09/WzEPuLgb3XBlVIm.png" alt="logo" />
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
      <span v-if="!ishint" class="hints">访客你好,点击头像登录哦！</span>
      <span v-else class="hints">{{ username }}</span>
      <el-avatar
        class="avatar_img"
        :size="40"
        :src="circleUrl"
        @mouseleave="IsAvatarList(false)"
        @mouseover="IsAvatarList(true)"
      />
    </div>
    <div
      v-show="is_avatar_drop_down_list"
      class="avatar_drop_down_list"
      @mouseleave="IsAvatarList(false)"
      @mouseover="IsAvatarList(true)"
    >
      <ul class="avatar_drop_down_list_container">
        <router-link to="/loginregister">
          <li v-show="!rice_user.token">
            <login class="li_icon" theme="outline" size="14" fill="#080808" />
            登录
          </li>
        </router-link>
        <!--        <router-link to="/layout/writeanessay">-->
        <li @click="Article">
          <editor class="li_icon" theme="outline" size="14" fill="#080808" />
          写文章
        </li>
        <!--        </router-link>-->
        <!--        <router-link to="/layout/myhome">-->
        <li v-show="rice_user.token" @click="myHome">
          <home class="li_icon" theme="outline" size="14" fill="#080808" />
          我的主页
        </li>
        <!--        </router-link>-->
        <li v-show="rice_user.token" @click="userLogout">
          <logout class="li_icon" theme="outline" size="14" fill="#080808" />
          退出登录
        </li>
      </ul>
    </div>
  </el-menu>
</template>
<script lang="ts" setup>
// 引入icon
import { HamburgerButton, Editor, Home, Logout, Login } from '@icon-park/vue-next'
import { reactive, ref, toRefs } from 'vue'
import ANavigation from '@/views/Navigation/ANavigation.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const p_nav_store = useStore()
// 导航
const activeIndex = ref('/layout/home')
const handleSelect = (key: string, keyPath: string[]) => {
  //
}
// 监听hash的函数
const pathArrHome = ['#/layout/home']
const pathArrBlog = ['#/layout/blog']
const pathArrArchive = ['#/layout/archive']
const pathArrResource = ['#/layout/resource']
const pathArrGallery = ['#/layout/gallery']
const pathArrMessage = ['#/layout/message']
const pathArrAbout = ['#/layout/about']
if (pathArrHome.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/home'
} else if (pathArrBlog.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/blog'
} else if (pathArrArchive.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/archive'
} else if (pathArrResource.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/resource'
} else if (pathArrGallery.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/gallery'
} else if (pathArrMessage.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/message'
} else if (pathArrAbout.indexOf(window.location.hash) !== -1) {
  activeIndex.value = '/layout/about'
} else {
  activeIndex.value = ''
}

// 判断鼠标触摸头像是否显示下拉列表
const is_avatar_drop_down_list = ref(false)
const IsAvatarList = (condition: boolean) => {
  is_avatar_drop_down_list.value = condition
}
// 头像------
const state = reactive({
  // 默认头像
  circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
const { rice_user } = p_nav_store.getters['user/getValue']
if (rice_user.headimg) {
  state.circleUrl = rice_user.headimg
}
let ishint: any = rice_user.token
let username: any = rice_user.username
const { circleUrl } = toRefs(state)

// ----------

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
    // console.log(top)
  })

  // a.style.background = '#282c34'
  // a.console.log()
})

// 退出登录的回调
const userLogout = () => {
  p_nav_store.commit('user/setUser', {})
  router.push('/loginregister')
}
// 我的主页
const myHome = () => {
  if (rice_user.token) {
    router.push('/layout/myhome')
  } else {
    console.log('没')
  }
}

// 写文章
const Article = () => {
  if (rice_user.token) {
    router.push('/layout/writeanessay')
  } else {
    console.log('没')
    ElMessageBox.confirm('亲,你还未登录哦！', '亲!', {
      confirmButtonText: '去登录',
      cancelButtonText: '不去了',
      type: 'warning'
    })
      .then(() => {
        router.push('/loginregister')
      })
      .catch(() => {
        //
      })
  }
}
</script>
<style lang="less" scoped>
@import url('PNavigation.less');
</style>
