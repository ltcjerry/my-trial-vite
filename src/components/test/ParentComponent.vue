<template>
    <div class="box">
        <span>父级组件</span>
        <!-- <child-component ref="child" @on-accept="getdata"/> -->
        <slot-test>
            <template v-slot:header>
               <div>我是头部插槽</div>
            </template>
            <template v-slot="{data}">
                <div>默认插槽,{{data}}</div>
            </template>
            <template v-slot:footer>
               <div>我是尾部插槽</div>
            </template>
            <template #[slotName]>
                <div>动态插槽</div>
            </template>
        </slot-test>
    </div>
</template>

<script setup lang="ts">
import ChildComponent from './ChildComponent.vue'
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue';
import SlotTest from './SlotTest.vue';
console.log('setUp')
const child = ref(null)
const slotName = ref('other')
const getdata = (data: unknown) => {
    console.log('获取子级传送的数据', data)
}
onBeforeMount(() => {
    console.log('挂载之前 => onBeforeMount')
})
onMounted(() => {
    console.log('挂载完成:onMounted', '获取子级实例', child)
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
