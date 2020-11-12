<template>
  <div class="header">
    <div class="index">
      <div class="home">
        <a href=""><img src="@/assets/home/home.png" /></a>
      </div>
      <div class="label">
        <a href="/">主页</a>
      </div>
    </div>
    <div class="login">
      <div class="right" v-if="!islogin">
        <span @click="toreg">注册</span>
      </div>
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
export default {
  components: {},
  data() {
    return {
      islogin: false,
    };
  },
  watch: {
    "$store.state.isLogin"(newval, oldval) {
      console.log(newval);
      this.islogin = newval;
    },
  },
  methods: {
    toreg() {
      window.location.href = "/register.html";
    },
    tologin() {
      window.location.href = "/login.html";
    },
  },
};
</script>

<style scoped>
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

.pro:hover img{
  width: 72px;
  height: 72px;
}

.pro:hover .profile{
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
  transition: .2s;
  z-index: 10;
}

.home {
  margin-left: 15px;
  padding-right: 10px;
  border-right: 2px solid #66ccff;
}

.home img {
  width: 60px;
  height: 60px;
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
</style>