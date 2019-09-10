<template>
	<div class="home">
		<van-nav-bar title="首页" fixed/>
		<petSwipe/>
		<div class="pets-wrap">
			<template v-for="list in petsWrap">
				<Pets :key="list.id" :name=list.nick_name :message=list.des :sex=list.sex></Pets>
			</template>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import petSwipe from '@/components/petSwipe/petswipe'
import Pets from '@/components/Pets/Pets'
Vue.use(NavBar);
export default {
	components:{
		[NavBar.name]: NavBar,
		petSwipe,
		Pets,
	},
	data(){
		return{
			petsWrap: [],
		}
	},
	created(){
		this.$axios.get('/api/user/pets').then(res=>{
			// console.log(res.data);
			this.petsWrap = res.data;
		})
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
.pets-wrap{
	padding-bottom: 100px;
}
</style>