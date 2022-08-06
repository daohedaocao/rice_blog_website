import request from '@/Utils/request'

/**
 * 上传资源
 * @param {String} type_one - 资源分类一级
 * @param {String} type_two - 资源分类二级
 * @param {String} url - 资源地址
 * @param {String} intrudoce - 资源介绍
 * @param {String} logourl - logo
 * @param {String} resourcename - 资源名称
 * @returns Promise
 */
export const uploadResources = ({
  type_one,
  type_two,
  url,
  intrudoce,
  logourl,
  resourcename
}: any) => {
  return request('/rice/uploadresource', 'post', {
    type_one,
    type_two,
    url,
    intrudoce,
    logourl,
    resourcename
  })
}
/**
 * 获取资源列表
 * @returns Promise
 */
export const getResources = () => {
  return request('/rice/getresource', 'get', {})
}
