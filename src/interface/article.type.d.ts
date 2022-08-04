// 文章相关接口
// 上传
declare interface UpLoadCoverData {
  name: string
  uid: string
  tel: string
}
// 上传
declare interface uploadContent {
  tel: string
  uid: string
  token: string
  title: string
  lable: any
  coverimg: string
  content: any
}
// 文章数据
declare interface articleData {
  username: string
  introduce: string
  headimg: string
  cover: string
  date: string
  lable_one: string
  lable_two: string
  lable_three: string
  content: any
  coverimg: string
  title: string
}
// 查询数据
declare interface queryData {
  tel: string
  uid: string
  aid: string
}
// 上中栏数据
declare interface secondaryData {
  cover_img: string
  title_one: string
  title_two: string
}
// 文章列表数据
declare interface articleList {
  aid: string
  title: string
  coverimg: string
  content: any
  date: string
  label_one: string
  label_two: string
  label_three: string
}
// 一级评论
declare interface messageData {
  aid: string
  tel: string
  uid: string
  content: any
}
declare interface ReplyStateData {
  aid: string
  tel: string
  uid: string
  teltwo: string
  uidtwo: string
  content: any
  count: any
}
