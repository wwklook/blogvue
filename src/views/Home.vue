<template>
  <div class="box">
    <headers />
    <div class="main">
      <left v-show="!isSmallScreen" />
      <div class="content">
        <div class="box">
          <router-view />
        </div>
      </div>
      <right v-show="isShowRight && !isSmallScreen" />
    </div>
  </div>
</template>

<script>
import Left from "@/components/home/Left.vue";
import Right from "@/components/home/Right.vue";
import Headers from "@/components/home/Headers.vue";

export default {
  name: "Home",
  computed: {
    isShowRight() {
      return this.$route.name == "Content";
    },
    isSmallScreen(){
      return this.$store.state.isSmallScreen
    }
  },
  components: {
    Left,
    Right,
    Headers,
  },
};
</script>

<style scoped>
.content {
  width: 700px;
  margin: 20px;
  flex-grow: 0.5;
}

.main {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
}
</style>