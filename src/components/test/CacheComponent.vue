<template>
    <div class="box">
       <keep-alive :include="['Login']" :exclude="['Register']" :max="2">
            <Login v-if="isShow"></Login>
            <Register v-else></Register>
       </keep-alive>
       <button @click="onChange">切换</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Login from './Login.vue';
import Register from './Register.vue';
const isShow = ref(true)
const onChange = () => {
    isShow.value = !isShow.value
}
</script>
