<template>
  <div class="article-comment">
    <div class="comment-item" v-for="item in comments" :key="item.comment_id">
      <div class="user-info">
        <img :src="item.upic" />
        <div class="uname">{{ item.uname }}</div>
        <div class="comment-create-time">
          {{ formatTime(item.create_time) }}
        </div>
      </div>
      <div class="comment-text">{{ item.comment }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: [],
    },
  },
  computed: {
    formatTime() {
      return function (str = "") {
        return str.replace("T", " ").slice(0, -4);
      };
    },
  },
};
</script>


<style scoped>
.article-comment {
  width: 100%;
  height: auto;
}

.comment-item {
  margin: 0 10px;
  border-bottom: 1px solid #9a9a9a;
}

.comment-item:last-child {
  border-bottom: none;
}

.user-info {
  display: flex;
  align-items: center;
  padding-top: 20px;
}

.user-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.uname {
  margin: 10px;
}

.comment-create-time {
  font-size: 14px;
  color: #9a9a9a;
}

.comment-text {
  margin: 15px;
}
</style>