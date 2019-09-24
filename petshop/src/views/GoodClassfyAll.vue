<template>
  <div class="release">
    <div class="header">
      <van-nav-bar title="商品列表" left-arrow @click-left="onBack" fixed :z-index="20"/>
    </div>
    <div class="good-all">
      <template v-for="(all,index) in goodclude">
        <goodDetail v-if="all.good_classifie_id == goodid" :all="all" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import goodDetail from "@/components/goodDetail/goodDetail";
import Vue from "vue";
import { NavBar } from "vant";
Vue.use(NavBar);
export default {
  data() {
    return {
      goodclude: [],
      goodid:Number
    };
  },
  components: {
    [NavBar.name]: NavBar,
    goodDetail
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.goodid = this.$route.query.id;
    this.$axios.get('/api/good/goods').then(res=>{
        this.goodclude = res.data
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
.good-all{
    margin-top: 100px;
    text-align: center;
}
</style>