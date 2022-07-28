// 文章相关接口
import request from '@/Utils/request'
/**
 * 封面上传，暂时没有用
 * @returns Promise
 * @param img_file
 */
export const uploadArticleCover = (img_file: any) => {
  return request('rice/uploadarticlecover', 'post', img_file)
}
/**
 * 富文本编辑器 文章内图片上传
 * @returns Promise
 * @param img_file
 */
export const uploadArticleImg = (img_file: any) => {
  return request('/rice/uploadarticleimg', 'post', img_file)
}
/**
 * 文章上传
 * @param tel 用户手机账号
 * @param uid  用户uid
 * @param token  用户token
 * @param title 用户文章标题
 * @param lable 用户所选标签
 * @param coverimg 用户文章封面
 * @param content 用户文章内容
 * @returns Promise
 */
export const uploadArticles = ({ tel, uid, token, title, lable, coverimg, content }: any) => {
  return request('/rice/uploadarticles', 'post', {
    tel,
    uid,
    token,
    title,
    lable,
    coverimg,
    content
  })
}
/**
 * 获取文章
 * @param tel 用户手机账号
 * @param uid  用户uid
 * @param aid  用户文章id
 * @returns Promise
 */
export const getArticles = ({ tel, uid, aid }: any) => {
  return request('/rice/getarticles', 'post', { tel, uid, aid })
}

/**
 * 获取标签列表
 * @returns Promise
 */
export const getLables = () => {
  return request('/rice/getlables', 'get', {})
}

/**
 * 获取文章列表
 * @returns Promise
 */
export const getArticleList = () => {
  return request('/rice/getarticlelist', 'get', {})
}
