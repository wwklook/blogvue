import { createRouter, createWebHistory } from 'vue-router'

// 一级页面
const Home = () =>
  import('@/views/Home.vue')
const Account = () =>
  import('@/views/Account.vue')


// 二级页面(Blog)
const Blog = () =>
  import('@/views/home/Blog.vue')
const Content = () =>
  import('@/views/home/Content.vue')
const Messages = () =>
  import('@/views/home/Messages.vue')
const Category = () =>
  import('@/views/home/Category.vue')
const Friends = () =>
  import('@/views/home/Friends.vue')
const MyComic = () =>
  import('@/views/home/MyComic.vue')


// 二级页面(Profile)
const AccountIndex = () =>
  import('@/views/account/Index.vue')
const AccountInfo = () =>
  import('@/views/account/Info.vue')
const AccountFace = () =>
  import('@/views/account/Face.vue')


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
  }, {
    path: 'friends',
    name: 'Friends',
    component: Friends
  }, {
    path: 'mycomic',
    component: MyComic
  }, {
    path: 'mycomic/:id',
    component: MyComic
  }],
}, {
  path: '/account',
  name: 'Account',
  component: Account,
  children: [{
    path: 'index',
    name: 'AccountIndex',
    component: AccountIndex
  }, {
    path: 'info',
    name: 'AccountInfo',
    component: AccountInfo
  }, {
    path: 'face',
    name: 'AccountFace',
    component: AccountFace
  }],
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router