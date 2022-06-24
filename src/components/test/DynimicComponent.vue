<template>
    <div class="box">
        <h4>动态组件</h4>
        <ul>
            <li v-for="(item, index) of tabs" :key="index" @click="doChange(item)">
                {{item.name}}
            </li>
        </ul>
        <!-- 实例组件绑定 -->
        <!-- <component :is="curComponent.component"></component> -->
        <!-- 字符串绑定 -->
        <component :is="curComponent.code"></component>
    </div>
</template>

<script setup lang="ts">
import { reactive, markRaw } from 'vue'
import ReactiveTest from './ReactiveTest.vue'
import RefTest from './RefTest.vue'
interface Tab { name: string, component: any, code?: string }
type ComType = Pick<Tab, 'component'|'code'>
const tabs = reactive<Tab[]>([
    { name: 'A组件', component: markRaw(ReactiveTest), code: 'reactive' },
    { name: 'B组件', component: markRaw(RefTest), code: 'ref' },
])
let curComponent = reactive<ComType>({ component: tabs[0].component, code: tabs[0].code})
const doChange = (item: Tab) => {
    curComponent.component = item.component
    curComponent.code = item.code
}
</script>
<script lang="ts">
export default {
    components: {
        reactive: ReactiveTest,
        ref: RefTest
    }
}
</script>
