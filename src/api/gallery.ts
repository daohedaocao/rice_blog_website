import request from '@/Utils/request'

/**
 * 画廊上传图片的接口
 * @param {String} uid - uid
 * @param {String} tel - 电话号
 * @param {String} category - 图片类别
 * @returns Promise
 */
export const uploadGallery = ({ uid, tel, category }: any) => {
  return request('/rice/uploadgallery', 'post', { uid, tel, category })
}
/**
 * 画廊图片获取接口
 * @param {String} category - 图片类别
 * @returns Promise
 */
export const getGallery = ({ category }: any) => {
  return request('/rice/getgallery', 'post', { category })
}
