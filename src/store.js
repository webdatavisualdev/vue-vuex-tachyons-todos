import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      id: 0,
      title: 'One',
      complete: false
    }]
  },
  mutations: {
    addTodo (state, payload) {
      state.todos.push(payload)
    },
    updateTodo (state, payload) {
      let todos = []
      state.todos.forEach(todo => {
        todos.push(todo)
      })
      todos.find(todo => todo.id === payload.id).status = 'archived'
      state.todos = todos
    },
    removeTodo (state, payload) {
      state.todos.splice(state.todos.findIndex(todo => todo.id === payload.id), 1)
    }
  },
  actions: {
  }
})
