<template>
  <div id="app">
    <UserProfile/>
  </div>
</template>

<script>
// currently vite.config doesn't work so has to import this global base stylesheet here
import "./styles/base.scss"
import UserProfile from "./components/UserProfile.vue"

export default {
  name: 'App',
  components: { UserProfile }
 }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    background-color: #F3F5FA;
  }
</style>
