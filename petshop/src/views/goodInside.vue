<template>
    <div>
        <petnavbar title="商品详情"></petnavbar>
        <h1>inside</h1>
    </div>
</template>

<script>
import Vue from "vue";
import petnavbar from '../components/PetNavbar/PetNavbar'

import { NavBar } from "vant";
Vue.use(NavBar);
export default {
    name:'goodInside',
    data(){
        return{

        }
    },
	components:{
        [NavBar.name]: NavBar,
		petnavbar,

	},
	data(){
		return{
		}
	},
	created(){
       let goodId =  this.$route.query.id;
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
    }
  
}
</script>

<style  scoped>
.van-nav-bar {
  background-color: #ff6700;
}
.van-nav-bar__title {
  color: white;
}
</style>