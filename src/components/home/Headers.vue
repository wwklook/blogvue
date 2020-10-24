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
      <div class="right" v-if="isLogin">
        <a href="/register.html">注册</a>
      </div>
      <div class="right" v-if="isLogin">
        <a href="/login.html">登录</a>
      </div>
      <img
        src="https://i0.hdslb.com/bfs/face/member/noface.jpg@150w_150h.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data(){
    return {
      islogin: false,
    }
  },
  created(){
   this.isLogin = this.$store.state.isLogin;
  },
  methods: {

  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  opacity: 0.7;
}

.index {
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 250px;
}

.login img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 5px;
  float: right;
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
  color: #7bbfea;
  font-size: 25px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.right {
  margin-left: 10px;
  float: right;
  position: relative;
  color: #7bbfea;
  font-size: 25px;
}

.label:hover, .right:hover {
  color: #66ccff;
}

.label::after, .right::after {
  content:'';
  width: 0px;
  border-bottom: 2.5px solid blue;
  transition: width 0.2s cubic-bezier(0, 0.83, 0.72, 1.03);
  position: absolute;
  bottom: 0;
}

.label:hover::after, .right:hover::after{
  width: 100%;
}

</style>