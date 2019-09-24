<template>
  <div class="addaddress">
    <petnavbar title="我的收货地址"></petnavbar>
    <div class="body">
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
  </div>
</template>

<script>
import petnavbar from "../../components/PetNavbar/PetNavbar";
import { AddressEdit } from 'vant';
import areaList from '@/api/address.js'
export default {
  name: "addaddress",
  components: {
      [AddressEdit.name]: AddressEdit,
    petnavbar
  },
  data() {
    return {
      areaList,
      searchResult: []
    };
  },

  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style scoped>
.body{
    margin-top: 92px;
}
</style>