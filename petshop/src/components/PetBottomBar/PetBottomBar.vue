<template>
    <div class="bottombar">
        <BarList mark="/" title="首页"><van-icon name="home-o" /></BarList>
        <BarList mark="/release" title="发布"><van-icon name="share" /></BarList>
        <BarList mark="/sell" title="义卖"><van-icon name="bag-o" /></BarList>
        <BarList mark="/mine" title="我的"><van-icon name="contact" /></BarList>
    </div>
</template>

<script>
import BarList from './BarList';
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
    name: 'bottombar',
    components:{
        BarList,
        [Icon.name]: Icon,
    },
    props: {
        msg: String
    },
}
</script>

<style scoped>
.bottombar{
    border-top: 1px solid #ccc;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
}
</style>
