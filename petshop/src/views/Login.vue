<template>
    <div class="register">
        <div class="header">
             <van-nav-bar
            title="用户登录"
            left-arrow
            @click-left="onBack"
            />
        </div>
        <div class="body">
            <van-cell-group>
            
                <van-field
                    v-model="params.email"
                    required
                    clearable
                    label="邮箱"
                    placeholder="请输入邮箱"
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
                     <van-button type="warning" size="large" @click="login">登 录</van-button>
                </div>
                
        </div>
    </div>
</template>

<script>

import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';
import { NavBar } from 'vant';
import { Button } from 'vant';
import { constants } from 'crypto';

export default {
    data(){
        return {
            params:{
                email:"",
                password:""
            },
            path:"/about"
        }
    },
    created(){
        this.params.email = this.$route.params.email;
        this.params.password = this.$route.params.password;
        this.path = this.$route.params.path?this.$route.params.path :"/about";
    },
    methods:{
        onBack(){
           this.$router.go(-1);
        },

        login(){
           
            this.$axios.post("/user/login",this.params).then(res=>{
                 if(res.data.code==200){
                    console.log(res); 
                    this.$toast(res.data.msg);
                    this.$store.commit("SET_TOKEN",res.data.user);
                    this.$router.push(this.path);
                 }
            });

        }

    },
    
    components:{
        [Field.name]: Field,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [NavBar.name]: NavBar,
        [Button.name]: Button
    }
     
}
</script>

<style scoped>

.body{
    padding:30px 20px;
    padding-top:50px;
}
.van-nav-bar{
     background: #ff6700;
}

.van-nav-bar .van-icon{
    color:#fff;
}

.van-nav-bar__title{
    color: #fff;
}
.form-group{
    padding-top:100px;
}
</style>
