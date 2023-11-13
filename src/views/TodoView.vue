<template>
  <div class="home">
    <todo-list :todos="todos" @click-add-todo="bringTodo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from '@/components/TodoList.vue'
import { Todo } from '@/types'
import { mapState, mapActions } from 'vuex'

export default defineComponent({
  components: {
    TodoList,
  },

  created() {
    this.fetchTodos()
  },


  computed: {
    // todos(): Todo[] {
    //   return this.$store.state.todos
    // },

    ...mapState(['todos']),
  },

  data() {
    return {
      Todo,
    }
  },

  methods: {
    bringTodo(todo: Todo) {
      this.addTodo(todo).then(() => {
        this.fetchTodos()
      })
    },

    ...mapActions(['fetchTodos', 'addTodo']),
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
