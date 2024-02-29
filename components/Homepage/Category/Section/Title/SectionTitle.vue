<template>
  <h1>
    <span>
      <b>{{ title }}</b>
    </span>
  </h1>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string }>(), {
  title: '',
})
</script>
