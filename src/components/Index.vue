<template>
  <div>
    <v-nav></v-nav>
    <router-view></router-view>
  </div>
</template>
<script>
  import NavBar from './NavBar'
  export default {
    components: {
      'v-nav': NavBar
    }
  }
</script>
<style>
  
</style>