<template>
  <router-view />
</template>

<script>
export default {
  components: {

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
