// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'
// 进度条
// import NProgress from 'nprogress'
import * as https from 'node:https'
// const agent = new https.Agent({
//   rejectUnauthorized: false
// })
// 导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
// export const baseURL = '/rice'
// export const baseURL = import.meta.env.VITE_BASE_URL
// 实现动态接口
export let baseURL: any = ''
if (document.body.clientWidth < 600 || window.screen.width < 600) {
  baseURL = import.meta.env.VITE_BASE_URL
} else {
  const baseURL2 = 'https://49.233.53.82:5001'
  baseURL = baseURL2
}
const instance = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL,
  timeout: 10000,
  headers: {
    'X-Custom-Header': 'foobar',
    Accept: 'application/json'
  },
  // 表示request是否携带cookie
  withCredentials: true
  // httpsAgent: new https.Agent({ keepAlive: true })
})

instance.interceptors.request.use(
  (config: any) => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    // 如果本地有token就在头部携带
    // 1. 获取用户信息对象
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { rice_user } = store.state.user
    // 2. 判断是否有token
    if (rice_user.token) {
      // 3. 设置token
      config.headers.Authorization = `Bearer ${rice_user.token}`
    }
    // console.log(config.headers, 6363)
    // config.headers.SecChUaPlatform = 'Windows'
    // config.headers['sec-ch-ua'] = 'Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104'
    // config.headers['sec-ch-ua-mobile'] = '?0'
    // config.headers['sec-ch-ua-platform'] = 'Windows'
    // config.headers['Sec-Fetch-Mode'] = 'cors'
    // config.headers['Sec-Fetch-Site'] = 'cross-site'
    // config.headers['Sec-Fetch-Dest'] = 'empty'
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers['Content-Type'] = 'application/json'
    // config.headers[`User-Agent`] =
    //   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
    config.headers.UserAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
    // NProgress.start()
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// res => res.data  取出data数据，将来调用接口的时候直接拿到的就是后台的数据
instance.interceptors.response.use(
  res => res.data,
  err => {
    // 401 状态码，进入该函数
    // if (err.response && err.response.status === 401) {
    // 1. 清空无效用户信息
    // 2. 跳转到登录页
    // 3. 跳转需要传参（当前路由地址）给登录页码
    // store.commit('user/setUser', {})
    // 当前路由地址
    // 组件里头：`/user?a=10` $route.path === /user  $route.fullPath === /user?a=10
    // js模块中：router.currentRoute.value.fullPath 就是当前路由地址，router.currentRoute 是ref响应式数据
    // const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    // encodeURIComponent 转换uri编码，防止解析地址出问题
    // router.push('/login?redirectUrl=' + fullPath)
    // }
    return Promise.reject(err)
  }
)

// 请求工具函数
export default (url: any, method: any, submitData: any) => {
  // 负责发请求：请求地址，请求方式，提交的数据
  // console.log(method.toLowerCase())
  // console.log(method.toUpperCase())
  return instance({
    url,
    method,
    // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
    // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
    // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
    // method参数：get,Get,GET  转换成小写再来判断
    // 在对象，['params']:submitData ===== params:submitData 这样理解
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}
