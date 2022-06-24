<template>
    <div class="box">
        <h3>插槽测试</h3>
        <slot name="header"></slot>
        <slot :data="'插槽作用域数据'"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script setup lang="ts">
import { } from 'vue';

</script>
