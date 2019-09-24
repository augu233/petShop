<template>
	<div class="home">
		<van-nav-bar title="首页" fixed :z-index="20"/>
		<petSwipe/>
		<div class="pets-wrap">
			<template v-for="list in petsWrap">
				<Pets :key="list.id" :list="list"></Pets>
			</template>
			<!-- <button type="button" @click="onclick">jiazaigengduo</button> -->
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
	methods:{
		getData(){
			// console.log(this.page)
			this.$axios.get( "/api/user/pets?page="+this.page).then(res=>{
				// console.log(res.data.data);
				// [...this.venues,...res.data.data]
				this.petsWrap = this.petsWrap.concat(res.data.data); 


				this.page++;
			});
		},
		// onclick(){
		// 	this.getData()
		// 	this.getDocumentTop()
		// 	this.getWindowHeight()
		// 	this.getScrollHeight()
		// },
		getDocumentTop() {
			var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
			if (document.body) {
				bodyScrollTop = document.body.scrollTop;
			}
			if (document.documentElement) {
				documentScrollTop = document.documentElement.scrollTop;
			}
			scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
			return scrollTop;
		},
		getWindowHeight() {
			var windowHeight = 0;
			if (document.compatMode == "CSS1Compat") {
				windowHeight = document.documentElement.clientHeight;
			} else {
				windowHeight = document.body.clientHeight;
			}
			return windowHeight;
		},
		getScrollHeight() {
			var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
			if (document.body) {
				bodyScrollHeight = document.body.scrollHeight;
			}

			if (document.documentElement) {
				documentScrollHeight = document.documentElement.scrollHeight;
			}
			scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
			return scrollHeight;
		},
		onscroll() {
			if (this.getScrollHeight() == this.getWindowHeight() + this.getDocumentTop()) {
				//当滚动条到底时,这里是触发内容
				//异步请求数据,局部刷新dom
				// console.log(1)
				this.getData();
			}
		}
	},
	mounted() {
		this.getData()
        window.addEventListener('scroll', this.onscroll);
    },
    destroyed(){
        window.removeEventListener('scroll', this.onscroll);
    },
  
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