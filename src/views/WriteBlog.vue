<template>
  <div>
    <div class="top">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      markdown
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

import { postBlog } from "@/network/blog.js";

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
      // addBlog
      // console.log(this.content);
      // console.log(this.mark);
      addBlog(this.title, this.summary, this.content)
    },
  },
};
</script>

<style scoped>
textarea {
  resize: none;
  border: none;
	outline: none;
	font-size: 25px;
}


input::-webkit-input-placeholder {
	color: #CCC;
	font-size: 14px
}

input {
	border: none;
	outline: none;
	font-size: 25px;
  width: 100%;
	height: 30px;
  margin: 10px 0px;
	border-bottom: 3px solid #66ccff;
}

button {
  width: 250px;
	height: 40px;
  cursor: pointer;
	background: linear-gradient(120deg, #0c6dad, #bb5fe2);
}

.info textarea{
  width: 100%;
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
  text-align: center;
  position: relative;
  color: #03e9f4;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
}

.top span {
  position: absolute;
}

.top span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: animate1 1s linear infinite;
}

.top span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}

.top span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}

.top span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>