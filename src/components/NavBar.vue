<template>
  <div id="NavBar">
    <div class="tab">
      <ul>
        <router-link :to="'/index/'+item.path" v-for="item in tabs" :key="item.key" @click="handlClick(item.key)" :class="item.key == tab ? 'active' : ''" >
          <img :src="item.src" alt="">
            {{ item.name }}
        </router-link> 
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabs: [{
        name: '后台首页',
        path: 'HomePage',
        key: 1,
        src:'../../static/img/index.png'
      },{
        name: '账户管理',
        path: 'AccountManage',
        key: 2,
        src:'../../static/img/account.png'
      },{
        name: '安全策略',
        path: 'SecurityStrategy',
        key: 3,
        src:'../../static/img/security.png'

      },{
        name: '详情单表',
        path: 'Details',
        key: 4,
        src:'../../static/img/details.png'
      }],
      tab: ''
    }
  },
  methods: {
    handlClick (e) {
      this.tab = e
      // console.log(this.tab)
    }
  }
}
</script>

<style scoped>
    #NavBar{
      width:30%;
      float: left;
      margin: 1px 0 0 0;
    }
  .tab{
    position: fixed;
    width: 180px;
      height: 100%;
      background-color: #f2f2f2;
      border-right: 1px solid #eee;
  }
  .tab ul{
      border-top: 1px solid #eee;
      /*padding-left: 5%;*/
  }
  .tab ul a{
    display: inline-block;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #aaa;
    position: relative;
    font-size: 14px;
    color: #2d2f33;
    text-align: center;
      height: 60px;
      line-height: 60px;
      display: inline-block;
    transition: 1.5s;
    cursor: pointer;
  }
  .tab ul a img{
    display: inline-block;
      width: 24px;
      height: 24px;
      vertical-align: middle;
      padding-right: 7px;

  }
  .tab ul .active{
    background: #f3f4bd;
  }
</style>