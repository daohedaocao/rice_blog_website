// 用户相关接口
import request from '@/Utils/request'
/**
 * 帐号注册
 * @param {String} username - 用户名
 * @param {String} password - 密码
 * @param {String} tel - 手机号
 * @returns promise
 */
export const registerUser = ({ username, password, tel }: any) => {
  return request('/rice/register', 'post', { username, password, tel })
}
/**
 * 查询用户名或手机号是否已注册
 * @param {String} username - 用户名
 * @param {String} tel - 手机号
 * @returns promise
 */
export const isQueryUser = ({ username, tel }: any) => {
  return request('/rice/isuser', 'post', { username, tel })
}
/**
 * 获取验证码
 * @returns promise
 */
export const getCode = () => {
  return request('/rice/code', 'get', {})
}
