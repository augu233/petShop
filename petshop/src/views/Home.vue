<template>
	<div class="home">
		<van-nav-bar title="首页"/>
		<petSwipe/>
	</div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import petSwipe from '@/components/petSwipe/petswipe'
Vue.use(NavBar);
export default {
	components:{
		[NavBar.name]: NavBar,
		petSwipe
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