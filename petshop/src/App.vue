<template>
	<div id="app">
		<header class="header"></header>
		<router-view/>
		<PetBottomBar v-if="isShow"></PetBottomBar>
	</div>
</template>
<script>
import PetBottomBar from './components/PetBottomBar/PetBottomBar'
export default {
	components: {
		PetBottomBar,
	},
	computed: {
		isShow(){
			let hideList = ["petorder","comments","register","login","goodslist","addaddress"];
			if(hideList.indexOf(this.$route.name) != -1){
				return false;
			}else{
				return true;
			}
		}
	}
}
</script>
<style>
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
body{
	background-color: rgb(238, 238, 238);
}
</style>
