<template>
  <div class="box">
    <headers />
    <div class="main">
      <left v-show="isShowAll" />
      <div class="content">
        <div class="box">
          <router-view />
        </div>
      </div>
      <right v-show="isShowRight && isShowAll" />
    </div>
  </div>
</template>

<script>
import Left from "@/components/home/Left.vue";
import Right from "@/components/home/Right.vue";
import Headers from "@/components/home/Headers.vue";

export default {
  name: "Home",
  data() {
    return {
      isShowAll: document.body.clientWidth > 950 ? true : false,
    };
  },
  computed: {
    isShowRight() {
      return this.$route.name == "Content";
    },
  },
  components: {
    Left,
    Right,
    Headers,
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.isShowAll = document.body.clientWidth > 950 ? true : false;
      })();
    };
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