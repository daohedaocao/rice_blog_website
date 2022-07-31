import request from '@/Utils/request'

/**
 * 获取文章分类列表
 * @returns Promise
 */
export const getArchiveList = () => {
  return request('/rice/getarchivelist', 'get', {})
}
