import { createPinia } from 'pinia'
import type { App } from 'vue'

const store = createPinia()

export { store }

export function setupStore(app: App) {
    app.use(store)
}