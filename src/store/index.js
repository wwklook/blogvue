import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false,
    userinfo: null
  },
  mutations: {
    changeLoginState(state, isLogin) {
      state.isLogin = isLogin
    },
    changeUserInfo(state, userinfo) {
      state.userinfo = userinfo
    },
  },
  actions: {
  },
  modules: {
  }
})
