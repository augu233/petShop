<template>
  <div class="sell">
    <van-nav-bar title="义卖" fixed :z-index="20" />
    <goodsSwipe />
	<div class="goods-search">
		<form action="/">
		<van-search
			v-model="value"
			placeholder="请输入搜索关键词"
			@focus="onSearch"
		/>
		</form>
	</div>
	<div class="goods-class">
		<goodsClass/>
	</div>
	<div class="gooddetail clearfix" v-for="item in pics" :key="item.id">
		<div class="cardhead">
			<p>"	{{ item.title }}	"</p>
		</div>
		<template v-for="(all,index) in item.goods">
			<goodDetail :all = "all" :key="index"/>
		</template>
	</div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar,Search } from "vant";
import goodsSwipe from "@/components/goodsSwipe/goodsSwipe";
import goodsClass from "@/components/goodClass/goodClass";
import goodDetail from "@/components/goodDetail/goodDetail";
import api from '@/api/goods.json'

Vue.use(NavBar).use(Search);
export default {
  data(){
	  return{
		  value:'',
		  pics:[]
	  }
  },
  components: {
	[NavBar.name]: NavBar,
	[Search.name]: Search,
	goodsSwipe,
	goodsClass,
	goodDetail
  },
  methods:{
	  onSearch(){
		  this.$router.push('/search')
	  }
  },
  created(){
        this.pics = api;
        // this.$axios.get('').then(res=>{
        //     console.log(res);
        // })
    }
};
</script>

<style  scoped>
.van-nav-bar {
  background-color: #ff6700;
}
.van-nav-bar__title {
  color: white;
}
.gooddetail{
	width: 750px;
	margin-bottom:100px;
	background-color: #fff;
}
.cardhead{
	width: 750px;
	text-align: center;
	height: 100px;
	font-size:40px;
	color: #ff6700;
}
.goods-search{
	margin: 30px 0;
}
.goods-class{
	margin-bottom: 40px;

}
.cardhead p{
	line-height: 100px;
}
.clearfix::after{
	content: "";
	clear: both;
	display: block;
}
</style>