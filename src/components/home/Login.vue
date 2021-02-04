<template>
  <div class="login">
    <div class="right">
      <span @click="tologin" v-if="!islogin">登录</span>
    </div>
    <div class="acc" v-if="userinfo">
      <img :src="userinfo.avatar" />
      <div class="account">
        <span class="account-name">{{ userinfo.nickname }}</span>
        <div class="account-center" @click="toAccount">个人中心</div>
        <div class="account-logout" @click="logout">注销</div>
      </div>
    </div>
  </div>
</template>

<script>
import { setLogout } from "@/network/blog.js";
export default {
  name: "Login",
  components: {},
  computed: {
    userinfo() {
      return this.$store.state.userinfo;
    },
    islogin() {
      return this.$store.state.islogin;
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    tologin() {
      window.location.href = "/login.html";
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
.login {
  width: 250px;
  opacity: 0.7;
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
</style>>