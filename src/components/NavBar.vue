<template>
	<div id="NavBar">
	  		<div class="tab">
	  			<ul>
	  				<li v-for="item in tabs" :key="item.key" @click="handlClick(item.key)" :class="item.key == tab ? 'active' : ''">
	  					<router-link :to="'/index/'+item.path">{{ item.name }}</router-link> 
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
				name: '首页',
				path: 'HomePage',
				key: 1
			},{
				name: '账户管理',
				path: 'AccountManage',
				key: 2
			},{
				name: '安全策略',
				path: 'SecurityStrategy',
				key: 3
			},{
				name: '详单',
				path: 'Details',
				key: 4
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
  		margin: 20px 0 0 0;
    }

	.tab{
	}
	.tab ul li{
		color: #fff;
		display: block;
		font-size: 16px;
		/*border-bottom: 1px solid #fff;*/
  		border-radius: 10px;
  		
  		margin-left: 10px;

	}
	.tab ul li:not(:first-child){
		margin-top: 10px;
	}
	.tab ul li a{
		display: block;
		width: 100%;
		padding: 30px 0;
	}
	.tab ul li{
		transition: 1.5s;
		background: #0e1216;
		cursor: pointer;
	}
	.tab ul .active{
		background: #FDAC22;
	}
	.tab ul .active a {
	}
</style>