import axios from 'axios'
import { Todo } from '@/types'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.interceptors.response.use((response) => {
  return response.data
})


export function getTodos() {
  return axios.get('/todos')
}

export function postTodo(todo: Todo) {
    return axios.post('/todos', todo)
}
