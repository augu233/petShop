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
    }
}
</script>

<style scoped>
.wrap{
    margin-top: 92px;
    margin-bottom: 100px;
}
</style>
