<template>
  <div>pinia: {{Test.current}}-{{Test.name}}</div>
</template>

<script setup lang="ts">
import { useTestInfo } from '../../store/index'
const Test = useTestInfo()
const doChange = () => {
  // 直接修改
  // Test.current++
  // $patch修改
  // Test.$patch({
  //   current: 888
  // })
  // Test.$patch((state) => {
  //   state.current++
  // })
  // $state修改
  // Test.$state = {
  //   current: 800,
  //   name: 'test'
  // }
  // action
  Test.setCurrent()
}
</script>

<style>

</style>
