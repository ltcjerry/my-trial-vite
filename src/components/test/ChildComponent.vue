<template>
    <div v-if="modelValue" class="box">
        <span>孩子组件</span>
        <div>父级传递数据：{{title}}</div>
        <div>双向数据绑定自定义参数：{{test}}</div>
        <button @click="onEmit">子传父级</button>
        <button @click="onClose">关闭</button>
        <button @click="onChange">改变值</button>
    </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
type Props = {
    title?: string, 
    modelValue?: boolean, 
    test?: string,
    modelModifiers?: {
        custome?: unknown
    }
}
const props = withDefaults(defineProps<Props>(), {
    title: '我是默认值',
    modelValue: true,
    test: 'model自定义参数'
})
console.log('props', props.modelModifiers)
const emit = defineEmits(['on-accept', 'update:modelValue', 'update:test'])
defineExpose({
    title: 'test'
})
const onEmit = () => {
    emit('on-accept', {name: 'jerry'})
}
const onClose = () => {
    emit('update:modelValue', false)
}
const onChange = () => {
    emit('update:test', '改变双向绑定自定义参数值')
}
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
