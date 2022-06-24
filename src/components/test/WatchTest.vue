<template>
    <div class="box">
        <input v-model="firstName"/>
        <input v-model="lastName"/>
        <input v-model="obj.other.name"/>
        <input v-model="obj2.other.name"/>
        <button @click="onchange">改变</button>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive, watch, watchEffect} from 'vue'
let firstName = ref<string>('li')
let lastName = ref<string>('jerry')
let obj = ref({name: 'jerry', other: {name: 'test'}})
let obj2 = reactive({name: 'tom', other: {name: 'no'}})
watch(firstName, (newVal, oldVal) => {
    console.log('监听单个源', newVal, oldVal)
})
watch([firstName, lastName], (newVal, oldVal) => {
    console.log('监听多个源', newVal, oldVal)
})
watch(obj, (newVal, oldVal) => {
    console.log('深层监听与立即执行', newVal, oldVal)
}, {deep: false, immediate: true})
watch(obj2, (newVal, oldVal) => {
    console.log('reactive不需要设置deep也能监听到', newVal, oldVal)
})
watch(() => obj2.name, (newVal, oldVal) => {
    console.log('监听响应对象的某个属性', newVal, oldVal)
})
const onchange = () => {
    obj2.name = 'jerry'
}
</script>
