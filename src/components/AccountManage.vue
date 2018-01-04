<template>
	<div class="AccountManage">
		<div class="wrapper">
			<el-table class="table_manage"
		    :data="tableData2"
		    border
		    max-height= "500"
		    style="width: 100%">
		    <el-table-column
		      type="index"
		      width="40">
		    </el-table-column>
		    <el-table-column
		      prop="ac_name"
		      label="账户名"
		      width="200">
		    </el-table-column>
		    <el-table-column
		      prop="use_money"
		      label="可用余额"
		      width="200">
		    </el-table-column>
		    <el-table-column
		      prop="token"
		      label="access_token"
		      width="200">
		    </el-table-column>
		     <el-table-column
		      prop="rate"
		      label="费率"
		      width="160">
		    </el-table-column>
		    <el-table-column 
		      label="操作"
		      width="200">
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
	export default{
		data() {
		    return {
			        tableData2: [{
			          ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'

			        }, {
			          ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'
			        }, {
			         ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'
			        }, {
			          ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'
			        }, {
			          ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'
			        }, {
			          ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'
			        }, {
			         ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'
			        }, {
			         ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'
			        }, {
			         ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'
			        }, {
			         ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'
			        }, {
			         ac_name: '王小虎',
			          use_money: '800.00￥',
			          token: 'token',
			          rate: '0.002'
			        }]
		    }
  		}
	}
</script>

<style scoped> 
	.AccountManage{
		width: 70%;
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
</style>









