import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false,
    userinfo: null,
    isSmallScreen: document.body.clientWidth < 950 ? true : false
  },
  mutations: {
    changeLoginState(state, isLogin) {
      state.isLogin = isLogin
    },
    changeUserInfo(state, userinfo) {
      state.userinfo = userinfo
    },
    changeScreenState(state, isSmall) {
      state.isSmallScreen = isSmall
    }
  },
  actions: {
  },
  modules: {
  }
})
