<template>
  <div class="register">
    <div class="header">
      <van-nav-bar title="用户注册" left-arrow @click-left="onBack" />
    </div>
    <div class="body">
      <van-cell-group>
        <van-field
          v-model="params.name"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
        <van-field
          v-model="params.email"
          required
          clearable
          label="邮箱"
          placeholder="请输入邮箱"
          @click-right-icon="$toast('question')"
        />
        <van-field
          v-model="params.tel"
          required
          clearable
          label="手机"
          placeholder="请输入手机号码"
          @click-right-icon="$toast('question')"
        />
        <van-field
          v-model="params.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <div class="form-group">
        <van-button type="warning" size="large" @click="register">注册用户</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Field } from "vant";
import { Cell, CellGroup } from "vant";
import { NavBar } from "vant";
import { Button } from "vant";
import { Toast } from "vant";
import { constants } from "crypto";

export default {
  data() {
    return {
      params: {
        name: "",
        password: "",
        email: "",
        tel: ""
      }
    };
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    register() {
      console.log(this.params);
      //return false;
      this.$axios.post("/api/user/reg", this.params).then(res => {
        if (res.data.code == 200) {
          console.log(res);
          this.$toast.success(res.data.msg);
          // this.$router.push({name:"login",params:this.params})
        }
      });
    }
  },

  components: {
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Toast.name]: Toast
  }
};
</script>

<style scoped>
.body {
  padding: 30px 20px;
  padding-top: 50px;
}
.van-nav-bar {
  background: #ff6700;
}

.van-nav-bar .van-icon {
  color: #fff;
}

.van-nav-bar__title {
  color: #fff;
}
.form-group {
  padding-top: 100px;
}
</style>
