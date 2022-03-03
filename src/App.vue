<template>
  <Home />
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(210deg, #9adbbe, #808482);
  height: 100vh;

}
</style>
