import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 使用Vuex
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {},
  modules: {}
})
