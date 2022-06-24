<template>
    <div class="box">
        <div>
            <span class="mr-16">普通对象：{{commonObj}}</span>
            <button @click="changeCommon">改变值</button>
        </div>
        <div>
            <span class="mr-16">浅响应：{{shallowObj}}</span>
            <button class="mr-16" @click="changeOut">改变外层</button>
            <button @click="changeDeep">改变内层</button>
        </div>
        <div>
            <span><span class="mr-16">原始对象：{{reactiveObj}}</span></span>
            <span class="mr-16">只给某个对象的某个属性添加响应：{{singleAttr}}</span>
            <button @click="changeSingleAttr">改变值</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, toRefs, toRaw, readonly, shallowReactive, toRef} from 'vue'
const commonObj = reactive({ foo: 1, bar: 2 })
const changeCommon = () => {
    // 不能直接把commonObj重新赋值，会破坏响应性
    commonObj.foo = 10
    commonObj.bar = 20
}
const onlyRead = readonly(commonObj)
console.log('只能读，不能改', onlyRead.foo)

const shallowObj = shallowReactive({
    level: '最外层属性',
    deep: { level: '深层属性'}
})
const changeOut = () => {
    shallowObj.level = '最外层属性值修改有效'
}
const changeDeep = () => {
    shallowObj.deep.level = '内层属性值修改有效，但视图不响应'
}
const original = {a: 1, b: 2}
const reactiveObj = reactive(original)
const singleAttr = toRef(reactiveObj, 'a')
const changeSingleAttr = () => {
    singleAttr.value = 10
    console.log('原始对象', reactiveObj)
    console.log('某个属性Ref对象', singleAttr)
}
const {a, b} = toRefs(reactiveObj)
console.log('解构赋值', a, b)

const raw = toRaw(reactiveObj)
console.log('原始对象', raw)
</script>
