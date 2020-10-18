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
      <img
        src="https://i0.hdslb.com/bfs/face/member/noface.jpg@150w_150h.jpg"
      />
      <div>登录</div>
      <div>注册</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.label {
  position: relative;
}

.label::after {
  content:'';
  width: 0px;
  border-bottom: 2.5px solid blue;
  transition: width 0.2s cubic-bezier(0, 0.83, 0.72, 1.03);
  position: absolute;
  bottom: 0;
}

.label:hover::after{
  width: 100%;
}

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
  display: flex;
  align-items: center;
  justify-content: center;
}

.login img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 5px;
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
  margin-left: 30px;
  color: #7bbfea;
  font-size: 25px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.label:hover {
  color: #66ccff;
}
</style>