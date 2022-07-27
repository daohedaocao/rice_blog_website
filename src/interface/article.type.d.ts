// 文章相关接口

declare interface UpLoadCoverData {
  name: string
  uid: string
  tel: string
}
declare interface uploadContent {
  tel: string
  uid: string
  token: string
  title: string
  lable: any
  coverimg: string
  content: any
}
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
declare interface queryData {
  tel: string
  uid: string
  aid: string
}
