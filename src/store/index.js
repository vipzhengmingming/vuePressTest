/*
 * @Author: your name
 * @Date: 2020-06-22 10:07:53
 * @Description: store配置
 */ 

import Vue from "vue"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"

import { SET_TOKEN } from "./mutatiosType"

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    [SET_TOKEN](state, payload) {
      state.token = payload
    }
  },
  actions: {
    setToken({ commit }, payload) {
      commit(SET_TOKEN, payload)
    }
  },
  plugins: [vuexLocal.plugin]
})
