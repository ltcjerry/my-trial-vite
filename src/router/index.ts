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
        redirect: '/map'
    },
    {
        path: '/map',
        component: () => import('../views/map/Index.vue'),
        meta: { title: '高德地图', transition: 'animate__animated animate__fadeIn' }
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
    if (true) {
        next()
    } else {
        next('/')
    }
})

router.afterEach((to, from) => {
    
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