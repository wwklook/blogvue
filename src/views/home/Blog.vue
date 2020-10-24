<template>
    <div class="topics">
      <div class="header">
      </div>
      <div v-html="content" v-highlight></div>
    </div>
</template>

<script>
// import 'highlightjs-line-numbers.js/src/highlightjs-line-numbers.js';
import marked from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai-sublime.css";

import { getBlogContent } from "@/network/blog.js";
        
export default {
  data() {
    return {
      data: {},
      content: ''
    };
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        // hjls.initLineNumbersOnLoad()
        // console.log(hljs.lineNumbersBlock(hljs.highlightAuto(code).value));
        return hljs.highlightAuto(code).value;
        
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    this.content = marked(this.content);
    //hljs.initLineNumbersOnLoad();
  },
  created() {
    let blog_id = this.$route.params.id;
    getBlogContent(blog_id).then(res => {
      this.data = res.data.data;
      this.content = marked(this.data.content);
    })
  }
};
</script>

<style scoped>
.topics {
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
}
</style>