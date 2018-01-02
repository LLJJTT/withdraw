<template>
  <div id="app">
    <router-view></router-view>
    <div style="clear:both"></div>
  </div>
</template>

<script>
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Login from './components/Login'
export default {
  name: 'app',
   components:{
    Login,NavBar,HomePage
  }
}
</script>

<style lang="scss">
@import './css/common.css';
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>




