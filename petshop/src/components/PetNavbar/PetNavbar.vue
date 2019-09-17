<template>
    <div class="navbar">
        <van-nav-bar left-text="返回" :title="title" left-arrow fixed :z-index="20" @click-left="onClickLeft"/>
    </div>
</template>

<script>
import { NavBar } from 'vant';

export default {
    components:{
        [NavBar.name]: NavBar,
    },
    props:{
        title: String,
    },
    
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
    }
}
</script>
<style scoped>

.van-nav-bar{
	background-color: #ff6700;
}
.van-nav-bar__title{
	color: white;
}
.van-nav-bar .van-icon {
    color: white;
}
.van-nav-bar__text {
    color: white;
}
</style>