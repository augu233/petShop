<template>
  <div>
      <div class="goodwrap">
        <div class="goodinclude" v-for="item in goodclude" :key="item.id" @click="getClassId(item.id)">
            <img :src="item.titlepic" alt="">
            <p>{{ item.title }}</p>
        </div>
      </div>
  </div>
</template>

<script>
import apigoods from '@/api/goods.json'
export default {
  name: "goodClass",
  data() {
    return {
      goodclude:[],

    };
  },
  components: {
    
  },
  methods: {
    getClassId(id){
      console.log(id);
      this.$router.push({path:"/goodclassfyall",query:{id}});
    }
  },
  created(){
      this.goodclude = apigoods;
  }
};
</script>

<style  scoped>
.goodwrap{
    width: 750px;
    display: flex;
    flex-flow: row wrap;
    /* justify-content: space-between; */
}
.goodinclude{
    text-align: center;
    border-right:1px rgb(204, 204, 204) dashed;
    border-top:1px rgb(204, 204, 204) dashed;
    border-bottom:1px rgb(204, 204, 204) dashed;
    width: 185px;
    display: flex;
    flex-flow: column;
}
.goodinclude img{
    width: 120px;
    height: 130px;
    margin: 0 auto;
}
.goodinclude p{
    font-size: 30px;
}
</style>