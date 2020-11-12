<template>
  <div>
    <div class="top">
      <div>
        markdown
      </div>
      <div>
        效果
      </div>
    </div>
    <div class="note">
      <textarea
        name="content"
        id="content"
        v-model="content"
        @input="input"
      ></textarea>
      <div id="mark" v-html="mark"></div>
    </div>
    <div class="info">
      <input name="title" type="text" placeholder="标题" v-model="title"/>
      <br>
      <textarea name="summary" required placeholder="简介" v-model="summary"/>
    </div>
    <div class="bottom">
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai-sublime.css";

import { addBlog } from "@/network/blog.js";

export default {
  data() {
    return {
      content: "",
      mark: "",
      title:"",
      summary: ""
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
    this.mark = marked(this.content);
    //hljs.initLineNumbersOnLoad();
  },
  methods: {
    input() {
      this.mark = marked(this.content);
    },
    submit() {
      addBlog(this.title, this.summary, this.content)
    },
  },
};
</script>

<style scoped>
input::-webkit-input-placeholder {
	color: #CCC;
	font-size: 14px;
}

input {
	border: none;
	outline: none;
	font-size: 25px;
  width: 80%;
	height: 30px;
  margin: 10px 0px;
	border-bottom: 3px solid #66ccff;
}

li {
  list-style: decimal;
}

button {
  width: 250px;
	height: 40px;
  cursor: pointer;
	background: linear-gradient(120deg, #0c6dad, #bb5fe2);
}


.info {
  text-align: center;
}

.info textarea{
  width: 80%;
	height: 300px;
  margin: 10px 0px;
	border-bottom: 3px solid #66ccff;
}

.bottom {
  font-size: 30px;
  text-align: center;
  line-height: 49px;
}

.note {
  margin: 0 auto;
  width: 80%;
  display: flex;
  height: calc(100vh - 98px);
}

#mark {
  flex: 1;
  background: #f5f5f5;
  font-size: 26px;
  overflow: auto;
}

#content {
  flex: 1;
  background: #00ccff;
  border: 0;
  font-size: 2em;
}

#content:focus {
  outline: 0;
}

.top {
  line-height: 49px;
  width: 80%;
  margin: 0 auto;
  display: flex;
}

.top div {
  width: 50%;
  text-align: center;
  font-size: 25px;
}

</style>