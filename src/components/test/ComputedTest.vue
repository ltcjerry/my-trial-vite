<template>
    <div class="box">
        <input v-model="firstName"/>
        <input v-model="lastName"/>
        <div>普通计算属性：{{name}}</div>
        <div>可写计算属性：{{writeName}}</div>
        <div>带参数计算属性：{{witdhParamCalc(1996)}}</div>
        <button @click="onchange">改变</button>
    </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
let firstName = ref<string>('li')
let lastName = ref<string>('jerry')
// 普通计算属性
const name = computed(() => {
    return firstName.value + ' ' + lastName.value
})
// 可写计算属性
let writeName = computed({
    get() {
        return firstName.value + ' ' + lastName.value
    },
    set(nickName: string) {
       lastName.value = nickName
    }
})
// 带参数计算属性
let witdhParamCalc = computed(() => {
    return (params: unknown) => {
        return params ? name.value + ' ' + params : name
    }
})
const onchange = () => {
    writeName.value = '测试名称'
}
</script>
