import { App, createVNode, render, VNode } from "vue";
import Loading from "../components/test/Loading.vue";
export const loading = {
    install(app: App) {
        const vNode: VNode = createVNode(Loading)
        render(vNode, document.body)
        app.config.globalProperties.$loading = {
            show: vNode.component?.exposed?.show,
            hidden: vNode.component?.exposed?.hidden
        }
    }
}