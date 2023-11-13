<template>
  <div>
    <h3>My Todos</h3>

    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
    </ul>

    <br />

    <form @submit.prevent="addTodo">
      <input v-model.lazy.trim="todoToAdd.name" placeholder="Add a todo" />
      <br />
      <label v-if="showError" style="color: red"> Please input a valid name! </label>

      <br />
      <br />

      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { Todo } from '@/types'

export default defineComponent({
  props: {
    todos: { type: Array as PropType<Todo[]>, required: true },
  },

  // emits: ["click-add-todo"],

  emits: {
    'click-add-todo'(todo: Todo) {
      return !!todo.name
    },
  },

  data() {
    return {
      todoToAdd: {} as Todo,
      showError: false,
    }
  },

  methods: {
    addTodo() {
      if (!this.todoToAdd.name) {
        this.showError = true

        setTimeout(() => {
          this.showError = false
        }, 2000)
        return
      }

      this.$emit('click-add-todo', this.todoToAdd)
    },
  },
})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
