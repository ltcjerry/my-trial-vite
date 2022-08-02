import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { 
    setupAntd, 
    setupAssets, 
    setupPlugins,
    setupDirectives,
    setupComponents,
    setupGlobalMethods,
} from '@/plugins'

const app = createApp(App)

function setupMyplugin() {
    setupAssets()
    setupAntd(app)
    setupPlugins(app)
    setupComponents(app)
    setupDirectives(app)
    setupGlobalMethods(app)
}

function setupApp() {
    setupStore(app)
    setupRouter(app)
    app.mount('#app')
}

setupMyplugin()
setupApp()
