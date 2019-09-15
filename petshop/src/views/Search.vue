<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Search } from "vant";

Vue.use(NavBar).use(Search);
export default {
  name: "Search",
  data() {
    return {
      value: ""
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search
  },
  methods: {
    onSearch() {
      console.log(1);
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<style  scoped>
</style>