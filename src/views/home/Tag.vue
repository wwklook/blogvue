<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.blog_id">
        <article-item :data="article" />
      </li>
    </ul>
    <pagination :total="total" :pn="pn" :rn="5" @changePage="changePage" />
  </div>
</template>

<script>
import { getArticleTag } from "@/network/blog.js";
import Pagination from "@/components/common/Pagination.vue";
import ArticleItem from "@/components/blog/ArticleItem.vue";
export default {
  name: "Tag",
  components: {
    ArticleItem,
    Pagination,
  },
  data() {
    return {
      articles: [],
      pn: 1,
      total: 0,
    };
  },
  watch: {
    "$route.query.tid"() {
      if (this.$route.name !== 'Tag') return
      this.changePage(1)
    },
  },
  created() {
    this.changePage(1)
  },
  methods: {
    changePage(pn) {
      let tid = this.$route.query.tid;
      getArticleTag(pn, tid).then((res) => {
        this.articles = res.data.data;
        this.total = res.data.total;
        this.pn = pn;
        window.scrollTo(0, 0);
      });
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>