<template lang='pug'>
  section.mt6.mw5.center.w-100
    h1.tc.f3.fw7.ttu.tracked Todos
    hr.bt.b--moon-gray
    div.mb5
      template(v-for='(todo, i) in todos')
        pre {{todo}}
        //- TODO:
    template(v-if="todos.filter((todo) => todo.status === 'archived').length")
      h1.tc.f5.fw5.ttu.tracked Archived Todos
      hr.bt.b--moon-gray
      div.mb5
        template(v-for='(todo, i) in todos')
          //- TODO:
</template>

<script>
import {mapState} from 'vuex'

export default {
  components: {},
  data: () => ({}),
  computed: {
    ...mapState(['todos'])
  },
  methods: {}
}
</script>
