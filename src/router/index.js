import { createRouter, createWebHistory } from 'vue-router'


const home = () =>
    import ('../views/Home.vue')
const Blog = () =>
    import ('../views/Blog.vue')
const WriteBlog = () =>
    import ('../views/WriteBlog.vue')


const routes = [{
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/writeblog',
        name: 'WriteBlog',
        component: WriteBlog
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router