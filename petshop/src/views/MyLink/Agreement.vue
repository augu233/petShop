<template>
    <div class="Agreement">
        <petnavbar title="领养协议"></petnavbar>
        <div class="wrap">
            我啥也不知道啊
        </div>
    </div>
</template>

<script>
import petnavbar from '../../components/PetNavbar/PetNavbar'

export default {
    name: 'Agreement',
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
