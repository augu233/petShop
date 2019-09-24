<template>
    <div class="Myfocus">
        <petnavbar title="我的关注"></petnavbar>
        <div class="wrap">
            你啥都没关注呢啊
        </div>
    </div>
</template>

<script>
import petnavbar from '../../components/PetNavbar/PetNavbar'

export default {
    name: 'Myfocus',
    components:{
        petnavbar,
    },
    created(){
        this.$axios.post('/api/user/my_like').then(res=>{
            console.log(res.data)
        })
    }
}
</script>

<style scoped>
.wrap{
    margin-top: 92px;
    margin-bottom: 100px;
    text-align: center;
    padding-top: 50px;
}
</style>
