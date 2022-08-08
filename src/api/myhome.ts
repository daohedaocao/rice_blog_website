// 个人主页相关接口
import request from '@/Utils/request'
/**
 * 获取个人文章数据
 * @param {String} uid - uid
 * @param {String} tel - 手机号
 * @returns object
 */
export const getMyArticleData = ({ uid, tel }: any) => {
  return request('/rice/getmyarticledata', 'post', { uid, tel })
}
/**
 * 修改个人资料
 * @param {String} username - 用户名
 * @param {String} tel - 手机号
 * @param {String} uid - uid
 * @param {String} city - 城市
 * @param {String} birthday - 出生日期
 * @param {String} gender - 性别
 * @param {String} introduce - 个人简介
 * @returns object
 */
export const updateMyMaterial = ({
  username,
  tel,
  uid,
  city,
  birthday,
  gender,
  introduce
}: any) => {
  return request('/rice/updatemymaterial', 'post', {
    username,
    tel,
    uid,
    city,
    birthday,
    gender,
    introduce
  })
}
/**
 * 修改用户头像
 * @param {String} uid - uid
 * @param {String} tel - 手机号
 * @param {String} headimg - 头像地址
 * @returns object
 */
export const updeteUserHeadimg = ({ uid, tel, headimg }: any) => {
  return request('/rice/updeteuserheadimg', 'post', { uid, tel, headimg })
}
/**
 * 修改用户封面
 * @param {String} uid - uid
 * @param {String} tel - 手机号
 * @param {String} cover - 头像地址
 * @returns object
 */
export const updeteUserCover = ({ uid, tel, cover }: any) => {
  return request('/rice/updeteusercover', 'post', { uid, tel, cover })
}

/**
 * 获取我的收藏列表
 * @param {String} uid - uid
 * @param {String} tel - 手机号
 * @returns object
 */
export const getCollects = ({ uid, tel }: any) => {
  return request('/rice/getcollects', 'post', { uid, tel })
}
/**
 * 修改密码
 * @param {String} uid - uid
 * @param {String} tel - 手机号
 * @param {String} password - 手机号
 * @returns object
 */
export const updatePassword = ({ uid, tel, password }: any) => {
  return request('/rice/updatepassword', 'post', { uid, tel, password })
}
/**
 * 修改手机号
 * @param {String} uid - uid
 * @param {String} tel - 手机号
 * @returns object
 */
export const updateTel = ({ uid, tel }: any) => {
  return request('/rice/updatetel', 'post', { uid, tel })
}
/**
 * 注销账号
 * @param {String} uid - uid
 * @param {String} tel - 手机号
 * @returns object
 */
export const logOutUserInfo = ({ uid, tel }: any) => {
  return request('/rice/logoutuserinfo', 'post', { uid, tel })
}
