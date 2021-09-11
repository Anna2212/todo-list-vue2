import request from './index'

export default {
  getList: async () => {
    try {
      const response = await request.APP_API.get('/todos')
      return { response: response.data }
    } catch (error) {
      return { error: error.response.data }
    }
  },
  updateTodo: async (payload) => {
    try {
      const response = await request.APP_API.put(`/todos/${payload.id}`, payload)
      return { response: response.data }
    } catch (error) {
      return { error: error.response.data }
    }
  },

  deleteTodo: async (id) => {
    try {
      const response = await request.APP_API.delete(`/todos/${id}`)
      return { response: response.data }
    } catch (error) {
      return { error: error.response.data }
    }
  },

  saveTodo: async (payload) => {
    try {
      const response = await request.APP_API.post(`/todos`, payload)
      return { response: response.data }
    } catch (error) {
      return {error: error.response.data}
    }
  }
}
