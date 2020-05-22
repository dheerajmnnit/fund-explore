import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("../views/pages/home.vue")
        },
        {
            path: "/funds",
            name: "funds.explore",
            component: () => import("../views/funds/list.vue")
        },
        {
            path: "/funds/:code",
            name: "funds.details",
            component: () => import("../views/funds/details.vue")
        }

    ]
})
