import axios from 'axios'

const HEADERS = {
  'Content-type': 'application/json; charset=UTF-8'
}

const createInstance = () => {
  const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: HEADERS
  })

  instance.all = axios.all
  instance.spread = axios.spread
  instance.CancelToken = axios.CancelToken

  instance.interceptors.response.use(response => response, async error => {
    return Promise.reject(error)
  })

  return instance
}

export default {
  APP_API: createInstance()
}
