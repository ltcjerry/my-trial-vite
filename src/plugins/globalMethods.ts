import type { App } from 'vue'

type Filters = {
    format: <T>(str: T) => string
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters: Filters,
        $loading: {
            show: () => void,
            hidden: () => void
        }
    }
}

// 挂载全局方法
export function setupGlobalMethods(app: App) {
    app.config.globalProperties.$filters = {
        format<T>(val: T): string {
            return `全局过滤器: ${val}`
        }
    }
    app.config.globalProperties.Reflect = Reflect;
}