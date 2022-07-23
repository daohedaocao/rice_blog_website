// 用户相关接口
import request from '@/Utils/request'
/**
 * 帐号密码登录
 * @param {String} account - 帐号
 * @param {String} password - 密码
 * @returns promise
 */
export const userAccountLogin = ({ account, password }: any) => {
  return request('/rice/register', 'post', { account, password })
}
