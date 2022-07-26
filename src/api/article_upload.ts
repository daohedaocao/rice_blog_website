// 文章相关接口
import request from '@/Utils/request'
/**
 * 上传文章封面
 * @param {String} username - 用户名
 * @param {String} password - 密码
 * @param {String} tel - 手机号
 * @returns object
 */
export const uploadArticleCover = ({ username, password, tel }: any) => {
  return request('/rice/uploadarticlecover', 'post', { username, password, tel })
}
