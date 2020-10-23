<template>
  <div class="content">
      {{ item.text }}
  </div>
</template>

<script>
export default {
  name: "Acticle",
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.content {
  width: 700px;
  margin: 20px;
  flex-grow: 0.5;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

</style>