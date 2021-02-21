<template>
  <div class="category">
    <ul>
      <li v-for="article in articles" :key="article.blog_id">
        <article-item :data="article" />
      </li>
    </ul>
  </div>
</template>
<script>
import { getArticleCategory } from "@/network/blog.js";
import ArticleItem from "@/components/blog/ArticleItem.vue";
export default {
  components: { ArticleItem },
  data() {
    return {
      articles: [],
    };
  },
  watch: {
    $route(to, from) {
      if (to.name !== "Category") return
      getArticleCategory(to.params.id).then((res) => {
        this.articles = res.data.data;
      });
    },
  },
  created() {
    getArticleCategory(this.$route.params.id).then((res) => {
      this.articles = res.data.data;
    });
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>