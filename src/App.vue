<template lang='pug'>
  section.mt6.mw5.center.w-100
    h1.tc.f3.fw7.ttu.tracked Todos
    hr.bt.b--moon-gray
    div.mb3
      template(v-for='(todo, i) in todos.filter((todo) => todo.status !== "archived")')
        div.flex.mb2.justify-between.items-center.shadow-1.pl1(
          v-bind:class='{"bg-moon-gray": todo.complete}'
        )
          input.mr2(
            type='checkbox'
            :id='todo.id'
            :checked='todo.complete'
            v-model='todo.complete'
          )
          label.w-100.tc(
            :for='todo.id'
            v-bind:class='{"strike": todo.complete}'
          ) {{todo.title}}
          button(
            v-on:click='updateTodo(todo.id)'
          ) x
    input.mb5#todo(
      type='text'
      name='todo'
      v-model='todo'
      v-on:keyup='addTodo'
    )
    template(v-if="todos.filter((todo) => todo.status === 'archived').length")
      h1.tc.f5.fw5.ttu.tracked Archived Todos
      hr.bt.b--moon-gray
      div.mb5
        template(v-for='(todo, i) in todos.filter((todo) => todo.status === "archived")')
          div.flex.mb2.justify-between.items-center.shadow-1.pl1(
            v-bind:class='{"bg-moon-gray": todo.complete}'
          )
            input.mr2(
              type='checkbox'
              :id='todo.id'
              :checked='todo.complete'
              v-model='todo.complete'
            )
            label.w-100.tc(
              :for='todo.id'
              v-bind:class='{"strike": todo.complete}'
            ) {{todo.title}}
            button(
              v-on:click='removeTodo(todo.id)'
            ) x
</template>

<script>
import {mapState} from 'vuex'
import store from './store'

export default {
  components: {},
  data: () => ({
    todo: ''
  }),
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    addTodo: function (e) {
      if (e.code === 'Enter') {
        store.commit('addTodo', {
          id: this.todos[this.todos.length - 1].id + 1,
          title: this.todo,
          complete: false
        })
        this.todo = ''
      }
    },
    updateTodo: function (id) {
      store.commit('updateTodo', {id: id})
    },
    removeTodo: function (id) {
      store.commit('removeTodo', {id: id})
    }
  }
}
</script>
