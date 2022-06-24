import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        title: string,
        transition?: string
    }
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('../components/test/Login.vue'),
        // components: {
        //     default: () => import('../components/test/Login.vue')
        // },
        meta: { title: '登录', transition: 'animate__animated animate__fadeIn' }
    },
    {
        path: '/register',
        component: () => import('../components/test/Register.vue'),
        // components: {
        //     default: () => import('../components/test/Register.vue'),
        //     pinia: () => import('../components/test/PiniaTest.vue')
        // },
        meta: { title: '注册', transition: 'animate__animated animate__fadeOut' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: (to,from, savePosition) => {
        console.log('scrollBehavior', savePosition)
        if (savePosition) {
            return savePosition
        } else {
            return { top: 0 }
        }
    },
    routes: routes
})

router.beforeEach((to, from, next) => {
    console.log('全局前置导航守卫-beforeEach')
    if (true) {
        next()
    } else {
        next('/')
    }
})

router.afterEach((to, from) => {
    console.log('全局后置导航守卫-afterEach')
})
// 动态添加路由
const addRoutes = async () => {
    const res: RouteRecordRaw[] = []
    res.forEach(item => {
        router.addRoute(item)
    })
    console.log(router.getRoutes())
}

export default router