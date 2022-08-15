import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routers'
import store from '@/store'
const router = createRouter({
  // 用于精准激活的 RouterLink 的默认类。如果什么都没提供，则会使用 router-link-exact-active。
  linkExactActiveClass: 'router-active',
  // history: createWebHistory(),
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes,
  // 每次切换路由的时候滚动到页面顶部
  scrollBehavior() {
    // vue2.0  x  y  控制
    // vue3.0  left  top 控制
    return { left: 0, top: 0 }
  }
})
// const token = localStorage.getItem('user')
// console.log(token)
router.beforeEach((to, from, next) => {
  const { rice_user } = store.getters['user/getValue']
  if (to.fullPath === '/layout/writeanessay') {
    if (rice_user.token) {
      return next()
    } else {
      ElMessageBox.confirm('该页面需要登录才能使用，请问是否跳转到登录页面？', '登录提示', {
        confirmButtonText: '确认',
        cancelButtonText: '我不去了',
        type: 'warning'
      })
        .then(value => {
          console.log(value)
          next({ path: '/loginregister' })
        })
        .catch(() => {
          next({ path: from.fullPath })
        })
    }
  } else {
    next()
  }
})
export default router
