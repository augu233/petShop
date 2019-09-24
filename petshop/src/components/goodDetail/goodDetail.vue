<template>
    <div class="allgoods" @click="detail(all)">
        <div class="goodimg"><img src="@/images/user.jpg" alt=""></div>
        <p class="alltitle">{{ all.title }}</p>
        <p class="price">￥{{ all.price }}</p>
    </div>
</template>

<script>
export default {
    name: 'goodDetail',
    data(){
        return{
           pics:[]
        }
    },
    props:['all'],
    components:{
        
    },
    created(){
        // this.$axios.get('').then(res=>{
        //     console.log(res);
        // })
    },
    methods:{
        detail(all){
        //    console.log(all)
            this.$router.push({path:'/goodslist',query:{all:all}});
        }
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
.allgoods{
    width: 375px;
    padding: 28px 0; 
    float: left;
}
.goodimg img{
    width: 350px;
    height: 350px;
}
.alltitle{
    font-size: 24px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    width:375px;
}
.price{
    font-size: 24px;
    color: #ff6700;
}
</style>
