import { createRouter, createWebHistory } from 'vue-router'


const Home = () =>
    import ('../views/Home.vue')
const Blog = () =>
    import ('../views/home/Blog.vue')
const Content = () =>
    import ('../views/home/Content.vue')
const WriteBlog = () =>
    import ('../views/WriteBlog.vue')


const routes = [{
        path: '/',
        name: 'Home',
        redirect: '/home' 
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: 'blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: 'content',
            name: 'Content',
            component: Content
        },]
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