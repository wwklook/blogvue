<template>
  <router-view />
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="sass">
@import "~@/assets/common.sass"
body
  margin: 0 auto
  background: #e6e6e6
  background-attachment: fixed
  background-size: cover

a
  text-decoration: none

ul
  padding: 5px
  margin: 0

.bottom-layer
  background-color: #e2e2e2
  display: flex
  justify-content: center
  align-items: center
  margin-top: 100px
  padding: 10px
</style>
