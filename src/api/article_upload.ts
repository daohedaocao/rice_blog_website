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
 * 获取标签列表
 * @returns Promise
 */
export const getLables = () => {
  return request('/rice/getlables', 'get', {})
}
