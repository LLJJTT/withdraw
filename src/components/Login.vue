<template>
	<div id="login">
		<div class="w_main login">
			<h2>Welcome</h2>	
			<form>
				<div class="form_tr">
					<i class="ico_uesr"></i><input  v-model="userName" type="number" placeholder="uesname" class="border" />
				</div>
				<div class="form_tr">
					<i class="ico_password"></i><input v-model="passWord" type="password" placeholder="password" class="border" />
				</div>
				<div class="form_tr">
					<input v-on:click="login" type="button" value="登录"  class="demok3_a"/>
				</div>
				<div class="form_tr">
					<a href="#">忘记密码？</a> 
				</div>
			</form>
		</div>
	</div>
</template>

<script>
  import axios from 'axios'
  import { getToken } from '../service/'
	export default{
		data () {
			return{
				userName:'',
				passWord:'',
				token:'',
			}
		},
		methods:{
			async login (){
				if (!this.userName) {
					this.$message.error('用户名不能为空');
          return false;
				}
				if(!this.passWord) {
					this.$message.error('密码不能为空');
          return false;
				}
				else {
          const params = {phone: 'userName',password:'passWord'};
          const res = await getToken(params);
          // ajax请求成功
          if (res && res.data) {
            this.$alert('登录成功这个时候存session，cookie啥的，完了跳index');
            this.$router.push('/index');
          }         
        }
					// axios.post('http://61.181.255.99/api/v1/login', {phone: 'userName',password:'passWord'})
					// .then(res => {
					// 	if (res.data.status==0) { 
					// 		alert(res.data.message);
					// 		this.token = res.data.data.token;
					// 		sessionStorage.setItem('token',this.token);
					// 		console.log(res.data.data.token);
					// 		console.log(this.userName);
					// 		console.log(this.passWord);

					// 		this.$router.push('/index')
					// 	}
					// 	else{
					// 		console.log(res.data);
					// 	}
					// })
				}
				
			}
		}
</script>

<style scoped>
*,*:before,*:after {box-sizing: border-box;outline: none;user-select: none;}
html,body {height: 100%; overflow: hidden;}


a {text-decoration: none;color: inherit;}
a:hover {text-decoration: none;}
a,
label,
button,
input,
select {-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
input,
select,
button {
  font: 100% tahoma, \5b8b\4f53, arial;
  vertical-align: baseline;
  border-radius: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
}
button::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner {border: none;}
input[type=checkbox],
input[type=radio] {vertical-align: middle;}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  margin: 0;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
textarea {
  outline: none;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  overflow: auto;
  resize: none;
  font: 100% tahoma, \5b8b\4f53, arial;
}
table {border-collapse: collapse;border-spacing: 0;}
#login{
	overflow-x: hidden;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	height: 100%;
	text-align: center;
}
.w_main{
	height: 100%;
}
.login {
	background: #2c2f3e;
}

.login h2 {
	font-weight: normal;
	margin-top: 5rem;
	margin-bottom: 1rem;
	color: #fff;
	font-size: 3rem;
	height: 4rem;
	display: block;
	font-family: "微软雅黑";
}

.form_tr {
	display: block;
	margin: 0 auto;
	padding: 10px 10%;
}

.form_tr input {
	width: 100%;
	height: 3rem;
	padding: 0.5rem;
	line-height: 2rem;
	position: relative;
	transition: all 0.30s ease-in-out;
	-webkit-transition: all 0.30s ease-in-out;
	-moz-transition: all 0.30s ease-in-out;
	border: #535763 1px solid;
	border-radius: 3rem;
	outline: none;
	font-size: 1rem;
	text-align: center;
	color: white;
}

.form_tr input:focus {
	box-shadow: 0 0 5px rgba(107, 111, 122, 1);
	-webkit-box-shadow: 0 0 5px rgba(107, 111, 122, 1);
	-moz-box-shadow: 0 0 5px rgba(107, 111, 122, 1);
}

.form_tr input.demok3_a {
	text-decoration: none;
	-webkit-transition: all linear 0.30s;
	-moz-transition: all linear 0.30s;
	transition: all linear 0.30s;
	background: rgba(39, 203, 192, 1);
	color: white;
	font: 1rem '微软雅黑';
	border: none;
}

.form_tr input.demok3_a:hover {
	background: #0db2a7;
}

.form_tr a {
	color: #676b77;
	font-size: .8rem;
}

.form_tr input::-webkit-input-placeholder {
	color: #fff;
}

.form_tr input::-moz-placeholder {
	color: #fff;
}

.form_tr input:-moz-placeholder {
	color: #fff;
}

.form_tr input:-ms-input-placeholder {
	color: #fff;
}

/***/

@media screen and (min-width: 960px) {
	.form_tr{padding: 10px 0; width: 400px;}
	.table-a{/*width: 900px; margin: 0 auto;*/ min-height: 600px;}
	.top_h{ height: 5rem;}
	i.his_l{height: 5rem;}
	.nav_h{ display:flex;height: 5rem; line-height:5rem;font-size: 2rem; text-align: left; font-family: "微软雅黑";}
}


</style>