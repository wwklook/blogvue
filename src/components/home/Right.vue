<template>
  <div class="right">
    <div class="notice">
      <h4>公告栏</h4>
      <div class="notice-text">暂无公告</div>
    </div>
    <message />
    <div class="tags">
      <h4>标签</h4>
      <div
        v-for="tag in tags"
        :key="tag.tag_id"
        class="tag-item"
        @click="toTag(tag.tag_id)"
      >
        {{ tag.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { getTags } from "@/network/blog.js";
import Message from "@/components/common/Message.vue";
export default {
  components: {
    Message,
  },
  data() {
    return {
      tags: [],
    };
  },
  created() {
    getTags().then((res) => {
      this.tags = res.data.data;
    });
  },
  methods: {
    toTag(tid) {
      this.$router.push({ name: "Tag", query: { tid } });
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

.tags {
  width: 100%;
  background-color: white;
  opacity: 0.7;
  margin-bottom: 40px;
  border-radius: 8px;
}

.tag-item {
  display: inline-block;
  background-color: #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 8px;
  cursor: pointer;
}

.tag-item:hover {
  background-color: #ccc;
}
</style>