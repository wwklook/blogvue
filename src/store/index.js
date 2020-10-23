import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false
  },
  mutations: {
    changeLoginState(state, isLogin){
      state.isLogin = isLogin
    },
  },
  actions: {
  },
  modules: {
  }
})
