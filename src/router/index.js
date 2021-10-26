import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/nosotros',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/books',
        name: 'Books',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Books.vue')
    },
    {
        path: '/users',
        name: 'Users',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Users.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router