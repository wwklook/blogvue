<template>
  <div>
    <div v-for="(data, key) in data" :key="key">
      <acticle :data="data" />
    </div>
  </div>
</template>

<script>
import { getBlog } from "@/network/blog.js";
import Acticle from "@/components/blog/Acticle.vue";
export default {
  name: "Content",
  components: {
    Acticle
  },
  data() {
    return {
      data: [
      ],
    };
  },
  created() {
    getBlog().then(res => {
      this.data = res.data.data;
    })
  },
  methods: {
    
  },
};
</script>

<style scoped>
</style>