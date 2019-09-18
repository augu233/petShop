<template>
  <div class="release">
    <van-nav-bar title="发布送养" fixed :z-index="20" />
    <div class="wrap">
      <div class="upload-img">
        <van-uploader :after-read="afterRead" />
        <p>添加图片</p>
      </div>
      <div class="group">
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <van-cell-group>
          <van-field
            v-model="addgroup.petname"
            required
            clearable
            label="昵称"
            placeholder="宠物昵称(限五个字符)"
            maxlength="5"
          />
          <van-cell title="种类" :value="addgroup.petType" @click="changeType" />
          <van-switch-cell active-color="#ff6700" v-model="addgroup.changeAge" title="年龄" />
          <van-switch-cell active-color="#ff6700" v-model="addgroup.changeSex" title="性别" />
          <van-switch-cell active-color="#ff6700" v-model="addgroup.changeMed" title="是否注射疫苗" />
          <van-switch-cell active-color="#ff6700" v-model="addgroup.changeMan" title="是否绝育" />
          <van-switch-cell active-color="#ff6700" v-model="addgroup.changeBug" title="是否驱虫" />
          <van-switch-cell active-color="#ff6700" v-model="addgroup.changeFree" title="是否免费" />
		<van-field
			v-model="addgroup.message"
			label="留言"
			type="textarea"
			placeholder="请输入留言"
			rows="1"
			autosize
		/>
		<van-field
            v-model="addgroup.mastername"
            required
            clearable
            label="姓名"
            placeholder="请输入姓名"
            maxlength="5"
          />
		  <van-field
            v-model="addgroup.selfphone"
            required
            clearable
            label="手机号"
            placeholder="请输入手机号"
            maxlength="11"
          />
		  <van-field
            v-model="addgroup.wechat"
            required
            clearable
            label="微信"
            placeholder="请输入微信"
          />
          <van-switch-cell active-color="#ff6700" v-model="addgroup.outphone" title="是否显示电话号码" />
          <van-switch-cell active-color="#ff6700" v-model="addgroup.outwechat" title="是否显示微信" />
        </van-cell-group>
      </div>
      <div class="sub">
        <van-button type="warning" size="large" @click="submit">警告按钮</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  NavBar,
  Uploader,
  Field,
  CellGroup,
  Cell,
  ActionSheet,
  Toast,
  SwitchCell,
  Button
} from "vant";

export default {
  data() {
    return {
      addgroup: {
        petname: "",
        petType: "选择宠物类型",
        changeAge: true,
        changeSex: true,
        changeMed: true,
        changeMan: true,
        changeBug: true,
        changeFree: true,
		message: "",
		mastername:'',
		selfphone:'',
		wechat:'',
		outphone:true,
		outwechat:true
      },
      show: false,
      actions: [{ name: "猫猫" }, { name: "狗狗" }]
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Uploader.name]: Uploader,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [ActionSheet.name]: ActionSheet,
    [Toast.name]: Toast,
    [SwitchCell.name]: SwitchCell,
    [Button.name]: Button
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    changeType() {
      this.show = true;
    },
    changeAge() {},
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      this.petType = item.name;
      console.log(this.petType);
      this.$toast(this.petType);
    },
    submit() {
      console.log(1);
      this.$axios.post("/api/pet/adopts", this.addgroup).then(res => {
        console.log(res);
      });
    }
  },
  created() {}
};
</script>

<style  scoped>
.van-nav-bar {
  background-color: #ff6700;
}
.van-nav-bar__title {
  color: white;
}
.wrap {
  padding: 100px 50px;
  width: 650px;
}
.upload-img{
	text-align: center;
	margin-bottom: 25px;
}
.sub{
	margin-top: 40px;
	margin-bottom: 80px;
}
</style>