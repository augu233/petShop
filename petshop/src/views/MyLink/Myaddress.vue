<template>
    <div class="Myaddress">
        <petnavbar title="我的收货地址"></petnavbar>
        <div class="wrap">
            你啥地址都没填呢啊
        </div>
    </div>
</template>

<script>
import petnavbar from '../../components/PetNavbar/PetNavbar'

export default {
    name: 'Myaddress',
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
