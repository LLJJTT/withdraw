<template>
    <div id="details">
      <div class="tab">
        <el-button type="primary" class="goto" @click="dialogFormVisible = true">导出<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-dialog title="输入要导出的数据个数" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="数量" :label-width="formLabelWidth">
              <el-input type="number" v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="goExcel">确 定</el-button>
          </div>
        </el-dialog>
      </div>

            <el-table
        :data="content"
        border
        max-height= "600"
        style="width: 100%;overflow:auto;">
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
          width="100">
        </el-table-column>
         <el-table-column
          prop="send_number"
          label="该笔转账人数"
          width="110">
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
          @current-change="handleCurrentChange"
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
        total_page:1,
        content: [{
            happen_time: "",//交易时间
            cust_name: "",//经办人
            batch_no: "",//订单号
            acct_no: "",//账号
            amount: "",//转出总金额
            send_number: "",//该笔转账人数
            summary: "",//转账备注
            response: ""//转账结果
        }],
        downloadLoading:false,
        dialogFormVisible: false,
        form: {
          name: '',
        },
        formLabelWidth: '40px',
      }
    },
    methods:{
      // 分页
      handleCurrentChange(val) {
        this.total_page = val;
        this.getCashdetails();
      },
      // 分页接口
      async getCashdetails (){
        this.token = sessionStorage.getItem('token',this.token);
        const params = {token: this.token,page: this.total_page,page_size:10} 
        const response = await getCashdetails(params);
        if (response && response.data) {
          this.total_count = response.data.data.total_count;//总数量
          this.content = response.data.data.content;//详细数据
          this.total_page = response.data.data.total_page;//总的页数
        }
      },
      // 导出excel
      goExcel:function (){
        if (parseInt(this.form.name)>0&&parseInt(this.form.name)<2000) {
          require.ensure([], () => {
            const { export_json_to_excel } = require('@/vendor/Export2Excel');
            const tHeader = ['交易时间', '经办人', '订单号','账号','转出总金额','该笔转账人数','转账备注','转账结果'];
            const filterVal = ['happen_time', 'cust_name', 'batch_no','acct_no','amount','send_number','summary','response'];
            const list = this.content;
            const data = this.formatJson(filterVal, list);
            export_json_to_excel(tHeader, data, '列表excel');
            this.downloadLoading = false;
          })
        }
        else{
          this.$message.error('请输入1-2000的整数');
        }
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      }
    },
    created:function (){
      this.getCashdetails();
    }
}
</script>

<style lang="scss" scoped>
    #details{
      margin-top: 15px;
      margin-left:-200px;
      background: #e6e6e6;
      padding: 30px 0;
      border-radius: 10px;
      color: #fff;
      position: relative;
      float: left;
      width: 80%;
      height: 80%;
      .tab{
        width:100%;
        background:#e6e6e6;
        position:relative;
        margin-top:-30px;
        .goto{
          float:right;
        }
        .el-pagination__total{
          color:#333;
          font-weight:bold;
        }
      }
    }
    @media(max-width:1200px){
      #details{
        width:60%;
        margin-left:300px;
      }
    }
    
</style>