<template>
  <div id="app">
    <!-- <div id="head">
      <h1>提现管理系统</h1>
    </div> -->
    <NavBar></NavBar>
    <Login></Login>
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
  // background:#449095;
  // padding-bottom:100px;
  // background:url(./assets/bg.jpeg);
  // background-position:center;
  // background-repeat:no-repeat;
  // background-size:cover;
}
// #head{
//       width: 100%;
//       height: 80px;
//       background:#a26c3e;
//       border-bottom:1px solid #f5f5f5;
// }
// #head h1{
//   line-height:80px;
//   font-weight:bold;
//   color:#fff;
//   font-size:25px;
// }
</style>




