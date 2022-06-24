<template>
    <div class="box">
        <h4>注册</h4>
        <div>
            <span>用户名</span>
            <input v-model="info.name" type="text">
        </div>
        <div>
            <span>密码</span>
            <input v-model="info.password" type="password">
        </div>
    </div>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted, reactive } from 'vue';
const info = reactive({name: '', password: ''})
onMounted(() => {
    console.log('注册加载状态')
})
onActivated(() => {
    console.log('注册激活状态')
})
onUnmounted(() => {
    console.log('注册销毁状态')
})
onDeactivated(() => {
    console.log('注册激活销毁状态')
})
</script>
<script lang="ts">
export default {
    name: 'Register'
}
</script>