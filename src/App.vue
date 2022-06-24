<template>
  <div>
    <router-view #default="{route, Component}">
      <transition :enter-active-class="route.meta.transition">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <router-view name="pinia"></router-view>
  </div>
</template>

<script setup lang="ts">
import 'animate.css'
</script>

<style>

</style>
