import MODULE_NAMESPACE from './namespace'
import LIST_API from '@/api/list'
import { online } from '@/helpers';

export default {
  [MODULE_NAMESPACE.GET_TODOS]: async ({ commit }) => {
    let res = []
    if (online()) {
      const { response, error } = await LIST_API.getList()
      if (error) {
        // alert(error.error.message)
        console.log(error)
      }
      res = response
    }
    commit(MODULE_NAMESPACE.SET_TODOS, res)
  },

  [MODULE_NAMESPACE.UPDATE_TODO]: async ({ commit }, payload) => {
    let res = payload
    if (online()) {
      const { response, error } = await LIST_API.updateTodo(payload)

      if (error) {
        console.log(error)
      }

      res = response
    }

    commit(MODULE_NAMESPACE.UPDATE_TODO, res)
  },

  [MODULE_NAMESPACE.DELETE_TODO]: async ({ commit }, id) => {
    if (online()) {
      const { error } = await LIST_API.deleteTodo(id)

      if (error) {
        console.log(error)
      }
    }

    commit(MODULE_NAMESPACE.DELETE_TODO, id)
  },

  [MODULE_NAMESPACE.SAVE_TODO]: async ({ commit }, payload) => {
    let res = payload
    if (online()) {
      const { response, error } = await LIST_API.saveTodo(payload)

      if (error) {
        console.log(error)
      }

      res = response
    }
    commit(MODULE_NAMESPACE.SAVE_TODO, res)
  }
}
