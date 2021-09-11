import Vue from 'vue'
import Vuex from 'vuex'
import VUEX_MODULES from '@/store/vuex.modules'
import LIST_MODULE from '@/store/modules/List'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    createPersistedState({ key: 'todo-list' })
  ],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    [VUEX_MODULES.LIST]: LIST_MODULE
  }
})

export default store
