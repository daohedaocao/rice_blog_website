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
/**
 * 获取文章最新10条数据
 * @returns Promise
 */
export const getArticleTen = () => {
  return request('/rice/getarticleten', 'get', {})
}
/**
 * 文章一级评论
 * @param aid 文章aid
 * @param tel 评论用户tel
 * @param uid  评论用户uid
 * @param content 评论内容
 * @returns Promise
 */
export const articleMessageFather = ({ aid, tel, uid, content }: any) => {
  return request('/rice/articlemessagefather', 'post', { aid, tel, uid, content })
}
/**
 * 文章二级评论
 * @param aid 文章aid
 * @param tel 评论用户tel
 * @param uid  评论用户uid
 * @param teltwo  评论者用户tel
 * @param uidtwo  评论者用户uid
 * @param content 评论内容
 * @param count 评论唯一标识
 * @returns Promise
 */
export const articleMessageSon = ({ aid, tel, uid, teltwo, uidtwo, content, count }: any) => {
  return request('/rice/articlemessageson', 'post', {
    aid,
    tel,
    uid,
    teltwo,
    uidtwo,
    content,
    count
  })
}

/**
 * 获取一级评论列表
 * @param uid 文章id
 * @returns Promise
 */
export const getArticleMessageFather = ({ aid }: any) => {
  return request('/rice/getarticlemessagefather', 'post', { aid })
}

/**
 * @param aid  评论用户uid
 * 获取二级评论列表
 * @returns Promise
 */
export const getArticleMessageUserSon = ({ aid }: any) => {
  return request('/rice/getarticlemessageson', 'post', { aid })
}

/**
 * 文章收藏
 * @param collectaid  文章aid
 * @param uid  用户uid
 * @param tel  用户tel
 * @param username  用户username
 * @param articletitle  文章标题
 * @param coverimg  文章封面
 * @param lable_one  标签1
 * @param lable_two  标签2
 * @param lable_three  标签3
 * @returns Promise
 */
export const articleCollect = ({
  collectaid,
  uid,
  tel,
  username,
  articletitle,
  coverimg,
  lable_one,
  lable_two,
  lable_three
}: any) => {
  return request('/rice/articlecollect', 'post', {
    collectaid,
    uid,
    tel,
    username,
    articletitle,
    coverimg,
    lable_one,
    lable_two,
    lable_three
  })
}

/**
 * 取消收藏
 * @param uid  评论用户uid
 * @param collectaid  文章aid
 * @returns Promise
 */
export const dropArticleCollect = ({ uid, collectaid }: any) => {
  return request('/rice/droparticlecollect', 'post', { uid, collectaid })
}
