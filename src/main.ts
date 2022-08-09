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
  loading: 'https://s2.loli.net/2022/08/07/zofqOiZyngGv8B3.png',
  error: 'https://s2.loli.net/2022/08/08/P4thpEBs1FRvjyk.png'
})
app.use(router)
app.use(store)
app.use(head)

app.mount('#app')
