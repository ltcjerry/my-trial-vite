<template>
    <div>
        <h3>过渡组件测试</h3>
        <button @click="state = !state">切换</button>
        <!-- 自定义css过渡 -->
        <!-- <transition name="fade">
            <div v-if="state" class="transition-x"></div>
        </transition> -->
        <!-- 自定义过渡类 -->
         <!-- <transition 
            enter-from-class="fade-enter-from"
            enter-active-class="fade-enter-active"
            enter-to-class="fade-enter-to"
            leave-from-class="fade-leave-from"
            leave-active-class="fade-leave-active"
            leave-to-class="fade-leave-to"
        >
            <div v-if="state" class="transition-x"></div>
        </transition> -->
        <!-- 结合第三方动画库 -->
         <!-- <transition
            :duration="{enter: 500, leave: 1000}"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <div v-if="state" class="transition-x"></div>
        </transition> -->
        <!-- 过渡内置生命周期 -->
        <!-- <transition
            @before-enter="doEnterFrom"
            @enter="doEnterActive"
            @after-enter="doEnterTo"
            @enter-cancelled="doEnterCancel"
            @before-leave="doLeaveFraom"
            @leave="doLeaveActive"
            @after-leave="doLeaveTo"
            @leave-cancelled="doLeaveCancel"
        >
            <div v-if="state" class="transition-x"></div>
        </transition> -->
        <!-- 组件加载时过渡动画 -->
        <!-- <transition
            appear
            appear-from-class="from"
            appear-active-class="active"
            appear-to-class="to"
        >
            <div v-if="state" class="transition-x"></div>
        </transition> -->
        <div class="num-x">
            <transition-group
                enter-active-class="animate__animated animate__bounceIn"
                leave-active-class="animate__animated animate__hinge"
            >
                <div v-for="num of list" :key="num" class="num">{{num}}</div>
            </transition-group>
        </div>
        <div>
            <button @click="doAdd">添加</button>
            <button @click="doDelete">删除</button>
        </div>
    </div>
    <div>
        <input v-model="num.current" type="number" step="20">
        <div>状态效果：{{num.showNumber.toFixed(0)}}</div>
    </div>
</template>

<script setup lang="ts">
import 'animate.css'
import gsap from 'gsap'
import { reactive, ref, watch } from 'vue';
let state = ref(true)
let num = reactive({
    current: 0,
    showNumber: 0
})
const list = reactive([0,1,2,3,4,5,6,7])
const doEnterFrom = (el: Element) => {
    console.log('组件加载之前')
    gsap.set(el, {
        width: 0,
        height: 0
    })
}
const doEnterActive = (el: Element, done: gsap.Callback) => {
    console.log('组件加载中')
    gsap.to(el, {
        width: 1000,
        height: 2000,
        onComplete: done
    })
}
const doEnterTo = (el: Element) => {
    console.log('组件加载完成')
}
const doEnterCancel = (el: Element) => {
    console.log('组件加载效果被打断')
}
const doLeaveFraom = (el: Element) => {
    console.log('组件卸载之前')
}
const doLeaveActive = (el: Element, done: gsap.Callback) => {
    console.log('组件卸载中')
    gsap.to(el, {
        width: 1000,
        height: 2000,
        onComplete: done
    })
}
const doLeaveTo = (el: Element) => {
    console.log('组件卸载完成')
}
const doLeaveCancel = (el: Element) => {
    console.log('组件卸载效果被打断')
}

const doAdd = () => {
    list.push(list.length)
}
const doDelete = () => {
    list.pop()
}
watch(() => num.current, (newVal) => {
    gsap.to(num, {
        duration: 1,
        showNumber: newVal
    })
})
</script>

<style scoped>
.transition-x {
    width: 200px;
    height: 200px;
    background: #000;
}
.fade-enter-from {
    width: 0;
    height: 0;
}
.fade-enter-active {
    transition: all 2s ease;
}
.fade-enter-to {
    width: 200px;
    height: 200px;
}
.fade-leave-from {
    width: 200px;
    height: 200px;
}
.fade-leave-active {
    transition: all 2s ease;
}
.fade-leave-to {
    width: 0;
    height: 0;
}
.num-x {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid #ccc;
}
.num {
    margin: 10px;
    font-size: 40px;
}
</style>