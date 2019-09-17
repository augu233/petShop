<template>
	<div class="petorder">
		<petnavbar title="商品详情"></petnavbar>
		<!-- 轮播图 -->
		<div class="swiper">
			swiper
		</div>
		<div class="mes">
			<p class="firsttitle">RedDog红狗营养膏120g（猫狗通用）</p>
			<p class="ps">销售额10%用于流浪动物救助</p>
			<div class="price-wrap">
				<div class="price">￥&nbsp;65&nbsp;&nbsp;<span class="pricemore">原价 ￥160</span></div>
				<div class="inventory">库存：969</div>
				<div class="sale">销量：31</div>
			</div>
		</div>

		<div class="choose-wrap">
			<van-cell-group>
				<van-cell title="送至：" is-link  />
				<van-cell title="已选："  ><van-stepper v-model="value" /></van-cell>
			</van-cell-group>
		</div>

		<div class="evaluate">商品详情</div>


		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="义卖首页" />
			<van-goods-action-icon icon="cart-o" text="购物车" />
			<van-goods-action-icon icon="shop-o" text="分享" />
			<van-goods-action-button type="warning" text="加入购物车" />
		</van-goods-action>
	</div>
</template>

<script>
import { NavBar } from 'vant';
import { Cell, CellGroup, Stepper  } from 'vant';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
import petnavbar from '../components/PetNavbar/PetNavbar'

export default {
	components:{
		[NavBar.name]: NavBar,
		[Cell.name]: Cell,
		[CellGroup.name]: CellGroup,
		[Stepper.name]: Stepper,
		[GoodsAction.name]: GoodsAction,
		[GoodsActionIcon.name]: GoodsActionIcon,
		[GoodsActionButton.name]: GoodsActionButton,
		petnavbar,
	},
	data() {
		return {
			value: 1,
		};
	},
	created(){

	},
	methods:{
	}
  
}
</script>

<style  scoped>
.swiper{
	width: 750px;
	height: 750px;
	background-color: red;
	margin-top: 92px;
}
.mes{
	padding: 20px;
	background-color: white;
}
.firsttitle{
	font-size: 30px;
}
.ps{
	font-size: 26px;
	color: rgb(121, 121, 121);
}
.price-wrap{
	overflow: hidden;
	margin-top: 50px;
}
.price, .sale, .inventory{
	font-size: 24px;
	line-height: 34px;
	height: 34px;
}
.sale, .inventory{
	float: right;
	margin-left: 100px;
}
.price{
	float: left;
	font-size: 34px;
	color: red;
}
.pricemore{
	font-size: 24px;
	text-decoration: line-through;
	color: rgb(121, 121, 121);
}
.choose-wrap{
	margin: 20px 0;
}
.evaluate{
	background-color: white;
	font-size: 30px;
	margin-bottom: 100px;
	height: 1000px;
}
</style>