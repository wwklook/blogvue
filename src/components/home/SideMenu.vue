<template>
  <div class="blog-smaller-menu" v-show="isShow">
    <div class="left-menu">
      <div class="mine">
        <div class="head">
          <img
            src="https://i0.hdslb.com/bfs/face/member/noface.jpg@150w_150h.jpg"
          />
          <div class="my-name">无聊look</div>
        </div>
        <div class="my-info">
          <div class="info-item">
            <div class="info-name">文章</div>
            <div class="num">{{ site_info.article_num }}</div>
          </div>
          <div class="info-item">
            <div class="info-name">标签</div>
            <div class="num">{{ site_info.tag_num }}</div>
          </div>
          <div class="info-item">
            <div class="info-name">阅读数</div>
            <div class="num">{{ site_info.read_number }}</div>
          </div>
        </div>
      </div>
      <ul>
        <li class="menu-li" @click="toHome">
          <div class="menu-title">
            <img src="@/assets/home/home.png" title="主页" />主页
          </div>
        </li>
        <li
          class="menu-li"
          v-for="category in categories"
          :key="category.category_id"
        >
          <div class="menu-title">{{ category.category_name }}</div>
          <ul class="menu-sub">
            <li
              class="menu-sub-item"
              v-for="sub in category.sub_category"
              :key="sub.id"
              @click="toCategory(sub.id)"
            >
              {{ sub.name }}
            </li>
          </ul>
        </li>
        <div class="menu-li">
          <div class="menu-title">其他</div>
          <ul class="menu-sub">
            <li class="menu-sub-item" @click="toMessage">留言</li>
          </ul>
        </div>
      </ul>
    </div>
    <div class="right-cover" @click="hideMenu"></div>
  </div>
</template>

<script>
import { getSiteInfo } from "@/network/blog.js";
export default {
  name: "SideMenu",
  props: ["isShow", "categories"],
  data() {
    return {
      site_info: {},
    };
  },
  created() {
    getSiteInfo().then((res) => {
      this.site_info = res.data;
    });
  },
  mounted() {},
  methods: {
    toCategory(id) {
      this.$router.push("/home/category/" + id);
      this.hideMenu();
    },
    toHome() {
      this.$router.push("/home/content");
      this.hideMenu();
    },
    toMessage() {
      this.$router.push("/home/messages");
    },
    hideMenu() {
      this.$emit("hideMenu");
    },
  },
};
</script>

<style scoped>
.mine {
  width: 100%;
  height: 250px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.head {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #66ccff;
  font-size: 25px;
}

.head img {
  margin-top: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: 0.5s;
  cursor: pointer;
}

.head img:hover {
  transform: rotate(1turn);
}

.my-name {
  color: #66ccff;
  margin: 10px 0;
}

.my-info {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.info-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #003661;
}

.num {
  font-size: 1.1rem;
  font-weight: bold;
  color: #003661;
}

.blog-smaller-menu {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
}

.left-menu {
  width: 70%;
  height: auto;
  background-color: #eaeaea;
  overflow-y: auto;
  overflow-x: hidden;
}

.right-cover {
  flex: 1;
  background-color: #000000;
  opacity: 0.2;
}

.menu-li {
  background-color: #fff;
  transition: 1s;
  z-index: 1;
}

.menu-title {
  color: #003661;
  padding: 10px;
  font-size: 20px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  align-items: center;
}

.menu-title img {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}

.menu-sub {
  width: 100%;
  padding-left: 10px;
  color: #68b4da;
}

.menu-li:hover {
  height: 100%;
}

.menu-sub-item {
  padding: 5px;
  border-bottom: 1px solid #dadada;
}
</style>>