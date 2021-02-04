<template>
  <div class="blog-header">
    <div class="blog-header-left" v-if="!isSmallScreen">
      <div class="home">
        <img src="@/assets/home/home.png" title="主页" @click="toHome" />
      </div>
      <ul class="categories">
        <li
          class="category"
          v-for="category in categories"
          :key="category.category_id"
        >
          {{ category.category_name }}
          <ul class="sub">
            <li
              class="sub-item"
              v-for="sub in category.sub_category"
              :key="sub.id"
              @click="toCategory(sub.id)"
            >
              {{ sub.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="blog-smaller" v-if="isSmallScreen">
      <img
        class="left-menu-img"
        src="@/assets/home/choose.svg"
        title="菜单"
        @click="showMenu"
      />
      <div class="blog-smaller-menu" v-show="isShowMenu">
        <div class="left-menu">
          <ul class="">
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
          </ul>
        </div>
        <div class="right-cover" @click="hideMenu"></div>
      </div>
    </div>
    <login />
  </div>
</template>
<script>
import { getCategory } from "@/network/blog.js";
import Login from "@/components/home/Login.vue";

export default {
  name: "Headers",
  components: { Login },
  data() {
    return {
      categories: [],
      isShowMenu: false,
    };
  },
  computed: {
    isSmallScreen() {
      return this.$store.state.isSmallScreen;
    },
  },
  mounted() {
    getCategory().then((res) => {
      this.categories = res.data.categories;
    });
  },
  methods: {
    toCategory(id) {
      this.$router.push("/home/category/" + id);
      this.hideMenu();
    },
    toHome() {
      this.$router.push("/home/content");
      this.hideMenu();
    },
    showMenu() {
      this.isShowMenu = true;
    },
    hideMenu() {
      this.isShowMenu = false;
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

ul {
  padding: 0;
  margin: 0;
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
  width: 50%;
  height: auto;
  background-color: #eaeaea;
  border: 1.5px solid #66ccff;
  overflow-y: auto;
  overflow-x: hidden;
}

.right-cover {
  flex: 1;
  background-color: #000000;
  opacity: 0.2;
}

.blog-header {
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: relative;
  z-index: 99;
}

.menu-li {
  position: relative;
  background-color: #fff;
}

.menu-title {
  background-color: #00aaff;
  padding: 10px;
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
  background-color: #68b4da;
  visibility: hidden;
  position: absolute;
}

.menu-li:hover .menu-sub {
  position: relative;
  visibility: visible;
}

.menu-sub-item {
  padding: 5px;
  border-bottom: 1px solid #dadada;
}

.blog-header-left {
  width: 100%;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  opacity: 0.7;
}

.home {
  margin-left: 15px;
  padding-right: 10px;
  border-right: 2px solid #66ccff;
}

.home img {
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.label {
  position: relative;
  margin-left: 30px;
  color: #66ccff;
  font-size: 25px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.categories {
  display: flex;
  margin-left: 20px;
}

.category {
  color: #000;
  font-size: 22px;
  transition: 0.5s;
  margin: 20px 10px;
  cursor: pointer;
  position: relative;
}

.category:hover .sub {
  visibility: visible;
  opacity: 1;
}

.sub {
  visibility: hidden;
  background-color: #666666;
  opacity: 0;
  transition: opacity 0.4s;
  border-radius: 12px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px -1px 5px 2px #000;
}

.sub::after {
  width: 0;
  height: 0px;
  content: "";
  border-style: solid;
  border-width: 10px;
  border-color: #666666 #666666 transparent transparent;
  transform: rotate(-45deg);
  box-shadow: 2px -2px 2px #000;
  position: absolute;
  top: -10px;
  left: calc(50% - 10px);
}

.sub-item {
  white-space: nowrap;
  padding: 5px 20px;
  font-size: 20px;
  color: #fff;
}

.sub-item:hover {
  color: #66ccff;
}
</style>