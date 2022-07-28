// 顶中栏模块
export default {
  namespaced: true,
  state() {
    return {
      // 顶中栏数据
      secondary: []
    }
  },
  getters: {
    // 获取
    getValue(state: any) {
      return state
    }
  },
  mutations: {
    // 设置数据
    setUser(state: any, payload: any) {
      state.secondary = payload
    }
  }
}
