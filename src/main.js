import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hljs from "highlight.js";
import { isLogin, getUserInfo } from "@/network/blog";

const app = createApp(App);

app.config.productionTip = false;
app.use(store).use(router).mount('#app');

app.$store = store;
app.directive("highlight", function (el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
    const linesLength = (block.parentNode.clientHeight - 14) / 15

    let linesNum = '<span aria-hidden="true" class="line-numbers-rows">';
    for (let index = 0; index < linesLength; index++) {
      linesNum = linesNum + "<span></span>";
    }
    linesNum += "</span>";
    block.parentNode.innerHTML = block.parentNode.innerHTML + linesNum;
  });
});


window.onresize = () => {
  return (() => {
    let isSmallScreen = document.body.clientWidth < 950 ? true : false;
    store.commit("changeScreenState", isSmallScreen);
  })();
};



// 查看登录状态 并获取数据
isLogin().then(res => {
  if (res.data == "yes") {
    store.commit("changeLoginState", true);
    // 如果登录 获取用户信息
    getUserInfo().then(res => {
      store.commit("changeUserInfo", res.data);
    })
  } else {
    console.log("Not logged in, welcome to '/login.html'");
  }
})
