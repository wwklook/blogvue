<template>
  <div class="article">
    <div class="article-header">
      <h1 class="article-title">{{ data.title }}</h1>
      <div class="article-info">
        <img src="@/assets/blog/time.svg" title="创建时间" />
        <span> {{ formatTime(data.create_time) }}</span>
        <img src="@/assets/blog/watch.svg" title="阅读数" />
        <span> {{ data.read_number }}次阅读</span>
        <img src="@/assets/blog/comment.svg" title="评论数" />
        <span> {{ comment_total }}条评论</span>
        <img src="@/assets/blog/like.svg" title="点赞数" />
        <span> {{ data.like_number }}人点赞</span>
      </div>
    </div>
    <div v-html="content" v-highlight></div>
    <div class="article-footer">
      <div class="article-btn">
        <div class="btn" :class="{ active: isLike }" @click.once="likes">
          点赞
        </div>
        <div
          class="btn"
          :class="{ active: isShowCommentPost }"
          @click="showCommentPost"
        >
          评论
        </div>
      </div>
      <div class="article-tag">
        <div class="tags">
          <div class="tag" v-for="(v, k) in data.tags" :key="k">
            {{ v }}
          </div>
        </div>
        <div class="modified-time">
          <span>最后编辑于{{ formatTime(data.modified_time) }}</span>
        </div>
      </div>
    </div>
    <div class="comment" v-show="isShowCommentPost">
      <textarea
        name="comment"
        maxlength="30"
        v-model="comment"
        placeholder="请限制在30字以内"
      ></textarea>
      <button class="comment-btn" @click="postComment">发表评论</button>
    </div>

    <comment :comments="comments"/>
  </div>
</template>

<script>
// import 'highlightjs-line-numbers.js/src/highlightjs-line-numbers.js';
import marked from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai-sublime.css";

import {
  getBlogContent,
  addComment,
  getComment,
  clickLike,
} from "@/network/blog.js";

import Comment from "@/components/common/Comment.vue";

export default {
  components: {
    Comment
  },
  data() {
    return {
      data: {},
      content: "",
      comment: "", // 发表评论
      comments: [], // 评论列表
      comment_total: 0,
      isLike: false,
      aid: this.$route.params.id,
      isShowCommentPost: false,
    };
  },
  computed: {
    formatTime() {
      return function (str = "") {
        return str.replace("T", " ").slice(0, -4);
      };
    },
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
    getBlogContent(blog_id).then((res) => {
      this.data = res.data.data;
      this.content = marked(this.data.content);
    });
    this.getComments(blog_id);
  },
  methods: {
    postComment() {
      addComment(this.aid, this.comment).then((res) => {
        this.comment = "";
        this.getComments(this.aid);
      });
    },
    getComments(blog_id) {
      getComment(blog_id).then((res) => {
        this.comments = res.data.comments;
        this.comment_total = res.data.total;
      });
    },
    likes() {
      clickLike(this.aid).then((res) => {
        this.isLike = true;
      });
    },
    showCommentPost() {
      this.isShowCommentPost = !this.isShowCommentPost;
    },
  },
};
</script>

<style scoped>
.article {
  padding: 20px 30px;
  background-color: white;
  border-radius: 10px;
}

.article-title {
  text-align: center;
  padding-bottom: 20px;
}

.article-header {
  padding-bottom: 30px;
}

.article-info img {
  margin-right: 3px;
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.article-info span {
  vertical-align: middle;
  margin-right: 30px;
  font-size: 16px;
  color: #9a9a9a;
}

.article-btn {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
}

.article-footer {
  padding: 20px 0;
}

.article-tag {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  width: 43px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #66ccff;
  border-radius: 7px;
  color: #66ccff;
  cursor: pointer;
  padding: 10px 20px;
  transition: 0.2s;
}

.btn:hover {
  background-color: #66ccff;
  color: #fff;
}

.active {
  background-color: #66ccff;
  color: #fff;
}

.tag {
  display: inline-block;
  vertical-align: middle;
  background-color: #ececec;
  border-radius: 5px;
  padding: 2px 8px;
  margin-right: 10px;
  transition: 0.2s;
  cursor: pointer;
}

.tag:hover {
  background-color: #cccccc;
}

.modified-time {
  color: #9a9a9a;
}

.comment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.comment textarea {
  width: 100%;
  height: 200px;
  border: 1px solid #cccccc;
  border-radius: 10px;
}
.comment-btn {
  width: 80px;
  height: 30px;
  margin: 20px;
  background-color: #fff;
  cursor: pointer;
}

.article-comment {
  width: 100%;
  height: auto;
}

.user-info {
  display: flex;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #9a9a9a;
}

.user-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.uname {
  margin: 10px;
}

.comment-create-time {
  font-size: 14px;
  color: #9a9a9a;
}

.comment-text {
  margin: 20px;
}
</style>