<template>
  <div class="section">
    <h2 class="section__title">
      <b></b>
      <span>
        <ElIcon><ArrowDown /></ElIcon>
        {{ props.title }}
      </span>
      <b></b>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'

const props = withDefaults(defineProps<{ title: string }>(), {
  title: '',
})
</script>

<style lang="scss">
@import './assets/css/components/HomePage/Title/title.scss';
</style>
