import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import {loading} from './plugins/index'
const store = createPinia()
const app = createApp(App)
app.use(store)
app.use(router)
app.use(loading)
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

app.config.globalProperties.$filters = {
    format<T>(val: T): string {
        return `test: ${val}`
    }
}
app.mount('#app')
