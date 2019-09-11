<template>
	<div id="app">
		<header class="header"></header>
		<router-view/>
		<PetBottomBar></PetBottomBar>
	</div>
</template>
<script>
import PetBottomBar from './components/PetBottomBar/PetBottomBar'
export default {
	components: {
		PetBottomBar,
	},
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
