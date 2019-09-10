<template>
  <div>
    <div class="swiper-inner">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in pics" :key="index">
          <img class="pictures" :src="item.url" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import api from '@/api/data.json'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      pics:[],
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 10,
          stretch: 0,
          depth: 70,
          modifier:1,
          slideShadows: false,
        },
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.pics = api;
    // console.log(this.pics);
    // this.$axios.get('').then(res=>{
    //   console.log(res);
    //   this.pics = res;
    // })
  },
  methods: {
  }
};
</script>

<style scoped>
.swiper-inner {
  width: 100%;
  height: 270px;
  padding-top: 120px;
  padding-bottom: 20px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 360px;
  height: 260px;
}
.pictures{
  width: 100%;
  height: 100%;
}
</style>