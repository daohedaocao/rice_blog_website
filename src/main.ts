import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入懒加载
import VueLazyload from 'vue-lazyload'
import { createHead } from '@vueuse/head'
const app = createApp(App)
const head = createHead()
app.use(VueLazyload, {
  // 这里表示在加载时要显示的图片的路径
  loading: 'src/assets/images/loadings.png'
  // error: 'src/assets/images/error.png'
})
app.use(router)
app.use(store)
app.use(head)

app.mount('#app')
