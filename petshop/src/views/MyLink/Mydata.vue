<template>
    <div class="Mydata">
        <petnavbar title="个人资料"></petnavbar>
        <div class="wrap">
            你啥资料都没填呢啊
        </div>
    </div>
</template>

<script>
import petnavbar from '../../components/PetNavbar/PetNavbar'

export default {
    name: 'Mydata',
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
