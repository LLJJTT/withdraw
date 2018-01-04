<template>
	<div class="securitystrategy">
		<div class="wrapper">
			<ul>
				<li class="first_li">
					<span class="name">每笔最大提现金额:</span><input class="num" type="text" value="500"><i>元</i>
					<div style="clear:both"></div>
				</li>
				<li class="second_li">
					<span class="name">大额提现截留:</span><input class="num" type="text" value="2000"><i>元</i>
					<div style="clear:both"></div>
				</li>
				<li class="third_li">
					<span class="name">每日最大提现次数:</span><input class="num" type="text" value="100"><i>次</i>
					<div style="clear:both"></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped> 
	.securitystrategy{
		width: 80%;
		float: left;
		position: relative;
		margin-left: -200px;
	}
	.wrapper{
		margin-top: 15px;
		border-radius: 10px;
		background: #e6e6e6;
		color: #201d1d;
		font-weight: bold;
		font-size: 18px;
		padding: 100px 50px;
	}
	.wrapper li{
		width: 90%;
		margin: 0 auto;
		display: block;
		padding-bottom:20px;
		border-bottom: 1px solid #bcb5b5;
	}
	.wrapper li:nth-child(2),li:nth-child(3){
		margin-top: 50px;
	}
	.name{
		float: left;
		margin-left: 100px; 
		text-align: left;
	}
	.num{
		display: inline-block;
		border: none;
		box-shadow: none;
		width: 10%;
		background: #556833;
		color: #fff;
		font-size: 15px;
		font-weight: bold;
		padding: 2px;
		text-align: center;
	}
	.suff{
		background: #ff0;
	}
</style>
