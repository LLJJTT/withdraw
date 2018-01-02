<template>
  <div id="HomePage">
       <div class="wrapper_left">
          <div class="jine_div">
              <ul class="jine">
                   <li>当前准备金&nbsp;总余额:</li>
                   <li><span>6666666666.66</span><span>/元</span></li>
               </ul>
          </div>
          <div class="head_table">
             <div class="reload_div">
                <ul class="re_ul">
                  <li>最近流水</li>
                  <li>刷新</li>
                  <div style="clear:both"></div>
                </ul>
              </div>
             <el-table
              :data="tableData"
              border
              height="400"
              style="width: 100%">
               <el-table-column
                type="index"
                width="40">
              </el-table-column>
              <el-table-column
                prop="from"
                label="来源"
                width="80">
              </el-table-column>
              <el-table-column
                prop="time"
                label="时间"
                width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="80">
              </el-table-column>
              <el-table-column
                prop="amounts"
                label="金额"
                width="120">
              </el-table-column>
            </el-table>
          </div>
           
       </div>
       <div class="wrapper_right">
         <el-table class="td1"
          :data="tableData1"
          border
          height="400px"
          style="width: 100%">
           <el-table-column
            type="index"
            width="40">
          </el-table-column>
          <el-table-column
            prop="user"
            label="用户"
            width="80">
          </el-table-column>
          <el-table-column
            prop="now_money"
            label="当前余额"
            width="100">
          </el-table-column>
          <el-table-column
            prop="today_money"
            label="今日流水"
            width="120">
          </el-table-column>
      </el-table>
       </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
    data() {
      return {
          tableData: [{
            from: '爱游油',
            time:'2016-05-04',
            name: '王小虎',
            amounts: '666.00'
          }, {
            from: '爱游油',
            time:'2016-05-04',
            name: '王小虎',
            amounts: '666.00'
          }, {
            from: '爱游油',
            time:'2016-05-04',
            name: '王小虎',
            amounts: '666.00'
          }, {
           from: '爱游油',
            time:'2016-05-04',
            name: '王小虎',
            amounts: '666.00'
          },
          {
           from: '爱游油',
            time:'2016-05-04',
            name: '王小虎',
            amounts: '666.00'
          },
          {
           from: '爱游油',
            time:'2016-05-04',
            name: '王小虎',
            amounts: '666.00'
          },
          {
           from: '爱游油',
            time:'2016-05-04',
            name: '王小虎',
            amounts: '666.00'
          },
          {
           from: '爱游油',
            time:'2016-05-04',
            name: '王小虎',
            amounts: '666.00'
          },
          {
           from: '爱游油',
            time:'2016-05-04',
            name: '王小虎',
            amounts: '666.00'
          },
          {
           from: '爱游油',
            time:'2016-05-04',
            name: '王小虎',
            amounts: '666.00'
          }],
          tableData1:[{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          },{
            user:'老张',
            now_money:'6666.00',
            today_money:'-100.00'
          }]
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #HomePage{
    width: 70%;
    float: left;
  }
  .wrapper_left{
    float: left;
    width: 40%;
    margin:20px 0 0 100px;
    background:#3B5291;
    padding: 30px 0;
    border-radius: 10px;
    color: #fff;
    position: relative;
  }
  .jine_div{
    padding-bottom: 30px;
  }
  .wrapper_left .jine li{
    display: block;
    /*background: #000;*/
    padding-bottom: 10px !important;
    width: 50%;
    margin: 0 auto;
    border-bottom: 1px solid #f5f5f5;
  }
  .wrapper_left .jine li:nth-child(1){
    font-size: 16px;
    padding: 0 5px;
  }
  .wrapper_left .jine li:nth-child(2){
    margin-top: 20px;
  }
  .wrapper_left .jine li:nth-child(2) span:first-child{
    font-size: 18px;
  }
  .wrapper_left .jine li:nth-child(2) span:last-child{
    color: #f63300;
    margin-left: 5px;
  }
  .wrapper_right{
    width: 30%;
    border-radius: 10px;
    background:#3B5291;
    float: right;
    position: relative;
    right: 100px;
    margin-top:20px;
    color: #fff;
    padding-bottom: 30px;
    
  }
  .br{
    padding: 0 10px;
    border-right: 1px solid #fff;
  }
  .data_list{
    border-top: 1px solid #fff;
    padding: 10px 5px;
  }
  .user{
    padding: 15px 5px;
  }
  .el-table th>.cell{
    text-align: center !important;
  }
  .head_table{
    overflow: auto;
  }
  .reload_div{
    background: #000;
    border-left:1px solid #eceef5;
    border-right:1px solid #eceef5;

  }
  .reload_div .re_ul li{
    color: #333;
    background: #fff;
    padding: 15px 0;
    width: 50%;
    display: block;
    text-align: center;
    font-weight: bold;
  }
  .reload_div .re_ul li:nth-child(2){
    cursor: pointer;
  }
  .reload_div .re_ul li:nth-child(2):hover{
    transition: 1.5s;
    background: #60888D;
    color: #f5f5ff;
  }
  .reload_div .re_ul li:first-child{
    float: left;
  }
  .reload_div .re_ul li:nth-child(2){
    float: right;
    box-shadow: 10px 10px 5px #888888;
  }
  .td1{
    margin-top: 30px;
    max-height: 565px;
    overflow: auto;
  }
</style>









