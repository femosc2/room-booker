<template>
  <div id="app">
  <div v-if="this.name === null">
    <User @nameChosen="submitName" />
  </div>
  <div v-else-if="this.name != ''">
    <identifier :name="name" />
    <time-slots :name="name" />
  </div>
  </div>
</template>

<script>
import TimeSlots from "./components/TimeSlots.vue"
import User from "./components/User.vue"
import Identifier from "./components/Identifier.vue"

export default {
  name: 'app',
  components: {
    TimeSlots,
    User,
    Identifier
  },
  data: function() {
    return {
      name: null
    }
  },
  methods: {
    submitName(userName) {
      this.name = userName
      console.log(this.name)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
