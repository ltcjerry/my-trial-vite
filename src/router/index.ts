import type { App } from 'vue'
import {
    createRouter, 
    createWebHistory, 
    RouteRecordRaw
} from 'vue-router'
import excludeLayout from './excludeLayout'

declare module 'vue-router' {
    interface RouteMeta {
        title: string,
        transition?: string
    }
}

const routes: Array<RouteRecordRaw> = [
    {
        name: 'layout',
        path: '/',
        redirect: '/dashboard',
        component: () => import(/* webpackChunkName: "layout" */ '@/layout/Index.vue'),
        meta: { title: '首页', transition: 'animate__animated animate__fadeIn' },
        children: []
    },
    ...excludeLayout
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export async function setupRouter(app: App) {
    app.use(router)
    await router.isReady()
}

export default router