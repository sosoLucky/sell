<template>
  <div class="hello">
    {{ msg }}
    <p>{{count}}</p>
    <button @click= "increment">+</button>
    <button @click= "decrement">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'Vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello world'
    }
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions([
      'increment', 'decrement'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
