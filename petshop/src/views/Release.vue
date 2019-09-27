<template>
  <div class="release">
    <van-nav-bar title="发布送养" fixed :z-index="20" />
    <div class="wrap">
      <div class="upload-img">
        <div class="upload-group">
          <ul class="browse">
            <li v-for="(imgsrc,index) in imgSrc" :key="index">
              <img :src="imgsrc" />
              <p>
                <van-icon name="delete" @click="del(index)" />
              </p>
            </li>
          </ul>
          <div class="form-group">
              <input
                type="file"
                multiple
                ref="input"
                value="上传宠物照片"
                name="myfile"
                class="upload"
                @change="select"
              />
          </div>
        </div>
      </div>
      <div class="group">
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            title="选择年龄"
            :columns="columns"
            @cancel="onCancel"
            @confirm="onConfirm"
          />
        </van-popup>
        <van-action-sheet v-model="showsex" :actions="actionsex" @select="onSelectsex" />
        <van-cell-group>
          <van-field
            v-model="pets.nick_name"
            required
            clearable
            label="昵称"
            placeholder="宠物昵称(限五个字符)"
            maxlength="5"
          />
          <van-cell title="种类" :value="pets.type_id" @click="changeType" />
          <van-cell :value="pets.age" title="年龄" @click="changeage" />
          <van-cell :value="petsex ? petsex : '请选择性别'" title="性别" @click="changesex" />
          <van-switch-cell active-color="#ff6700" v-model="tvaccine" title="是否注射疫苗" />
          <van-switch-cell active-color="#ff6700" v-model="tsterilization" title="是否绝育" />
          <van-switch-cell active-color="#ff6700" v-model="texpelling" title="是否驱虫" />
        </van-cell-group>
      </div>
      <div class="Adoption">
        <p class="adoptiontitle">领养条件</p>
        <van-checkbox-group v-model="result">
          <van-checkbox
            v-for="(check, index) in adoption"
            :key="index"
            v-model="checked"
            :name="check.text"
            checked-color="#ff6700"
            @click="getcheckId(check.id)"
          >{{ check.text }}</van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="itstory">
        <p class="story">TA的故事</p>
        <van-field
          v-model="pets.des"
          label="留言"
          type="textarea"
          placeholder="请输入留言"
          rows="1"
          autosize
        />
      </div>
      <div class="sub">
        <van-button type="warning" size="large" @click="submit">发布送养</van-button>
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
  Button,
  Checkbox,
  CheckboxGroup,
  Picker,
  Popup
} from "vant";

export default {
  data() {
    return {
      pets: {
        nick_name: "",
        type_id: "选择宠物类型",
        age: "请选择年龄",
        sex: "",
        vaccine: "1",
        sterilization: "1",
        expelling: "1",
        des: "",
        adopts: "",
        pics: []
      },
      imgSrc: [],
      alladopts: [],
      petsex: "",
      tvaccine: true,
      tsterilization: true,
      texpelling: true,
      show: false,
      showage: false,
      showsex: false,
      showPicker: false,
      result: [],
      checked: true,
      actions: [{ name: "猫猫" }, { name: "狗狗" }],
      actionsex: [{ name: "女孩" }, { name: "男孩" }],
      adoption: [],
      columns: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19.2
      ]
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
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Picker.name]: Picker,
    [Popup.name]: Popup
  },
  methods: {
    //图片上传
    select() {
      let fileList = this.$refs.input.files;
      for (var i = 0; i < fileList.length; i++) {
        let file = fileList[i];
        let imgPath = this.getObjectURL(file);
        this.imgSrc.push(imgPath);
        this.pets.pics.push(file);
      }
    },

    getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },

    del(index) {
      this.imgSrc.splice(index, 1);
      this.pets.pics.splice(index, 1);
    },

    getcheckId(id) {
      // console.log(id)
      if (this.alladopts.length < 1) {
        this.alladopts.push(id);
      } else {
        for (let i = 0; i < this.alladopts.length; i++) {
          console.log(this.alladopts.indexOf(id) == -1);
          if (this.alladopts.indexOf(id) == -1) {
            this.alladopts.push(id);
            break;
          } else {
            // console.log(this.alladopts.indexOf(id))
            this.alladopts.splice(this.alladopts.indexOf(id), 1);
            // console.log('shanchu')
            break;
          }
          // this.pets.adopts = this.alladopts[i] + '&'
        }
      }
      this.pets.adopts = this.alladopts.join("&");
      // console.log(this.pets.adopts);
    },
    changeType() {
      this.show = true;
    },
    changeage() {
      this.showPicker = true;
    },
    changesex() {
      this.showsex = true;
    },
    onConfirm(value) {
      this.showPicker = false;
      Toast(`年龄${value}`);
      this.pets.age = value;
    },
    onCancel() {
      this.showPicker = false;
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      this.pets.type_id = item.name;
      // console.log(this.pets.type_id);
      this.$toast(this.pets.type_id);
    },
    onSelectsex(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.showsex = false;
      this.petsex = item.name;
      if (item.name == "女孩") {
        this.pets.sex = "w";
      } else {
        this.pets.sex = "m";
      }
      this.$toast(this.petsex);
    },
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    submit() {
      this.tvaccine ? (this.pets.vaccine = "1") : (this.pets.vaccine = "0");
      this.tsterilization
        ? (this.pets.sterilization = "1")
        : (this.pets.sterilization = "0");
      this.texpelling
        ? (this.pets.expelling = "1")
        : (this.pets.expelling = "0");
      // console.log(this.pets.vaccine,this.pets.sterilization,this.pets.expelling)

      //上传
      let fileForm = new FormData();

      this.pets.pics.forEach(file => {
        // console.log(file);
        fileForm.append("myfile[]", file);
      });

      fileForm.append("pets", JSON.stringify(this.pets));

      //console.log(fileForm.get("myfile[]"),fileForm.get("message{}"));
      this.$axios.post("/api/pet/save", fileForm).then(res => {
        console.log(res);
      });
      // console.log(this.pets,this.pets.adopts);
    }
  },
  created() {
    this.$axios.post("/api/pet/adopts").then(res => {
      this.adoption = res.data;
      // console.log(res);
    });
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
.wrap {
  padding: 100px 50px;
  width: 650px;
}
.upload-img {
  text-align: center;
  margin-bottom: 25px;
}
.sub {
  margin-top: 40px;
  margin-bottom: 80px;
}
.group {
  padding: 30px 0;
  background-color: #fff;
  border-radius: 15px;
}
.Adoption {
  margin-top: 20px;
  font-size: 28px;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px 20px;
}
.Adoption .adoptiontitle {
  font-size: 32px;
  margin-bottom: 40px;
}
.van-checkbox {
  height: 100%;
  margin-bottom: 10px;
}
.itstory {
  margin-top: 20px;
}
.story {
  font-size: 32px;
  margin-bottom: 40px;
}
.form-group input {
  width: 100%;
  font-size: 40px;
  text-align: center;
}
.upload-group {
  padding-top: 50px;
}
.browse li {
  width: 200px;
  height: 200px;
  position: relative;
  display: inline-block;
  margin: 15px;
}
.browse li img {
  width: 100%;
}
.browse li p {
  position: absolute;
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.1);
  left: 0;
  bottom: 0;
  text-align: center;
  line-height: 50px;
  color: #000;
}
</style>