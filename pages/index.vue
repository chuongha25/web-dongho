<template>
  <div class="main">
    <HomepageMain
      :data="{ donghoname: donhonamData, donghonu: donghonuData }"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom',
})
const { data: donhonamData } = useFetch('/api/products', {
  query: { category: 'Dong ho nam' },
})

const { data: donghonuData } = useFetch('/api/products', {
  query: { category: 'Dong ho nu' },
})
console.log(donhonamData)
</script>

<style lang="scss">
/* @import "@/assets/css/reset.scss"; */
</style>
