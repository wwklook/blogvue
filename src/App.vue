<template>
  <div class="box">
    <headers />
    <div class="main">
      <left />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Left from "@/views/home/Left.vue";
import Headers from "@/views/home/Headers.vue";
export default {
  components: {
    Left,
    Headers
  },
};
</script>

<style>
@import "~@/assets/common.css";
body {
  margin: 0 auto;
  background: #e6e6e6;
  background-attachment: fixed;
  background-size: cover;
  /* user-select: none;
  -webkit-user-seletct: none;
  -moz-user-seletct: none;
  -ms-user-seletct: none; */
}

a {
  text-decoration: none;
}

ul {
  padding: 5px;
  margin: 0;
}

li {
  list-style: none;
}

img {
  cursor: pointer;
}
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
