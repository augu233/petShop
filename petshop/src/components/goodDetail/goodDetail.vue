<template>
    <div>
        <div class="allgoods" @click="detail(all.id)">
            <div class="goodimg"><img :src="all.thumb" alt=""></div>
            <p class="alltitle">{{ all.title }}</p>
            <p class="price">￥{{ all.price }}</p>
        </div>
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
        detail(id){
           console.log(id)
            // this.$router.push({path:'/goodInside',query:{id:id}});
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
    font-size: 30px;
}
.price{
    font-size: 30px;
    color: #ff6700;
}
</style>
