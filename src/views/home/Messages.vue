<template>
  <div class="message">
    <h4>留言板({{ message_total }})</h4>
    <comment :comments="messages" />
    <pagination :total="message_total" :pn="pn" :rn="5" @changePage="changePage"/>
    <div class="message-post">
      <textarea
        name="message"
        maxlength="30"
        v-model="message"
        placeholder="请限制在30字以内"
      ></textarea>
      <button class="message-btn" @click="postMessage">留言</button>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/common/Comment.vue";
import Pagination from "@/components/common/Pagination.vue";
import { getMessage, addMessage } from "@/network/blog.js";
export default {
  components: {
    Comment,
    Pagination
  },
  data() {
    return {
      message: "",  // 发表留言
      messages: [], // 留言列表
      message_total: 0,
      pn: 1
    };
  },
  created: function () {
    this.getMessages()
  },
  methods: {
    postMessage(){
      addMessage(this.message).then((res) => {
        this.message = "";
        this.getMessages();
      });
    },
    getMessages() {
      getMessage(this.pn).then((res) => {
        this.messages = res.data.messages;
        this.message_total = res.data.total;
      });
    },
    changePage(pn){
      getMessage(pn).then((res) => {
        this.messages = res.data.messages;
        this.message_total = res.data.total;
        this.pn = pn;
        window.scrollTo(0, 0)
      });
    }
  }
};
</script>

<style scoped>
h4 {
  font-size: 20px;
  margin: 0 10px 10px;
  padding-top: 10px;
  border-bottom: 1px solid #e1e8ed;
  text-align: center;
}

.message {
  width: 100%;
  height: auto;
  background-color: white;
  opacity: 0.7;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.to-message {
  font-size: 10px;
  cursor: pointer;
  color: #000;
}

.message-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.message-post textarea {
  width: 100%;
  height: 200px;
  border: 1px solid #cccccc;
  border-radius: 10px;
}
.message-btn {
  width: 80px;
  height: 30px;
  margin: 20px;
  background-color: #fff;
  cursor: pointer;
}
</style>