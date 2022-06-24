<template>
    <div v-if="isVisible" class="loading">
       <span>loading...</span>
    </div>
</template>

<script setup lang="ts">
let isVisible = ref(false)
const show = () => {
    isVisible.value = true
}
const hidden = () => {
    isVisible.value = false
}
defineExpose({
    isVisible,
    show,
    hidden
})
</script>
<script lang="ts">
export default {
    name: 'Loading'
}
</script>
<style scoped>
.loading {
    position: fixed;
    inset: 0;
    margin: auto;
    background: rgba(0, 0, 0, .1);
}
</style>