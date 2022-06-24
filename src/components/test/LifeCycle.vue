<template>
    <div class="box">
        <span>生命周期钩子方法测试</span>
        <Teleport to="body">
            <span>弹窗</span>
        </Teleport>
        <div>{{count}}</div>
        <button @click="count++">增加</button>
    </div>
</template>

<script setup lang="ts">
import { Teleport,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue';
const count = ref(0)
console.log('setUp')
onBeforeMount(() => {
    console.log('挂载之前 => onBeforeMount')
})
onMounted(() => {
    console.log('挂载完成:onMounted')
})
onBeforeUpdate(() => {
    console.log('更新之前 => onBeforeUpdate')
})
onUpdated(() => {
    console.log('更新完成:onUpdated')
})
onBeforeUnmount(() => {
    console.log('卸载之前 => onBeforeUnmount')
})
onUnmounted(() => {
    console.log('卸载完成:onUnmounted')
})
</script>
