<template>
  <div
    class="blog-header"
    :class="{ 'header-color': !isTop || !isContent, 'hide-header': isUp }"
  >
    <div class="blog-header-left" v-if="!isSmallScreen">
      <div class="to-home">
        <img src="@/assets/home/home.png" title="主页" @click="toHome" />
      </div>
      <ul class="categories">
        <li
          class="menu-item"
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
      <div class="menu-item" @click="toFriends">友链</div>
      <div class="menu-item">
        其他
        <ul class="sub">
          <li class="sub-item" @click="toMessage">留言</li>
          <li class="sub-item" @click="toComic">我的追番</li>
        </ul>
      </div>
    </div>
    <div class="blog-smaller" v-if="isSmallScreen">
      <img
        class="left-menu-img"
        src="@/assets/home/menu.png"
        title="菜单"
        @click="showMenu"
      />
      <side-menu
        :isShow="isShowMenu"
        :categories="categories"
        @hideMenu="hideMenu"
      />
    </div>
    <login />
  </div>
</template>
<script>
import { getCategory } from "@/network/blog.js";
import Login from "@/components/home/Login.vue";
import SideMenu from "@/components/home/SideMenu.vue";

export default {
  name: "Headers",
  components: { Login, SideMenu },
  data() {
    return {
      categories: [],
      isShowMenu: false,
      oldscroll: 0,
      isUp: false,
      isTop: true,
    };
  },
  computed: {
    isSmallScreen() {
      return this.$store.state.isSmallScreen;
    },
    isContent() {
      return this.$route.name === "Content";
    },
  },
  mounted() {
    getCategory().then((res) => {
      this.categories = res.data.categories;
    });
    window.addEventListener("scroll", this.handleScroll);
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
    toMessage() {
      this.$router.push("/home/messages");
    },
    toFriends() {
      this.$router.push("/home/friends");
    },
    toComic() {
      this.$router.push("/home/mycomic");
    },
    showMenu() {
      this.isShowMenu = true;
      document.body.style.overflow = "hidden";
    },
    hideMenu() {
      this.isShowMenu = false;
      document.body.style.overflow = "auto";
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isTop = scrollTop === 0;
      this.isUp = scrollTop > this.oldscroll;
      this.oldscroll = scrollTop;
    },
  },
};
</script>

<style scoped>
.header-color {
  background-color: #87909a;
}

.hide-header {
  transform: translateY(-100%);
}

.blog-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition: 0.5s;
}

.blog-header-left {
  width: 100%;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  opacity: 0.7;
}

.left-menu-img {
  margin-left: 10px;
}

.to-home {
  margin-left: 15px;
  padding-right: 10px;
  border-right: 2px solid #fff;
}

.to-home img {
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

.menu-item {
  font-size: 22px;
  transition: 0.5s;
  padding: 20px 10px;
  cursor: pointer;
  position: relative;
}

.menu-item:hover .sub {
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
  top: 65px;
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
  text-align: center;
}

.sub-item:hover {
  color: #66ccff;
}
</style>