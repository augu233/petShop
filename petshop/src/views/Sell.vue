<template>
	<div class="sell">
		<van-nav-bar title="义卖" fixed/>
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
</style>