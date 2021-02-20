<template>
  <div class="left">
    <div class="mine">
      <div class="head">
        <img
          src="https://i0.hdslb.com/bfs/face/member/noface.jpg@150w_150h.jpg"
        />
        <div class="my-name">无聊look</div>
      </div>
      <div class="my-info">
        <div class="info-item">
          <div class="info-name">文章</div>
          <div class="num">5</div>
        </div>
        <div class="info-item">
          <div class="info-name">标签</div>
          <div class="num">7</div>
        </div>
        <div class="info-item">
          <div class="info-name">阅读数</div>
          <div class="num">0</div>
        </div>
      </div>
    </div>
    <calendar />
    <music />
  </div>
</template>

<script>
import Music from "@/components/common/Music.vue";
import Calendar from "@/components/common/Calendar.vue";
export default {
  components: {
    Music,
    Calendar,
  },
};
</script>

<style scoped>
.left {
  width: 350px;
  margin: 20px;
}

.mine {
  width: 100%;
  height: 450px;
  background-color: white;
  opacity: 0.7;
  margin-bottom: 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.head {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #66ccff;
  font-size: 25px;
}

.head img {
  margin-top: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: 0.5s;
  cursor: pointer;
}

.head img:hover {
  transform: rotate(1turn);
}

.my-name {
  color: #66ccff;
  margin: 10px 0;
}

.my-info {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.info-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #003661;
}

.num {
  font-size: 1.1rem;
  font-weight: bold;
  color: #003661;
}
</style>