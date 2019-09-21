<template>
    <div class="pet clf" @click="toOrder(list.id)">
        <div class="pic fl"></div>
        <div class="text fl">
            <p class="name">{{list.nick_name}}</p>
            <p class="message">{{list.des}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bottombar',
    props: {
        list: Object,
    },
    methods:{
        toOrder(id){
            console.log(this.list)
            console.log(id)
			this.$router.push({name:'petorder', params:this.list})
		}
    }
}
</script>

<style scoped>
.fl{
    float: left;
}
.clf::after{
    content: '';
    display: block;
    clear: both;
}
.pet{
    width: 710px;
    padding: 10px 20px;
    background-color: white;
}
.pic{
    width: 250px;
    height: 250px;
    background-color: #ff6700;
    margin-right: 30px;
}
.text{
    width: 430px;
    font-size: 36px;
}
.message{
    font-size: 28px;
    color: rgb(110, 110, 110);
    line-height: 36px;
    height: 108px;
    max-width: 420px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
</style>
