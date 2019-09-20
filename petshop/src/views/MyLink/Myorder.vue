<template>
    <div class="Myorder">
        <petnavbar title="我的订单"></petnavbar>
        <div class="wrap">
            你啥都没订呢啊
        </div>
    </div>
</template>

<script>
import petnavbar from '../../components/PetNavbar/PetNavbar'

export default {
    name: 'Myorder',
    components:{
        petnavbar,
    }
}
</script>

<style scoped>
.wrap{
    margin-top: 92px;
    margin-bottom: 100px;
}
</style>
