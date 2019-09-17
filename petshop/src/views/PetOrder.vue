<template>
	<div class="petorder">
		<van-nav-bar title="宠物帮" fixed :z-index="20" left-arrow @click-left="onBack"/>
		<!-- 轮播图 -->
		<div class="swiper">
			swiper
		</div>

		<!-- 详细信息 -->
		<div class="message">
			<div class="tag-name">北京市的狗狗泰迪正在找家</div>
			<div class="mes-1">
				<p class="browse">浏览量：74</p>
				<p class="charm">魅力值：0</p>
				<p class="update">更新：2019-09-15 10:24:26</p>
			</div>
			<div class="mes-2">
				<p class="name">泰迪</p>
				<p class="sex">女孩</p>
				<p class="age">1个月</p>
				<p class="insect">未驱虫</p>
				<p class="sterilization">未绝育</p>
				<p class="immune">未免疫</p>
			</div>
			<div class="story">
				<div class="title">|&nbsp;&nbsp;TA的故事</div>
				<p>中秋节吃了晚饭带孩子去公园玩，长椅边上有个袋子，我看见袋子动了，一看是两只狗。仔细一看是两只泰迪，一只黑色，一只灰色。由于我家有4只猫。只能勉强留一只灰色，决定黑色送出。<br>黑色泰迪情况：应该一个月以上，下巴有一小块白毛，胸口有一块白毛，耳朵有咖色看不出来，未断尾，母</p>
			</div>
		</div>

		<!-- 领养条件 -->
		<div class="conditions">
			<div class="title">|&nbsp;&nbsp;领养条件</div>
			<ul>
				<li><p>仅限同城</p></li>
				<li><p>按时打疫苗</p></li>
				<li><p>不得遗弃、转让、贩卖、繁殖、虐待</p></li>
				<li><p>工作稳定，有一定的经济基础</p></li>
				<li><p>文明养宠，出门栓绳，科学喂养</p></li>
			</ul>
		</div>

		<!-- 联系送养人 -->
		<div class="contact">
			<div class="title">|&nbsp;&nbsp;联系送养人</div>
		</div>

		<!-- 提醒 -->
		<div class="remind">
			<div class="title">|&nbsp;&nbsp;提醒</div>
			<p>如果对方向您索要运费、治疗费等，切勿付款！请务必练习审核员chongwubang2014核实，以免被骗。</p>
		</div>

		<!-- 领养流程 -->
		<div class="process">
			<div class="title">|&nbsp;&nbsp;领养流程</div>
			<div class="pic"><img src="../images/process.jpg" alt=""></div>
		</div>

		<!-- 同城推荐，关注，评论 -->
		<div class="">
			<van-tabs v-model="active">
				<van-tab title="同城推荐">
					<template v-for="list in petsWrap">
						<Pets :key="list.id" :name=list.nick_name :message=list.des :sex=list.sex @click="toOrder(list.id)"></Pets>
					</template>
				</van-tab>
				<van-tab title="关注">
					<div class="tis">暂无关注</div>
				</van-tab>
				<van-tab title="评论">
					<div class="inp">
						<input type="text" placeholder="发表评论" @click="toComments">
					</div>
				</van-tab>
			</van-tabs>
		</div>

		<van-goods-action>
			<van-goods-action-icon icon="wap-home" text="返回首页" @click="toHome"/>
			<van-goods-action-icon icon="like-o" text="关注" />
			<van-goods-action-button color="#ff6700" type="danger" text="申请领养" />
		</van-goods-action>
	</div>
</template>

<script>
import { NavBar } from 'vant';
import { Tab, Tabs } from 'vant';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
import Pets from '@/components/Pets/Pets'

export default {
	components:{
		[NavBar.name]: NavBar,
		[Tab.name]: Tab,
		[Tabs.name]: Tabs,
		[GoodsAction.name]: GoodsAction,
		[GoodsActionIcon.name]: GoodsActionIcon,
		[GoodsActionButton.name]: GoodsActionButton,
		Pets
	},
	data() {
		return {
			active: 0,
			petsWrap: [],
		};
	},
	created(){
		this.$axios.get('/api/user/pets').then(res=>{
			// console.log(res.data);
			this.petsWrap = res.data;
		})
	},
	methods:{
		toComments(){
			// console.log('toComments')
			this.$router.push('/comments')
		},
		toHome(){
			this.$router.push('/')
		},
		onBack(){
			this.$router.go(-1);
		}
	}
  
}
</script>

<style  scoped>

.van-nav-bar{
	background-color: #ff6700;
}
.van-nav-bar__title{
	color: white;
}
.van-goods-action{
	z-index: 50;
}
.petorder{
	padding-top: 92px;
	padding-bottom: 100px;
}
.swiper{
	width: 750px;
	height: 750px;
	background-color: red;
}
.message, .conditions, .contact, .remind, .process{
	padding: 20px;
	background-color: white;
}
.conditions, .contact, .remind, .process{
	margin-top: 30px;
}
.title{
	color: #ff6700;
	height: 40px;
	line-height: 40px;
	font-size: 26px;
	margin-bottom: 20px;
}
.tag-name{
	font-size: 40px;
	height: 50px;
	line-height: 50px;
}
.mes-1{
	font-size: 20px;
	display: flex;
	justify-content: center;
}
.mes-1 p{
	padding: 50px 15px;
	color: #9e9e9e;
}
.mes-2{
	box-shadow:2px 2px 10px #636363;
	border-radius: 10px;
	display: flex;
	flex-wrap: wrap;
}
.mes-2 p{
	width: 150px;
	font-size: 30px;
	padding-left: 80px;
	height: 60px;
	line-height: 60px;
}
.story{
	margin-top: 20px;
}
p{
	font-size: 24px;
	line-height: 40px;
	color: #2b2b2b;
}
.conditions ul li{
	/* list-style: disc; */
}
.pic img{
	width: 690px;
}
.tis{
	padding-top: 50px;
	background-color: white;
	text-align: center;
	font-size: 30px;
	color: #636363;
	line-height: 50px;
}
.inp{
	width: 750px;
	background-color: white;
}
.inp input{
	height: 50px;
	width: 630px;
	font-size: 30px;
}
</style>