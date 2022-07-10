import { RouteRecordRaw } from 'vue-router'
// 向外导出一个路由数组
// const Home = () => import('@/views/Home/Home.vue')
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    // redirect: '/home'
    component: () => import('@/views/Home/Home.vue')
  }
  // {
  //   path: '/home',
  //   // 路由验证
  //   // meta: {
  //   //   title: '主页',
  //   //   // 是否需要授权
  //   //   requireAuth: false,
  //   //   keepAlive: true
  //   // },
  //   // component: () => import('@/views/Home/Home.vue')
  //   component: Home
  // }
]
