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
    component: () => import(/* @vite-ignore */ '@/views/Layout.vue'),
    redirect: '/layout/home',
    children: [
      {
        path: '/layout/home',
        component: () => import('@/views/Home/Home.vue')
        // component: Test
      }
    ]
  }
]
