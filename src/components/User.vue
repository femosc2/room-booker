<template>
    <div>
        <input type="text" name="" id="" v-model="user">
        <button @click="submitName">Submit</button>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: ""
    }
  },
  methods: {
      submitName() {
          this.$emit("nameChosen", this.user)
      }
  }
};
</script>

<style>
</style>
