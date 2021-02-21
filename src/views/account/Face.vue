<template>
  <div>
    <div class="avatar">
      <div class="avatar-new">
        <label
          class="file-input-label"
          for="file-input"
          v-if="preview_img == null"
        >
          <span class="add">+</span>
        </label>
        <div class="avatar-new-active" v-if="preview_img">
          <img class="avatar-new-img" :src="preview_img" />
          <label class="reset" for="file-input">重新选择</label>
        </div>
        <input
          id="file-input"
          @change="fileChange"
          type="file"
          accept=".jpg, .png, .gif, .jpeg"
          ref="file"
        />
      </div>
      <div class="gutter"></div>
      <div class="avatar-old">
        <img :src="avatar" />
        <span>当前头像</span>
      </div>
    </div>
    <div class="error">
      {{ error }}
    </div>
    <div class="upload">
      <span class="refuse" v-if="preview_img == null">更改</span>
      <span class="allow" v-if="preview_img" @click="upload">更改</span>
    </div>
  </div>
</template>

<script>
import { getUserInfo, changeAvatar } from "@/network/info";
export default {
  components: {},
  data() {
    return {
      error: "",
      allow: ["jpg", "jpeg", "png", "gif"],
      preview_img: null,
      img: null,
    };
  },
  computed: {
    avatar() {
      return this.$store.state.userinfo.avatar;
    },
  },
  methods: {
    fileChange() {
      let file = this.$refs.file.files[0];
      if (!file) {
        this.error = "";
        return;
      }
      let suffix = file.name.split(".").pop();
      if (this.size > 2 * 1024 * 1024) {
        this.error = "图片需小于2M";
        this.preview_img = null;
      }
      if (this.allow.indexOf(suffix) != -1) {
        this.error = "";
        this.img = file;
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (data) => {
          let res = data.target || data.srcElement;
          this.preview_img = res.result;
        };
      } else {
        this.error = "图片仅支持" + this.allow.toString() + "格式";
        this.preview_img = null;
      }
    },
    upload() {
      const data = new FormData();
      data.append("avatar", this.img);
      changeAvatar(data).then((res) => {
        getUserInfo().then((res) => {
          this.$store.commit("changeUserInfo", res.data);
        });
      });
    },
  },
};
</script>

<style scoped>
.file-input-label {
  width: 200px;
  height: 200px;
  background-color: #f1f1f1;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.file-input-label:hover {
  background-color: #e5e5e5 !important;
}

.avatar {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.avatar-new {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-new-active {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.avatar-new-img {
  width: 100%;
  height: 100%;
}

#file-input {
  display: none;
}

.add {
  font-size: 50px;
}

.reset {
  position: absolute;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  color: #fff;
  background: #9e9e9e;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
}

.avatar-new-active:hover .reset {
  opacity: 0.6;
}

.gutter {
  width: 2px;
  height: 250px;
  background-color: #666;
}

.avatar-old {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-old img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.error {
  text-align: center;
  font-size: 22px;
  color: #ff0000;
}

.upload {
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.refuse {
  cursor: not-allowed;
  padding: 8px 15px;
  border-radius: 8px;
  background: #e6e6e6;
  border: 1px solid #989898;
}

.allow {
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 8px;
  color: #ffffff;
  background: #00aaff;
  border: 1px solid #00aaff;
}

.allow:hover {
  background-color: #29b8ff;
}
</style>
