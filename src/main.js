import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hljs from "highlight.js";

const app = createApp(App)

app.use(store).use(router).mount('#app')


app.directive("highlight", function(el) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach(block => {
        hljs.highlightBlock(block);
        console.log(block.parentNode.clientHeight);
        const linesLength = (block.parentNode.clientHeight - 14) / 15

        let linesNum = '<span aria-hidden="true" class="line-numbers-rows">';
        for (let index = 0; index < linesLength; index++) {
            linesNum = linesNum + "<span></span>";
        }
        linesNum += "</span>";
        block.parentNode.innerHTML = block.parentNode.innerHTML + linesNum;
    });
});