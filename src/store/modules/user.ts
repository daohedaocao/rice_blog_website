// 用户模块
export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      rice_user: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      },
      // 登录后回跳路径
      redirectUrl: '/'
    }
  },
  getters: {
    getValue(state: any) {
      return state
    }
  },
  mutations: {
    delete(state: any) {
      state.rice_user = ''
    },
    // 修改用户信息，payload就是用户信息对象
    setUser(state: any, payload: any) {
      state.rice_user = payload
    },
    // 修改回跳地址
    setRedirectUrl(state: any, url: any) {
      state.redirectUrl = url
    }
  }
}
