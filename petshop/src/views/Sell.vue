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
	<div class="gooddetail clearfix">
		<div class="cardhead">
			<p>"公益义卖"</p>
		</div>
		<template v-for="(all,index) in goods">
			<goodDetail v-if="all.good_classifie_id == 1" :all = "all" :key="index"/>
		</template>
	</div>

	<div class="gooddetail clearfix">
		<div class="cardhead">
			<p>"狗粮"</p>
		</div>
		<template v-for="(all,index) in goods">
			<goodDetail v-if="all.good_classifie_id == 2" :all = "all" :key="index"/>
		</template>
	</div>

	<div class="gooddetail clearfix">
		<div class="cardhead">
			<p>"猫粮"</p>
		</div>
		<template v-for="(all,index) in goods">
			<goodDetail v-if="all.good_classifie_id == 3" :all = "all" :key="index"/>
		</template>
	</div>

	<div class="gooddetail clearfix">
		<div class="cardhead">
			<p>"零食罐头"</p>
		</div>
		<template v-for="(all,index) in goods">
			<goodDetail v-if="all.good_classifie_id == 4" :all = "all" :key="index"/>
		</template>
	</div>

	<div class="gooddetail clearfix">
		<div class="cardhead">
			<p>"驱虫保健"</p>
		</div>
		<template v-for="(all,index) in goods">
			<goodDetail v-if="all.good_classifie_id == 5" :all = "all" :key="index"/>
		</template>
	</div>

	<div class="gooddetail clearfix">
		<div class="cardhead">
			<p>"清洁洗护"</p>
		</div>
		<template v-for="(all,index) in goods">
			<goodDetail v-if="all.good_classifie_id == 6" :all = "all" :key="index"/>
		</template>
	</div>

	<div class="gooddetail clearfix">
		<div class="cardhead">
			<p>"日常用品"</p>
		</div>
		<template v-for="(all,index) in goods">
			<goodDetail v-if="all.good_classifie_id == 7" :all = "all" :key="index"/>
		</template>
	</div>

	<div class="gooddetail clearfix">
		<div class="cardhead">
			<p>"玩具周彪"</p>
		</div>
		<template v-for="(all,index) in goods">
			<goodDetail v-if="all.good_classifie_id == 8" :all = "all" :key="index"/>
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
		  goods:[],
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
        this.$axios.get('/api/good/goods').then(res=>{
			this.goods = res.data
            console.log(res);
        })
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