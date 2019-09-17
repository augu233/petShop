<template>
	<div class="release">
		<div class="header">
            <van-nav-bar title="商品列表" left-arrow @click-left="onBack" />
        </div>
		
	</div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);
export default {
    data () {
        return {
            goodclude:[]
        }
    },
	components:{
		[NavBar.name]: NavBar,
    },
    methods: {
        onBack(){
            this.$router.go(-1);
        }
    },
    created () {
        let goodid = this.$route.query.id;
        console.log(goodid)
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