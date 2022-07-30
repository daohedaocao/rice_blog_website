// 用户相关接口
import request from '@/Utils/request'
/**
 * 帐号注册
 * @param {String} username - 用户名
 * @param {String} password - 密码
 * @param {String} tel - 手机号
 * @returns object
 */
export const registerUser = ({ username, password, tel }: any) => {
  return request('/rice/register', 'post', { username, password, tel })
}
/**
 * 查询用户名或手机号是否已注册
 * @param {String} username - 用户名
 * @param {String} tel - 手机号
 * @returns object
 */
export const isQueryUser = ({ username, tel }: any) => {
  return request('/rice/isuser', 'post', { username, tel })
}
/**
 * 查询用户密码是否正确
 * @param {String} username - 用户名
 * @param {String} password - 密码
 * @returns object
 */
export const isQueryPassword = ({ username, password }: any) => {
  return request('/rice/isuserpwd', 'post', { username, password })
}
/**
 * 用户登录成功的接口获取token等用户信息
 * @param {String} username - 用户名
 * @returns object
 */
export const loginSuccess = ({ username }: any) => {
  return request('/rice/loginsuccess', 'post', { username })
}
/**
 * 获取验证码
 * @returns object
 */
export const getCode = () => {
  return request('/rice/code', 'get', {})
}
/**
 * 查询token是否有效
 * @param {String} token - 用户名
 * @returns object
 */
export const isToken = ({ token }: any) => {
  return request('/rice/istoken', 'post', { token })
}
