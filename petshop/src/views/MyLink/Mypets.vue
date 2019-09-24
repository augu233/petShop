<template>
    <div class="Mypets">
        <petnavbar title="我的领养"></petnavbar>
        <div class="wrap">
            你啥都没领养呢啊
        </div>
    </div>
</template>

<script>
import petnavbar from '../../components/PetNavbar/PetNavbar'

export default {
    name: 'Mypets',
    components:{
        petnavbar,
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
