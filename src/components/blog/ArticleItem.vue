<template>
  <div class="context" @click="toContext">
    <div class="title">{{ data.title }}</div>
    <div class="summary">{{ data.summary }}</div>
    <div class="info">
      <img src="@/assets/blog/time.svg" title="创建时间" />
      <span> {{ formatTime(data.create_time) }}</span>
      <img src="@/assets/blog/watch.svg" title="阅读数" />
      <span> {{ data.read_number }}次阅读</span>
      <div class="tag" v-for="(v, k) in data.tags.slice(0, 5)" :key="k">{{ v }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["data"],
  computed: {
    formatTime(){
      return function(str="") {
        return str.replace('T', ' ').slice(0, -4)
      }
    }
  },
  methods: {
    toContext() {
      this.$router.push('/home/blog/' + this.data.blog_id)
    }
  }
};
</script>

<style scoped>
.context {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background-color: white;
  opacity: 0.7;
  transition: 1s;
  position: relative;
  margin-bottom: 40px;
}

.context:hover {
  box-shadow: 0 0 5px #adadad, 0 0 25px #adadad, 0 0 25px #adadad,
    0 0 25px #adadad;
  cursor: pointer;
}

.title {
  width: 100%;
  font-size: 45px;
  text-align: center;
  color: #66ccff;
  transition: 0.5s;
  position: absolute;
  white-space: nowrap;
  top: 150px;
}

.summary {
  opacity: 0;
  transition: .5s;
  font-size: 25px;
  position: absolute;
  bottom: 100px;
  left: 30px;
}

.info {
  position: absolute;
  bottom: 10px;
  left: 30px;
  width: 90%;
  padding-top: 10px;
  border-top: 1.5px solid #515151;
  white-space: nowrap;
  color: #515151;
  opacity: 0;
  transition: .5s;
}

.info img {
  margin-right: 10px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.info span {
  vertical-align: middle;
  margin-right: 30px;
  font-size: 20px;
}
.context:hover .title {
  top: 120px;
  font-size: 50px;
}

.context:hover .summary {
  opacity: 1;
}

.context:hover .info {
  opacity: 1;
}

.tag {
  display: inline-block;
  vertical-align: middle;
  background-color: #ececec;
  border-radius: 5px;
  padding: 2px 8px;
  margin-right: 10px;
  transition: .2s;
}

.tag:hover {
  background-color: #cccccc;
}

</style>