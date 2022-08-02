<template>
  <router-view #default="{route, Component}">
    <transition :enter-active-class="route.meta.transition">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import 'animate.css'
</script>

<style>

</style>
