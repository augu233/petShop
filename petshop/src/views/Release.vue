<template>
	<div class="release">
		<van-nav-bar title="发布" fixed :z-index="20"/>
		<div class="wrap">
			<div class="picbtn"><img src="../images/img_1.png" alt="" srcset=""></div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {
	components:{
		[NavBar.name]: NavBar,
	}
  
}
</script>

<style  scoped>

.van-nav-bar{
	background-color: #ff6700;
}
.van-nav-bar__title{
	color: white;
}
.wrap{
	padding: 100px 50px;
	width: 650px;
}
.picbtn{
	width: 650px;
}
.picbtn img{
	width: 100%;
	/* box-shadow: darkgrey 10px 10px 30px 5px ; */
}
</style>