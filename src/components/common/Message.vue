<template>
  <div class="message">
    <h4>
      <span>留言板</span>
      <span class="to-message" @click="toMessage">更多</span>
    </h4>
    <comment :comments="messages" />
  </div>
</template>

<script>
import Comment from "@/components/common/Comment.vue";
import { getMessage } from "@/network/blog.js";
export default {
  components: {
    Comment,
  },
  data() {
    return {
      messages: [],
    };
  },
  created: function () {
    getMessage().then((res) => {
      this.messages = res.data.messages;
    });
  },
  methods: {
    toMessage() {
      this.$router.push("/home/messages");
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 20px;
  margin: 0 10px 10px;
  padding-top: 10px;
  border-bottom: 1px solid #e1e8ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.message {
  height: auto;
  background-color: white;
  opacity: 0.7;
  margin-bottom: 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.to-message {
  font-size: 10px;
  cursor: pointer;
}
</style>