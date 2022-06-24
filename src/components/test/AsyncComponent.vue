<template>
    <div class="box">
        <h4>异步加载组件</h4>
        <Suspense>
            <template #default>
                <life-cycle></life-cycle>
            </template>
            <template #fallback>
                <span>loading</span>
            </template>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
import { Suspense, defineAsyncComponent } from 'vue'
const LifeCycle = defineAsyncComponent(() => import('./LifeCycle.vue'))
</script>
