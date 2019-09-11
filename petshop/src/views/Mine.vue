<template>
	<div class="mine">
		<van-nav-bar title="我的" fixed :z-index="20"/>
		<div class="user-mes">
			<div class="mo"></div>
			<div class="wrap">
				<div class="toast">本中心已成功送养了&nbsp;<span class="ff6700">17962</span>&nbsp;只宠物！</div>
				<div class="user">
					<div class="pic"><img src="../images/user.jpg" alt=""></div>
					<div class="name">好的名字可以让你的朋友更容易记住你</div>
					<ul>
						<li class="money">
							<div>0</div>
							<p>余额</p>
						</li>
						<li class="love">
							<div>0</div>
							<p>爱心值</p>
						</li>
						<li class="mes">
							<div>0</div>
							<p>我的消息</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mine">
			<van-cell title="我的助养" icon="like-o">
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
			<van-cell title="我的领养" icon="flag-o">
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
			<van-cell title="我的关注" icon="star-o">
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
			<van-cell title="我的订单" icon="orders-o">
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
			<van-cell title="我的收货地址" icon="location-o">
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
		</div>
		<div class="myrelease">
			<van-cell title="我发布的送养" icon="like-o">
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
			<van-cell title="我发布的寻宠" icon="flag-o">
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
			<van-cell title="我发布的助养" icon="star-o">
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
		</div>
		<div class="mymessage">
			<van-cell title="个人资料" icon="like-o">
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
			<van-cell title="基地管理" icon="apps-o">
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
			<van-cell title="领养协议" icon="notes-o">
                <van-icon slot="right-icon" name="arrow" style="line-height: inherit;"/>
            </van-cell>
		</div>
		<footer>
			<p>客服微信：<span class="ff6700">123123123123</span></p>
			<p>工作时间：周一至周五9:00-18:00</p>
			<h3>让每一个流浪毛孩都有家</h3>
		</footer>
	</div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Cell, CellGroup, Icon } from 'vant';

Vue.use(NavBar);
export default {
	components:{
		[NavBar.name]: NavBar,
		[Cell.name]: Cell,
		[CellGroup.name]: CellGroup,
		[Icon.name]: Icon,
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
.user-mes{
	margin-top: 92px;
	background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568198273861&di=fcf8f023f9c64d3473367eeabe053aa9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0389546581966bca84a0d304fbbd1b0.jpg") no-repeat center;
	width: 750px;
	height: 400px;
	overflow: hidden;
	background-blend-mode: lighten;
	position: relative;
	color: white;
	font-size: 24px;
}
.mo{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 1;
}
.wrap{
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
}
.toast{
	position: absolute;
	top: 0;
	left: 0;
	z-index: 11;
	width: 650px;
	height: 50px;
	padding: 0 50px;
	background-color: rgba(0, 0, 0, 0.4);
	line-height: 50px;
	font-size: 24px;
}
.ff6700{
	color: #ff6700;
}
.pic{
	width: 120px;
	height: 120px;
	margin: 90px auto 10px auto;
	overflow: hidden;
	border-radius: 50%;
}
.pic img{
	width: 100%;
	height: 100%;
}
.name{
	font-size: 30px;
	width: 750px;
	height: 50px;
	line-height: 50px;
	text-align: center;
}
.user ul li{
	display: inline-block;
	width: 250px;
	height: 130px;
	text-align: center;
	padding-top: 30px;
}
.user ul li div{
	font-size: 40px;
}
.van-cell{
	padding: 6px 16px;
	font-size: 12px;
}
.mine, .myrelease, .mymessage{
	margin-top: 15px;
}
footer{
	font-size: 24px;
	width: 750px;
	height: 200px;
	margin-bottom: 100px;
	margin-top: 15px;
	text-align: center;
}
footer p{
	height: 40px;
	line-height: 40px;
}
footer h3{
	height: 120px;
	line-height: 120px;
	font-size: 30px;
	color: #a1a1a1;
	font-weight: 400;
}
</style>