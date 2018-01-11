<template>
	<div class="AccountManage">
		<div class="wrapper">
			<el-table class="table_manage"
		    :data="accountall"
		    border
		    max-height= "600"
		    style="width: 100%">
		    <el-table-column
		      type="index"
		      width="40">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="账户名"
		      width="220">
		    </el-table-column>
		    <el-table-column
		      prop="balance"
		      label="可用余额"
		      width="220">
		    </el-table-column>
		    <el-table-column
		      prop="access_token"
		      label="access_token"
		      width="220">
		    </el-table-column>
		     <el-table-column
		      prop="rate"
		      label="费率"
		      width="220">
		    </el-table-column>
		    <el-table-column 
		      label="操作"
		      width="230">
		    	<template slot-scope="scope">
		        <el-button size="mini"
		        type="danger">充值</el-button>
		      </template>
		    </el-table-column>
		  </el-table>
		</div>
	</div>
</template>

<script>
import { getAccountAll } from '../service/'
	export default{
		data() {
		    return {
		        accountall: [
		         {
		          name: '',
		          balance: '',
		          access_token: '',
		          rate: '0.002'
		        }]
		    }
  		},
  		methods:{
  			// 获取数据
  			async getAccountAll() {
  				this.token = sessionStorage.getItem('token',this.token);
  				const params = {token:this.token};
				const response = await getAccountAll(params);
  				if (response.data.status==0) {
  					this.accountall = response.data.data
  					console.log(response.data)
  				}
  			}
  		},
  		created:function(){
  			this.getAccountAll();
  		}
	}
</script>

<style scoped> 
	.AccountManage{
		width: 80%;
		float: left;
		position: relative;
		margin-left: 232px;
	}
	.wrapper{
		border-radius: 10px;
		background: #e6e6e6;
		margin:15px 0 0 0;
		padding: 30px 0;
	}
	.table_manage{
		/*max-height: 500px;
		overflow: auto;*/
	}
	@media(max-width:1200px){
		.AccountManage{
			width:60%;
			margin-left:300px;
		}
	}
</style>









