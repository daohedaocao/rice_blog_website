// 用户模块
export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      articles: {
        id: '',
        avatar: '',
        nickname: '',
        account: ''
      },
      // 登录后回跳路径
      redirectUrl: '/'
    }
  },
  mutations: {
    delete(state: any) {
      state.profile = ''
    },
    // 修改用户信息，payload就是用户信息对象
    setUser(state: any, payload: any) {
      state.profile = payload
    },
    // 修改回跳地址
    setRedirectUrl(state: any, url: any) {
      state.redirectUrl = url
    }
  }
}
