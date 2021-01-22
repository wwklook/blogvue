<template>
  <ul>
    <li v-for="(acticle, key) in acticles" :key="key">
      <acticle :data="acticle" />
    </li>
  </ul>
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
      acticles: [],
      p: 1,
      total: 0
    };
  },
  created() {
    getBlog(this.p).then(res => {
      this.acticles = res.data.data;
      this.total = res.data.total
    })
  },
  methods: {
    
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>