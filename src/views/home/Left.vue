<template>
  <div class="left">
    <div class="mine">
      <div class="head">
        <img
          class="rotate"
          src="https://i0.hdslb.com/bfs/face/member/noface.jpg@150w_150h.jpg"
        />
        <div>无聊look</div>
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
.rotate:hover {
  animation: rotateplane 0.5s ease-in-out;
}

@keyframes rotateplane {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}

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
  color: #66ccff;
}

.head img {
  margin-top: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>