<template>
	<div class="home">
		<van-nav-bar title="首页" fixed :z-index="20"/>
		<petSwipe/>
		<div class="pets-wrap">
			<template v-for="list in petsWrap">
				<Pets :key="list.id" :list="list"></Pets>
			</template>
			<button type="button" @click="onclick">jiazaigengduo</button>
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
			page: 1
		}
	},
	created(){
		// this.$axios.get('/api/user/pets').then(res=>{
		// 	console.log(res.data);
		// 	this.petsWrap = res.data.data;
			
		// })
		// this.$axios.get( "/api/user/pets?page="+this.page).then(res=>{
		// 	//console.log(res.data);
		// 	// [...this.venues,...res.data.data]
		// 	this.venues = this.venues.concat(res.data.data); 
		// 	this.page++;
		// });
	},
	mounted(){
		this.getData()
	},
	methods:{
		getData(){
			console.log(this.page)
			this.$axios.get( "/api/user/pets?page="+this.page).then(res=>{
				console.log(res.data.data);
				// [...this.venues,...res.data.data]
				this.petsWrap = this.petsWrap.concat(res.data.data); 


				this.page++;
			});
		},
		onclick(){
			this.getData()
		}
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