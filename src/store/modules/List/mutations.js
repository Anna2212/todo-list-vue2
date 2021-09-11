import MODULE_NAMESPACE from './namespace'

export default {
  [MODULE_NAMESPACE.SET_TODOS] (state, payload) {
    state.list = payload
  },

  [MODULE_NAMESPACE.UPDATE_TODO] (state, payload) {
    let todoIndex = state.list.findIndex(todo => todo.id === payload.id)
    state.list[todoIndex] = payload
  },

  [MODULE_NAMESPACE.DELETE_TODO] (state, id) {
    let todoIndex = state.list.findIndex(todo => todo.id === id)
    state.list.splice(todoIndex, 1)
  },

  [MODULE_NAMESPACE.SAVE_TODO] (state, payload) {
    state.list.unshift(payload)
  }
}
