<template>
    <div class="box">
        <input id="test" v-model="msg1"/>
        <input v-model="msg2"/>
        
        <button @click="onchange">停止监听</button>
    </div>
</template>

<script setup lang="ts">
import {ref, watchEffect} from 'vue'
let msg1 = ref<string>('li')
let msg2 = ref<string>('jerry')
const stopListen = watchEffect((onInvalidate) => {
    // 首次不执行，停止监听后仅它会再执行一次
    onInvalidate(() => {
        console.log('before: 有点类似为初始化')
    })
    console.log('message', msg1.value, msg2.value)
})
watchEffect(() => {
    console.log('msg1', msg1.value)
    const el: HTMLElement = document.getElementById('test') as HTMLElement
    console.log('dom', el)
}, {
    flush: 'post', 
    onTrack(e) {
        debugger
    },
    onTrigger(e) {
        debugger
    }
})
const onchange = () => stopListen()
</script>
