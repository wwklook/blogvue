<template>
  <div class="header">
    <div class="index">
      <div class="home">
        <img src="@/assets/home/home.png" title="主页" @click="toHome" />
      </div>
      <ul class="categories">
        <li
          class="category"
          v-for="category in categories"
          :key="category.category_id"
        >
          {{ category.category_name }}
          <ul class="sub">
            <li
              class="sub-item"
              v-for="sub in category.sub_category"
              :key="sub.id"
              @click="toCategory(sub.id)"
            >
              {{ sub.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="login">
      <div class="right" v-if="!islogin">
        <span @click="tologin">登录</span>
      </div>
      <div class="pro">
        <img
          src="https://i0.hdslb.com/bfs/face/member/noface.jpg@150w_150h.jpg"
        />
        <div class="profile"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCategory } from "@/network/blog.js";

export default {
  components: {},
  data() {
    return {
      islogin: false,
      categories: [],
    };
  },
  watch: {
    "$store.state.isLogin"(newval, oldval) {
      console.log(newval);
      this.islogin = newval;
    },
  },
  created() {
    getCategory().then((res) => {
      this.categories = res.data.categories;
    });
  },
  methods: {
    tologin() {
      window.location.href = "/login.html";
    },
    toCategory(id) {
      this.$router.push("/home/category/" + id);
    },
    toHome() {
      this.$router.push("/home/content");
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.header {
  width: 100%;
  height: 88px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  opacity: 0.7;
  position: relative;
  z-index: 99;
}

.index {
  width: 100%;
  height: 88px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.pro {
  position: relative;
  float: right;
  width: 82px;
  height: 82px;
  display: flex;
  justify-content: center;
}

.profile {
  position: absolute;
  width: 200px;
  height: 400px;
  left: 50%;
  margin-left: -105px;
  top: 50%;
  background-color: rgb(105, 105, 105);
  z-index: 9;
  display: none;
  opacity: 0;
  transition-delay: 0.2s;
}

.pro:hover img {
  width: 72px;
  height: 72px;
}

.pro:hover .profile {
  display: block;
  opacity: 1;
}

.login {
  width: 250px;
}

.pro img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 10px;
  float: right;
  transition: 0.2s;
  z-index: 10;
  cursor: pointer;
}

.home {
  margin-left: 15px;
  padding-right: 10px;
  border-right: 2px solid #66ccff;
}

.home img {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.label {
  position: relative;
  margin-left: 30px;
  color: #66ccff;
  font-size: 25px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.right {
  margin: 20px 5px;
  cursor: pointer;
  float: right;
  position: relative;
  color: #66ccff;
  font-size: 25px;
  display: flex;
  justify-content: center;
}

.label:hover,
.right:hover {
  color: #66ccff;
}

.label::after,
.right::after {
  content: "";
  width: 0px;
  border-bottom: 2.5px solid #66ccff;
  transition: width 0.2s cubic-bezier(0, 0.83, 0.72, 1.03);
  position: absolute;
  bottom: 0;
}

.label:hover::after,
.right:hover::after {
  width: 100%;
}

.categories {
  display: flex;
  margin-left: 20px;
}

.category {
  color: #000;
  font-size: 22px;
  transition: 0.5s;
  margin: 20px 10px;
  cursor: pointer;
  position: relative;
}

.category:hover .sub,
.category:hover .triangle {
  opacity: 1;
}

.sub {
  background-color: #666666;
  opacity: 0;
  transition: 0.4s;
  border-radius: 12px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px -1px 5px 2px #000;
}

.sub::after {
  width: 0;
  height: 0px;
  content: "";
  border-style: solid;
  border-width: 10px;
  border-color: #666666 #666666 transparent transparent;
  transform: rotate(-45deg);
  box-shadow: 2px -2px 2px #000;
  position: absolute;
  top: -10px;
  left: calc(50% - 10px);
}

.sub-item {
  white-space: nowrap;
  padding: 5px 20px;
  font-size: 20px;
  color: #fff;
}

.sub-item:hover {
  color: #66ccff;
}
</style>