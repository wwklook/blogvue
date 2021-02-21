<template>
  <div class="login">
    <div class="right">
      <span v-if="!userinfo" @click="tologin">登录</span>
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
import { setLogout } from "@/network/info.js";
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
  margin: 10px 5px;
  cursor: pointer;
  float: right;
  position: relative;
  font-size: 25px;
  display: flex;
  justify-content: center;
}

.label:hover,
.right:hover {
  color: #dddddd;
}

.label::after,
.right::after {
  content: "";
  width: 0px;
  border-bottom: 2.5px solid #dddddd;
  transition: width 0.5s;
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
  background-color: #407096;
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
  transform: scale(1.3);
}

.acc:hover .account {
  visibility: visible;
  opacity: 1;
}

.acc img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
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
  color: #66ccff;
  font-weight: bold;
  font-size: 20px;
}

.account div:hover {
  background-color: #e0e0e0;
}
</style>>