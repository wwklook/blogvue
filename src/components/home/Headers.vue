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
      <div class="right">
        <span @click="tologin" v-if="!islogin">登录</span>
      </div>
      <div class="acc" v-if="userinfo">
        <img
          :src="userinfo.avatar"
          @click="toAccount"
        />
        <div class="account">
          <span class="account-name">{{ userinfo.nickname }}</span>
          <div class="account-center" @click="toAccount">个人中心</div>
          <div class="account-logout" @click="logout">注销</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCategory, setLogout } from "@/network/blog.js";

export default {
  name: "Headers",
  components: {},
  data() {
    return {
      categories: [],
    };
  },
  computed: {
    userinfo() {
      return this.$store.state.userinfo;
    },
    islogin() {
      return this.$store.state.islogin;
    },
  },
  mounted() {
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
    toAccount() {
      this.$router.push("/account");
    },
    logout() {
      setLogout().then((res) => {
        location.href = location.href;
      });
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
  width: 50px;
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

.category:hover .sub {
  visibility: visible;
  opacity: 1;
}

.sub {
  visibility: hidden;
  background-color: #666666;
  opacity: 0;
  transition: opacity 0.4s;
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

.acc {
  position: relative;
  float: right;
  width: 82px;
  height: 82px;
  display: flex;
  justify-content: center;
}

.account {
  position: absolute;
  width: 200px;
  height: auto;
  left: 50%;
  top: 50%;
  margin-left: -105px;
  padding-top: 48px;
  border-radius: 8px;
  background-color: #f6f6f6;
  z-index: 9;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.acc:hover img {
  width: 72px;
  height: 72px;
}

.acc:hover .account {
  visibility: visible;
  opacity: 1;
}

.login {
  width: 250px;
}

.acc img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 10px;
  float: right;
  transition: 0.2s;
  z-index: 10;
  cursor: pointer;
}

.account-center {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #8c8c8c;
}

.account-logout {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  /* border-bottom: 1px solid #8c8c8c; */
}

.account-name {
  color: #2b577b;
  font-weight: bold;
  font-size: 20px;
  font-family: fantasy;
}

.account div:hover {
  background-color: #e0e0e0;
}
</style>