<template>
  <div class="box">
    <headers />
    <div class="home" v-show="isContent">
      <h1 class="site-name">无聊look的个人博客</h1>
    </div>
    <div class="main">
      <left v-show="!isSmallScreen" />
      <div class="content">
        <div class="box">
          <router-view />
        </div>
      </div>
      <right v-show="isContent && !isSmallScreen" />
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
    isContent() {
      return this.$route.name == "Content";
    },
    isSmallScreen() {
      return this.$store.state.isSmallScreen;
    },
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

.home {
  width: 100%;
  height: 50vh;
  background-color: #66ccff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.site-name {
  color: #fff;
  letter-spacing: 0.5rem;
  font-size: 4.5rem;
}

@media screen and (max-width: 450px) {
  .site-name {
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
  }
}

.main {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
</style>