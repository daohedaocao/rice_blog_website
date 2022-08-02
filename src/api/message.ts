import request from '@/Utils/request'

/**
 * 留言板上传留言  一级留言
 * @param {String} nickname - 昵称
 * @param {String} emali - 邮箱
 * @param {String} content - 内容
 * @returns Promise
 */
export const messageFather = ({ nickname, emali, content }: any) => {
  return request('/rice/messagefather', 'post', { nickname, emali, content })
}
/**
 * 获取一级留言
 * @returns Promise
 */
export const getMessageFather = () => {
  return request('/rice/getmessagefather', 'get', {})
}
/**
 * 留言板上传留言  二级级留言
 * @param {String} nickname - 昵称
 * @param {String} nicknametwo - 昵称
 * @param {String} emali - 邮箱
 * @param {String} emalitwo - 邮箱
 * @param {String} content - 内容
 * @param {String} count - 标识
 * @returns Promise
 */
export const messageSon = ({ nickname, nicknametwo, emali, emalitwo, content, count }: any) => {
  return request('/rice/messageson', 'post', {
    nickname,
    nicknametwo,
    emali,
    emalitwo,
    content,
    count
  })
}
/**
 * 获取二级留言
 * @returns Promise
 */
export const getMessageSon = () => {
  return request('/rice/getmessageson', 'get', {})
}
