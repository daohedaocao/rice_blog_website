import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routers'

const router = createRouter({
  // 用于精准激活的 RouterLink 的默认类。如果什么都没提供，则会使用 router-link-exact-active。
  linkExactActiveClass: 'router-active',
  history: createWebHistory(),
  // 使用hash的路由模式
  // history: createWebHashHistory(),
  routes,
  // 每次切换路由的时候滚动到页面顶部
  scrollBehavior() {
    // vue2.0  x  y  控制
    // vue3.0  left  top 控制
    return { left: 0, top: 0 }
  }
})

export default router
