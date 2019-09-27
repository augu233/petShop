<template>
  <div class="eleCart">
      <div class="allgood">您一共添加了{{count}}个商品</div>
    <div v-for="goods in list" :key="goods.id" class="food-list-hook">
      <van-card
        :price="goods.price"
        :desc="goods.del"
        :title="goods.title"
        thumb=""
      />
      <van-stepper class="stepper" min="0" :value="goods.quantity" step="1" @change="onchange(goods, $event)"/>
    </div>
      <van-submit-bar
        :price="total*100"
        button-text="提交订单"
        @submit="onSubmit"
      />
  </div>
</template>

<script>
import { Card,Stepper,SubmitBar } from "vant";
export default {
  name: "goodCart",
  props: {},
  data() {
    return {
    };
  },
  components:{
      [Card.name]:Card,
      [Stepper.name]:Stepper,
      [SubmitBar.name]:SubmitBar
  },
  methods: {
       onchange(goods, quantity){
          // goods.quantity = quantity
          this.$set(goods, 'quantity', quantity)
          this.$store.commit('PUT', goods);
          
        },
        onSubmit(){
          console.log(1)
          this.$router.push('/buynow')
        }
  },
  computed: {
        list(){
            console.log(this.$store.state.list)
            return this.$store.state.list
        },
        count(){
          return this.$store.getters.count
        },
        total(){
          return this.$store.getters.total
        }
    },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.food-list-hook{
  position: relative;
}
.stepper{
  position: absolute;
  top: 7vw;
  right: 3vw;
}
.allgood{
  text-align: center;
  margin-bottom: 20px;
  padding: 8px 0;
  box-sizing: border-box;
  border-bottom: 1px rgb(161, 161, 161) solid;
}
</style>