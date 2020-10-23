<template>
  <div>
      <div class="context">
        测试博客
      </div>
    </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
    };
  },
  created(){
      
  },
  methods: {

  }
};
</script>

<style scoped>
.context {
  width: 100%;
  height: 400px;
  opacity: 1;
  margin-bottom: 20px;
  border-radius: 10px;
  line-height: 380px;
  font-size: 50px;
  color: #66ccff;
  text-align: center;
  background-color: white;
  opacity: 0.7;
  margin-bottom: 40px;
  transition: 1s;
}

.context:hover {
  /* opacity: 1; */
  box-shadow: 0 0 5px #adadad, 0 0 25px #adadad, 0 0 25px #adadad, 0 0 25px #adadad;
}
</style>