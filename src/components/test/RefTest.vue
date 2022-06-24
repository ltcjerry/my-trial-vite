<template>
    <div>
        <span class="mr-16">ref值：{{test1}}</span>
        <button @click="changeMsg">切换值</button>
    </div>
    <div>Ref声明类型：{{test2}}</div>
    <div>是否是ref对象：{{isRefType}}</div>
    <div>
        <span class="mr-16">浅ref对象：{{shallowRefVal.type}}</span>
        <button class="mr-16" @click="changeShallow">切换值</button>
        <button @click="forceUpdate">强制更新</button>
    </div>
    <div>
        <span class="mr-16">自定义Ref：{{customeMsg}}</span>
        <button @click="changeCustomeRef">改变自定义Ref值</button>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref, shallowRef, triggerRef, customRef, isRef} from 'vue'
let test1 = ref<string | number>('普通ref')
let test2: Ref<string | number> = ref('ref类型')
const notRef:number = 10
const isRefType:boolean = isRef(notRef)
let shallowRefVal = shallowRef({type: '浅ref类型'}) 
const changeMsg = () => {
    test1.value = '响应变化'
}
const changeShallow = () => {
    shallowRefVal.value = {type: '响应了'}
}
const forceUpdate = () => {
    shallowRefVal.value.type = '这改变不了视图，但用了下面这个方法就行'
    triggerRef(shallowRefVal)
}

function MyRef<T>(value: T) {
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newValue) {
                trigger()
                value = newValue
            }
        }
    })
}

let customeMsg = MyRef('自定义Ref')
const changeCustomeRef = () => {
    customeMsg.value = '改变自定义Ref值'
}
</script>

<style>
.box {
    display: flex;
    width: 400px;
    margin: 100px auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.mr-16 {
    margin-right: 16px;
}
</style>
