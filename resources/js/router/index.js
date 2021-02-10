import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '../views/FrontPage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'front',
        component: FrontPage
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: { hideForAuth: true }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue'),
        meta: { hideForAuth: true }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: { requiresAuth: true }
    },
]

//     {
//       path: '/dashboard',
//       name: 'dashboard',
//       component: () => import('../views/Dashboard.vue'),
//       meta: { requiresAuth: true }
//     }

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')

    if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next('/')
    }
      next()

    if (to.matched.some(record => record.meta.hideForAuth) && loggedIn) {
      next({ path: '/home' })
    }
      next()

  })

export default router
