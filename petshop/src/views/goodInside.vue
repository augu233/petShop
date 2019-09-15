<template>
    <div>
        <van-nav-bar left-text="返回" title="商品详情" fixed :z-index="20" @click-left="onClickLeft"/>
        <h1>inside</h1>
    </div>
</template>

<script>
import Vue from "vue";
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
	},
	data(){
		return{
		}
	},
	created(){
       let goodId =  this.$route.query.id;
        console.log(goodId);
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
            console.log(1)
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