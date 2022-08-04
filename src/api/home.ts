import request from '@/Utils/request'

/**
 * 获取文章数
 * @returns object
 */
export const getArticleNum = () => {
  return request('/rice/getarticlenum', 'get', {})
}
/**
 * 获取标签数
 * @returns object
 */
export const getLabelNum = () => {
  return request('/rice/getlabelnum', 'get', {})
}
