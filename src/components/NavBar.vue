<template>
	<div id="NavBar">
	  		<div class="tab">
	  			<ul>
	  				<li v-for="item in tabs" :key="item.key" @click="handlClick(item.key)" :class="item.key == tab ? 'active' : ''"><img :src="item.src" alt="">
	  					<router-link :to="'/index/'+item.path">{{ item.name }}</router-link> <div style="clear:both;"></div>
	  				</li>
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
			tab: 1
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
	    background-color: #fafafa;
	    border-right: 1px solid #eee;
	}
	.tab ul{
	    border-top: 1px solid #eee;
	    padding-left: 5%;
	}
	.tab ul li{
		padding: 5px 20px;
		border-bottom: 1px solid #eee;
		position: relative;
		display: block;
		font-size: 16px;
		text-align: center;
	    height: 60px;
    	line-height: 60px;

	}
	.tab ul li img{
		display: inline-block;
	    width: 24px;
	    height: 24px;
	    vertical-align: middle;
	    padding-right: 7px;

	}
	.tab ul li:not(:first-child){
	}
	.tab ul li a{
		display: inline-block;
		color: #2d2f33;
	}
	.tab ul li{
		transition: 1.5s;
		cursor: pointer;
	}
	.tab ul .active{
		background: #F9CB91;
		color: #fc9538;
	}
	.tab ul .active a {
	}
</style>