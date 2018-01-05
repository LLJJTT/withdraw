<template>
	<div id="head">
		<h1>
			<ul>
				<img src="../../static/img/account.png" alt="#" title="logo">
			</ul>
		</h1>
		<h2>资金管理平台</h2>
		<h6><img src="../../static/img/family.png" alt="">亿家人电子科技</h6>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="scss" scoped>
	#head{
		background:#313291;
		height:80px;
		h1{
			display:inline-block;
			width:180px;
			height:80px;
			line-height:80px;
			float:left;
			border-right:1px solid #aaa;
			ul{
				padding-left:5%;
				border-bottom:1px solid #fff;
				img{
					padding-left: 5%;
					display:inline-block;
					width:30px;
					height:30px;
					vertical-align:middle;
					padding:20px;
				}
				img:hover{
					background: #5F578F;
					cursor:pointer;
				}
			}
		}
		h2{
			display:inline-block;
			width:180px;
			height:80px;
			line-height:80px;
			float:left;
			color:#fff;
			font-size:20px;
			font-weight:bold;
		}
		h6{
			color:#fff;
			display:inline-block;
			float:right;
			height:80px;
			line-height:80px;
			padding-right:60px;
			img{
				display:inline-block;
				width:20px;
				height:20px;
				vertical-align:middle;
				margin-top:-5px;
				margin-right:6px;
			}
		}
	}

</style>