<template>
  <div>
    <p>
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ description: string }>(), {
  description: '',
})
</script>
