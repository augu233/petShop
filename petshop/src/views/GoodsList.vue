<template>
  <div class="petorder">
    <petnavbar title="商品详情"></petnavbar>
    <!-- 轮播图 -->
    <div class="swiper">swiper</div>
    <div class="mes">
      <p class="firsttitle">{{goodself.title}}</p>
      <p class="ps">{{goodself.del}}</p>
      <div class="price-wrap">
        <div class="price">
          ￥&nbsp;{{goodself.price}}&nbsp;&nbsp;
          <span class="pricemore">原价 ￥{{goodself.old_price}}</span>
        </div>
        <div class="inventory">库存：{{goodself.repertory}}</div>
        <div class="sale">销量：{{goodself.sales}}</div>
      </div>
    </div>

    <div class="choose-wrap">
      <van-cell-group>
        <van-cell title="送至：" is-link />
        <van-cell title="已选：">
          <van-stepper
            class="stepper"
            min="0"
            :value="getGoodsQuantityById(goodself.id)"
            step="1"
            @change="onchange(goodself,$event)"
          />
        </van-cell>
      </van-cell-group>
    </div>

    <div class="evaluate">商品详情</div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="义卖首页" />
      <van-goods-action-icon icon="shop-o" text="分享" />
      <van-goods-action-button type="warning" text="查看购物车" @click="showPopup"/>
    </van-goods-action>
	<div class="cart">
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
        <goodCart></goodCart>
      </van-popup>
    </div>
  </div>
</template>

<script>
import goodCart from '@/components/goodCart/goodCart'
import { NavBar } from "vant";
import { Cell, CellGroup, Stepper,Popup } from "vant";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import petnavbar from "../components/PetNavbar/PetNavbar";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Stepper.name]: Stepper,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Popup.name]: Popup,
	petnavbar,
	goodCart
  },
  data() {
    return {
      value: 1,
	  goodself: [],
	  show: false,
	  goodsnum: 0,
    };
  },
  created() {
    this.goodself = this.$route.query.all;
    console.log(this.goodself);
  },
  methods: {
    onchange(item, quantity) {
		console.log(item,quantity)
		this.goodsnum = quantity
      this.$set(item, "quantity", quantity);
      this.$store.commit("PUT", item);
	},
	onclick(){

	},
	showPopup() {
      this.show = !this.show;
	}
  },
  computed: {
    getGoodsQuantityById() {
      return this.$store.getters.getGoodsQuantityById;
	},
	count(){
		console.log(this.$store.getters.count)
		return this.$store.getters.count

	}
  }
};
</script>

<style  scoped>
.swiper {
  width: 750px;
  height: 750px;
  background-color: red;
  margin-top: 92px;
}
.mes {
  padding: 20px;
  background-color: white;
}
.firsttitle {
  font-size: 30px;
}
.ps {
  font-size: 26px;
  color: rgb(121, 121, 121);
}
.price-wrap {
  overflow: hidden;
  margin-top: 50px;
}
.price,
.sale,
.inventory {
  font-size: 24px;
  line-height: 34px;
  height: 34px;
}
.sale,
.inventory {
  float: right;
  margin-left: 100px;
}
.price {
  float: left;
  font-size: 34px;
  color: red;
}
.pricemore {
  font-size: 24px;
  text-decoration: line-through;
  color: rgb(121, 121, 121);
}
.choose-wrap {
  margin: 20px 0;
}
.evaluate {
  background-color: white;
  font-size: 30px;
  margin-bottom: 100px;
  height: 1000px;
}
</style>