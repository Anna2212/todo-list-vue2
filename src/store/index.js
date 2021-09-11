import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)


const store = new Vuex.Store({
  plugins: [
    createPersistedState({ key: 'todo-list' })
  ],
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})

export default store
