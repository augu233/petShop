<template>
    <div class="Myrelease">
        <petnavbar title="我的发布"></petnavbar>
        <div class="wrap">
            你啥都没发布呢啊
        </div>
    </div>
</template>

<script>
import petnavbar from '../../components/PetNavbar/PetNavbar'

export default {
    name: 'Myrelease',
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
