import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    user:{},
    list: []
  },
  mutations: {
    //添加商品
    PUT(state, goods){
      // this指向store，如果商品数量等于0，调用删除函数
      if (goods.quantity == 0) {
          this.commit('DEL', goods)
          return
      }
      for (const item of state.list) {
          //如果购物车的id等与商品的id
          if (item.id == goods.id) {
              //则把商品的数量赋值给购物车里面的商品的数量
              item.quantity = goods.quantity;
              return
          }
      }
      state.list.push(goods)
  },
  DEL(state, goods){
      for (let i = 0; i < state.list.length; i++) {
          const item = state.list[i];
          if (item.id == goods.id) {
              state.list.splice(i, 1)
              return
          }
      }
  },
    SET_TOKEN(state,user){
      state.token = user.api_token;
      state.user = user;
      localStorage.setItem("token",user.api_token);
      localStorage.setItem("user",JSON.stringify(user));
      localStorage.setItem("loginTime",new Date().getTime());
    },
    CLEAR_TOKEN(state){
        state.token = "";
        state.user = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
  },
  getters:{
    length(state){
      return state.list.length
    },
    count(state){
      let count = 0;
      for (const item of state.list) {
        count += item.quantity;
      }
      return count
    },
    total(state){
      let total = 0;
      for(const item of state.list){
        total += item.price*item.quantity;
      }
      return total;
    },
    getGoodsById(state){
      return (id)=>{
        for (const item of state.list) {
          if(item.id == id)
            return item
        }
        return null
      }
    },
    getGoodsQuantityById(state){
      return (id)=>{
        for (const item of state.list) {
          if(item.id == id)
            return item.quantity
        }
        return 0
      }
    }
  },
  actions: {

  }
})
