<template>
  <div class="box">
    <headers />
    <div class="main">
      <left />
      <div class="content">
        <div class="box">
          <router-view />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Left from "@/views/home/Left.vue";
import Headers from "@/views/home/Headers.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Left,
    Headers
  },
};
</script>

<style scoped>
</style>