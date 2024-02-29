<template>
  <div class="section">
    <SectionTitle :title="props.title" />
    <SectionImage :image="props.image" />
    <SectionDescription :description="props.description" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ title: string; image: string; description: string }>(),
  {
    title: '',
    image: '',
    description: '',
  },
)
</script>

<style lang="scss">
@import './assets/css/components/Category/Section/section.scss';
</style>
