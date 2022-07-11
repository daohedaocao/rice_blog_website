import { RouteRecordRaw } from 'vue-router'
// import Test from '@/views/Test/Test.vue'
// 向外导出一个路由数组
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(/* @vite-ignore */ '@/views/Home/Home.vue'),
    children: [
      {
        path: '/home/test',
        component: () => import('@/views/Test/Test.vue')
        // component: Test
      }
    ]
  }
]
