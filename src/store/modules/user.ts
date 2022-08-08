// 用户模块
export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      rice_user: {
        id: '',
        birthday: '',
        city: '',
        collect: '',
        cover: '',
        date: '',
        emali: '',
        gallerycontribution: '',
        gender: '',
        headimg: '',
        introduce: '',
        jurisdiction: '',
        response: '',
        result: '',
        state: '',
        tel: '',
        token: '',
        uid: '',
        userlikes: '',
        username: ''
      }
    }
  },
  getters: {
    // 获取
    getValue(state: any) {
      return state
    }
  },
  mutations: {
    // delete(state: any) {
    //   state.rice_user = ''
    // },
    // 修改用户信息，payload就是用户信息对象
    setUser(state: any, payload: any) {
      state.rice_user = payload
    },
    setUserHeadImg(state: any, payload: any) {
      state.rice_user.headimg = payload
    },
    setUserTel(state: any, payload: any) {
      state.rice_user.tel = payload
    },
    setUserCover(state: any, payload: any) {
      state.rice_user.cover = payload
    }
  }
}
