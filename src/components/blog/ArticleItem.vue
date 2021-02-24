<template>
  <div class="context">
    <img class="bg-img" :src="'https://www.wwklook.com/' + data.img" @click="toContext" />
    <div class="title" @click="toContext">{{ data.title }}</div>
    <div class="summary" :class="{ 'no-hidden': isSmallScreen }" @click="toContext">
      {{ data.summary }}
    </div>
    <div class="info" :class="{ 'no-hidden': isSmallScreen }">
      <img src="@/assets/blog/time.svg" title="创建时间" />
      <span> {{ formatTime(data.create_time) }}</span>
      <img src="@/assets/blog/watch.svg" title="阅读数" />
      <span> {{ data.read_number }}次阅读</span>
      <div
        class="tag"
        v-for="tag in data.tags.slice(0, 5)"
        :key="tag.id"
        @click="toTag(tag.id)"
      >
        {{ tag.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: ["data"],
  computed: {
    formatTime() {
      return function (str = "") {
        return str.replace("T", " ").slice(0, -4);
      };
    },
    isSmallScreen() {
      return this.$store.state.isSmallScreen;
    },
  },
  methods: {
    toContext() {
      this.$router.push("/home/blog/" + this.data.blog_id);
    },
    toTag(tid) {
      this.$router.push({ name: "Tag", query: { tid } });
    },
  },
};
</script>

<style lang="sass" scoped>
.no-hidden
  opacity: 1 !important
  visibility: visible !important

.context
  width: 100%
  height: 400px
  border-radius: 10px
  opacity: 0.7
  transition: 1s
  position: relative
  overflow: hidden
  margin-bottom: 40px

  &:hover
    box-shadow: 0 0 25px #adadad, 0 0 25px #adadad, 0 0 25px #adadad, 0 0 25px #adadad
    cursor: pointer

.bg-img
  position: absolute
  z-index: -10
  border-radius: 10px
  width: 100%
  height: 100%
  object-fit: cover
  transition: 0.5s

.title
  width: 100%
  font-size: $font-size-bg
  text-align: center
  color: #0c4e6f
  transition: 0.3s
  position: absolute
  white-space: nowrap
  top: 150px

.summary
  opacity: 0
  transition: 0.3s
  font-size: 25px
  position: absolute
  bottom: 100px
  left: 30px

@media screen and (max-width: 450px)
  .title
    font-size: 2rem
  .summary
    font-size: $font-size-sm

.info
  position: absolute
  bottom: 10px
  left: 30px
  width: 90%
  padding-top: 10px
  border-top: 1.5px solid #515151
  white-space: nowrap
  color: #515151
  opacity: 0
  transition: 0.5s
  display: flex
  align-items: center

  & img
    margin-right: 7px
    width: 20px
    height: 20px

  & span
    margin-right: 30px
    font-size: 20px

.context:hover .title
  top: 120px
  font-size: 50px

.context:hover .bg-img
  filter: blur(1px)
  transform: scale(1.1)

.context:hover .summary
  opacity: 1

.context:hover .info
  opacity: 1

.tag
  display: inline-block
  vertical-align: middle
  background-color: #ececec
  border-radius: 5px
  padding: 2px 8px
  margin-right: 10px
  transition: 0.2s

  &:hover
    background-color: #cccccc
</style>