// 用户相关接口

// 注册用户信息
declare interface User {
  username: string
  password: string
  tel: string
  password2: string
  code: string
}
// 登陆用户信息
declare interface LoginUser {
  username: string
  password: string
}
