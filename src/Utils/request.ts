import axios from 'axios'
import store from '@/store'

// export const baseURL = '/rice'
export const baseURL = import.meta.env.VITE_BASE_URL
// 实现动态接口
// export let baseURL: any = ''
// if (document.body.clientWidth < 600 || window.screen.width < 600) {
//   baseURL = import.meta.env.VITE_BASE_URL
// } else {
//   const baseURL2 = 'https://49.233.53.82:5001'
//   baseURL = baseURL2
// }
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { rice_user } = store.state.user
    // 2. 判断是否有token
    if (rice_user.token) {
      // 3. 设置token
      config.headers.Authorization = `Bearer ${rice_user.token}`
    }
    config.headers['Content-Type'] = 'application/json'
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
    return Promise.reject(err)
  }
)

// 请求工具函数
export default (url: any, method: any, submitData: any) => {
  // 负责发请求：请求地址，请求方式，提交的数据
  return instance({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}
