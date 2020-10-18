<template>
  <div class="box">
    <content />
  </div>
</template>

<script>

import Content from "@/views/home/Content.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Content,
  },
};
</script>

<style scoped>
</style>