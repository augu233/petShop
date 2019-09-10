<template>
    <router-link class="list" tag="li" :to=mark ><slot/>{{title}}</router-link>
</template>

<script>
export default {
    name: 'bottombar',
    props: {
        title: String,
        mark: String,
    },
}
</script>

<style scoped>
.list{
    width: 187.5px;
    text-align: center;
    height: 99px;
    font-size: 28px;
    line-height: 99px;
}
.router-link-exact-active{
    color: #ff6700;
}
</style>
