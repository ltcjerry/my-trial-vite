<template>
    <div class="box">
        <h4>登录</h4>
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
import { reactive, onMounted, onActivated, onUnmounted, onDeactivated } from 'vue';
const info = reactive({name: '', password: ''})
onMounted(() => {
    console.log('登录加载状态')
})
onActivated(() => {
    console.log('登录激活状态')
})
onUnmounted(() => {
    console.log('登录销毁状态')
})
onDeactivated(() => {
    console.log('登录激活销毁状态')
})
</script>
<script lang="ts">
export default {
    name: 'Login'
}
</script>
