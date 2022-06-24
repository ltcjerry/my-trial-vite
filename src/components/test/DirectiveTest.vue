<template>
  <div>
    <span>指令</span>
    <button @click="doChange">双向绑定指令</button>
    <div>过滤器：{{$filters.format('我是渣男')}}</div>
    <ChildComponent 
        v-model.custome="isShow" 
        v-model:test="content"
        v-move="{color: '#999'}"
    ></ChildComponent>
  </div>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding } from 'vue';
import ChildComponent from './ChildComponent.vue';
const isShow = ref(false)
const content = ref('测试双向数据绑定')
const doChange = () => {
    isShow.value = !isShow.value
}
const vMove:Directive = {
    created() {
        console.log('created----')
    },
    beforeMount() {
        console.log('beforeMounted----')
    },
    mounted() {
        console.log('mounted----')
    },
    beforeUpdate() {
        console.log('beforeUpdate----')
    },
    updated() {
        console.log('updated----')
    },
    beforeUnmount() {
        console.log('beforeUnmount----')
    },
    unmounted() {
        console.log('unmounted----')
    }
}
// 指令简写包含mounted和updated
const vFocus: Directive = (el:HTMLElement, binding: DirectiveBinding) => {

}
</script>

<style>

</style>
