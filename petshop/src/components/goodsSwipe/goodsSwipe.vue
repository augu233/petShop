<template>
    <div class="goodswipe">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in pics" :key="item.id"><img :src="item.url" alt=""></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import api from '@/api/data.json'
Vue.use(Swipe).use(SwipeItem);
export default {
    data(){
        return{
            pics:[]
        }
    },
    name: 'goodsSwipe',
    props: {
        
    },
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem
    },
    created(){
        this.pics = api;
        // this.$axios.get('').then(res=>{
        //     console.log(res);
        // })
    }
}
</script>

<style scoped>
.goodswipe{
    padding-top: 88px;
}
.goodswipe img{
    width: 100vw;
    height: 300px;
}
</style>
