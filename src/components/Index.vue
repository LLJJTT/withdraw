<template>
  <div>
    <v-head></v-head>
    <v-nav></v-nav>
    <router-view></router-view>
  </div>
</template>
<script>
  import NavBar from './NavBar'
  import Head from './Head'
  export default {
    components: {
      'v-nav': NavBar,
      'v-head': Head
    }
  }
</script>
<style>
  
</style>