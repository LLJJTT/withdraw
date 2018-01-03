<template>
	<div id="details">
			<el-table
	    :data="content"
	    border
	    style="width: 100%;overflow:hidden;">
	    <el-table-column
	        type="index"
	        width="40">
      	</el-table-column>
	    <el-table-column
	      prop="happen_time"
	      label="交易时间"
	      width="250">
	    </el-table-column>
	    <el-table-column
	      prop="cust_name"	
	      label="经办人"
	      width="70">
	    </el-table-column>
	    <el-table-column
	      prop="batch_no"
	      label="订单号"
	      width="140">
	    </el-table-column>
	     <el-table-column
	      prop="acct_no"
	      label="账号"
	      width="160">
	    </el-table-column>
	     <el-table-column
	      prop="amount"
	      label="转出总金额"
	      width="80">
	    </el-table-column>
	     <el-table-column
	      prop="send_number"
	      label="该笔转账人数"
	      width="40">
	    </el-table-column>
	     <el-table-column
	      prop="summary"
	      label="转账备注"
	      width="140">
	    </el-table-column>
	     <el-table-column
	      prop="response"
	      label="转账结果"
	      width="140">
	    </el-table-column>
	  </el-table>
	  <div class="block">
	    <el-pagination
	    background
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :page-size="4"
	      layout="total, prev, pager, next"
	      :total="parseInt(total_count)">
	      <!--每页多少条++++总条数 -->
	    </el-pagination>
	  </div>
	</div>
</template>
<script>
  import { getCashdetails } from '../service/'
  export default {
    data() {
      return {
      	token:"",
      	total_count:"",
        content: [{
	      	happen_time: "",//交易时间
	        cust_name: "",//经办人
	        batch_no: "",//订单号
	        acct_no: "",//账号
	        amount: "",//转出总金额
	        send_number: "",//该笔转账人数
	        summary: "",//转账备注
	        response: ""//转账结果
        }]
      }
    },
    methods:{
    	handleSizeChange(val) {
    		// console.log(`每页 ${val} 条`);
    	},
      handleCurrentChange(val) {

        console.log(`当前页: ${val}`);
        this.content=[];
  			this.getCashdetails();
      },
    	async getCashdetails (){
    		this.token = sessionStorage.getItem('token',this.token);
    		const params = {token: this.token,page:4,page_size:5} 
    		const response = await getCashdetails(params);
    		if (response && response.data) {
    			this.total_count = response.data.data.total_count;//总数量
    			this.content = response.data.data.content;//详细数据
    			// console.log(this.token);
    			console.log(this.total_count);//总数量
    		}
    	}
  	},
  	created:function (){
  		this.getCashdetails();
  	}
}
</script>

<style lang="scss" >
	#details{
		margin:20px 0 0 100px;
    background:#3B5291;
    padding: 30px 0;
    border-radius: 10px;
    color: #fff;
    position: relative;
		float: left;
		width: 60%;
		height: 100%;

	}
	.el-pagination__total{
			color:#fff;
			font-weight:bold;
		}
</style>