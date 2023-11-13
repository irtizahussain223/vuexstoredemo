import { createStore } from 'vuex'
import { Todo } from '@/types'
import { getTodos, postTodo } from '@/services/todos'

export default createStore({
  state: {
    todos: [] as Todo[],
  },
  getters: {},
  mutations: {
    setTodos(state, todos: Todo[]) {
      state.todos = todos
    }
  },
  actions: {
    fetchTodos(context) {
      getTodos().then((res) => {
        context.commit('setTodos', res)
      })
    },

    addTodo(context, todo: Todo) {
      postTodo(todo)
    }
  },
  modules: {},
})
