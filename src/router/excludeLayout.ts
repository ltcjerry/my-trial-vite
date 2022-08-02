import type { RouteRecordRaw} from 'vue-router'

export const LoginRoute: RouteRecordRaw = {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Index.vue'),
    meta: { title: '登录', transition: 'animate__animated animate__fadeIn' }
}

export const MapRoute: RouteRecordRaw =  {
    name: 'gaode',
    path: '/map',
    component: () => import('../views/map/Index.vue'),
    meta: { title: '高德地图', transition: 'animate__animated animate__fadeIn' }
}

export default [ LoginRoute, MapRoute ]