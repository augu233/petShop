<template>
  <div>
    <div class="page" >
      <van-nav-bar title="立即购买" left-arrow @click-left="onBack" fixed :z-index="20"/>
      <div class="title">
        <div class="address">
          <van-cell title="地址选择" is-link value="内容" label="描述信息" @click="toChooseAddress" />
        </div>
        <div class="time">
          <van-cell title="立即送出" is-link value="大约多久送达" />
        </div>
        <div class="pay">
          <van-cell title="支付方式" is-link value="支付宝" />
        </div>
      </div>
      <div class="cartlist clearfix">
        <div v-for="goods in list" :key="goods.id" class="food-list-hook">
          <van-card class="goodslist"
            :price="goods.price"
            :desc="goods.del"
            :title="goods.title"
            thumb=""
          />
          <input type="button" class="stepper" min="0" :value="`X${goods.quantity}`"/>
        </div>
        <div class="total">小计 <b>￥{{total}}</b></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Card,Cell,NavBar } from "vant";
export default {
  name: "buynow",
  data() {
    return {};
  },
  props: {},

  computed: {
        list(){
            return this.$store.state.list
        },
        total(){
          return this.$store.getters.total
        }
    },
  methods: {
    back() {
      this.$router.go(-1);
    },
      toChooseAddress(){
          this.$router.push('/myaddress')
      },
      onBack() {
      this.$router.go(-1);
    }
  },
  created() {},
  components: {
    [Card.name]:Card,
    [Cell.name]:Cell,
    [NavBar.name]:NavBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.van-nav-bar{
	background-color: #ff6700;
  margin-bottom: 100px;
}
.van-nav-bar__title{
	color: white;
}
.page {
  padding: 0 3vw;
  background: linear-gradient(to bottom, #ff6700 20%, rgb(245, 245, 245));
}
.page-p{
    display: inline-block;
    margin-left: 38vw;
  text-align: center;
    line-height: 50px;
    font-size: 4vw;
    color: white;
}
.back{
    color: white;
    font-size: 4vw;
}
.cartlist input{
    background:none;  
    outline:none;  
    border:none;
    font-size:30px;
}
.title{
    margin-bottom: 5vw;
    margin-top: 90px;
}
.address{
    background-color: #fff;
    padding: 2vw 0;
}
.pay{
    background-color: #fff;
    padding: 2vw 0;
}
.time{
    background-color: #fff;
    padding: 2vw 0;
}
.ordertext{
    background-color: #fff;
    padding: 2vw 0;
}
.person{
    background-color: #fff;
    padding: 2vw 0;
}
.date{
    background-color: #fff;
    padding: 2vw 0;
}
.total{
    margin: 3vw 0;
}
.goodslist{
    margin-bottom: 2vw;
  padding:1vw 0;
  box-sizing: border-box;
}
.food-list-hook{
  position: relative;
}
.stepper{
  position: absolute;
  top: 7vw;
  right: 3vw;
}

.clearfix::after{
    content: "";
    clear: both;
}
.all-total{
    height:40px;
    width: 100%;
    background-color: rgb(49, 49, 49);
    display: flex;
    flex-flow: row nowrap;
    position: fixed;
    bottom: 0;
}
.price{
    color: white;
    flex-grow: 8;
}
.pay-ok{
    flex-grow: 2;
    background-color: rgb(68, 193, 202);
}
.pay-ok span{
    color: white
}
.footer{
    margin-bottom: 50px;
}
</style>
