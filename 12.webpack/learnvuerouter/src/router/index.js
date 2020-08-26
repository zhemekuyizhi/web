import VueRouter from 'vue-router'
import Vue from 'vue'

/* import Home from '../components/Home'
import About from '../components/About' */

const Home = () =>
    import ('../components/Home')
const About = () =>
    import ('../components/About')
const User = () =>
    import ('../components/User')
const Homenews = () =>
    import ('../components/Homenews')
const Homemessage = () =>
    import ('../components/Homemessage')
const Profile = () =>
    import ('../components/Profile')

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            /* {
                            path: '',
                            redirect: 'news'
                        }, */
            {
                path: 'news',
                component: Homenews
            },
            {
                path: 'message',
                component: Homemessage
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/user/:userId',
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '文档'
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history' //要加引号
})

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next() //这行代码不能忘
})

export default router