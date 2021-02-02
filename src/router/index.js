import { createRouter, createWebHistory } from 'vue-router'


const Home = () =>
  import('../views/Home.vue')
const Blog = () =>
  import('../views/home/Blog.vue')
const Content = () =>
  import('../views/home/Content.vue')
const Messages = () =>
  import('../views/home/Messages.vue')
const Category = () =>
  import('../views/home/Category.vue')


const routes = [{
  path: '/',
  redirect: '/home/content'
}, {
  path: '/home',
  name: 'Home',
  redirect: '/home/content',
  component: Home,
  children: [{
    path: 'blog/:id',
    name: 'Blog',
    component: Blog
  }, {
    path: 'content',
    name: 'Content',
    component: Content
  }, {
    path: 'messages',
    name: 'Messages',
    component: Messages
  }, {
    path: 'category/:id',
    name: 'Category',
    component: Category
  }
  ]
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router