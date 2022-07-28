import { RouteRecordRaw } from 'vue-router'
// import Test from '@/views/Test/Test.vue'
// 向外导出一个路由数组
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout.vue'),
    redirect: '/layout/home',
    children: [
      {
        path: '/layout/home',
        component: () => import('@/views/Home/Home.vue')
      },
      {
        path: '/layout/blog',
        component: () => import('@/views/Blog/Blog.vue')
      },
      {
        path: '/layout/archive',
        component: () => import('@/views/Archive/Archive.vue')
      },

      {
        path: '/layout/resource',
        component: () => import('@/views/Resource/Resource.vue')
      },

      {
        path: '/layout/gallery',
        component: () => import('@/views/Gallery/Gallery.vue')
      },
      {
        path: '/layout/message',
        component: () => import('@/views/Message/Message.vue')
      },
      {
        path: '/layout/about',
        component: () => import('@/views/About/About.vue')
      },
      {
        path: '/layout/writeanessay',
        component: () => import('@/components/WriteAnEssay/WriteAnEssay.vue')
      },
      {
        path: '/layout/articles/:id?',
        component: () => import('@/components/Articles/Articles.vue')
      },
      {
        path: '/layout/myhome',
        component: () => import('@/components/MyHome/MyHome.vue')
      }
    ]
  },
  {
    path: '/loginregister',
    component: () => import('@/components/logInRegister/logInRegister.vue')
  }
]
