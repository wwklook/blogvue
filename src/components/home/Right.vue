<template>
  <div class="right">
    <div class="notice">
      <h4>公告栏</h4>
      <div class="notice-text">暂无公告</div>
    </div>
    <message />
  </div>
</template>

<script>
import Message from "@/components/common/Message.vue";
export default {
  components: {
    Message,
  },
};
</script>

<style scoped>
h4 {
  font-size: 20px;
  margin: 0 10px 10px;
  padding-top: 10px;
  border-bottom: 1px solid #e1e8ed;
}

.right {
  width: 300px;
  margin: 20px;
}

.notice {
  width: 100%;
  min-height: 130px;
  background-color: white;
  opacity: 0.7;
  margin-bottom: 40px;
  border-radius: 8px;
}

.notice-text {
  padding: 5px 10px 20px;
}
</style>