<template>
    <div class="pet clf" @click="toOrder(list.id)">
        <div class="pic fl"><img :src="petspic[0]" alt=""></div>
        <div class="text fl">
            <p class="name">{{list.nick_name}}</p>
            <p class="message">{{list.des}}</p>
            <div class="tag">
                <span class="expelling" v-if="list.expelling == 1">已驱虫</span>
                <span class="sterilization" v-if="list.sterilization == 1">已绝育</span>
                <span class="vaccine" v-if="list.vaccine == 1">已免疫</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bottombar',
    props: {
        list: Object,
    },
    data(){
        return{
            petspic:[],
        }
    },
    methods:{
        toOrder(id){
            // console.log(this.list)
            // console.log(id)
            this.$router.push({name:'petorder', params:this.list})
		}
    },
    created(){
        if(this.list.pics){
            // console.log(this.list.pics)
            this.petspic = this.list.pics.split("&");
        }
        console.log(this.petspic)
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
    height: 250px;
    font-size: 36px;
    position: relative;

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
.tag{
    font-size: 24px;
    position: relative;
    bottom: -30px;
    left: 0;
}
span{
    display: inline-block;
    width: 100px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background-color: cyan;
    border-radius: 14px;
    color: white;
    margin: 0 10px;
}
.expelling{
    background-color: rgb(255, 176, 72);
}
.sterilization{
    background-color: rgb(69, 95, 212);
}
.vaccine{
    background-color: rgb(149, 233, 115);
}
</style>
