<template>
  <div class="content">
    <HomepageSlider />
    <HomepageTitle />
    <HomepageAlbums />
    <HomepageTitle />
    <ProductNam />
    <HomepageTitle />
    <ProductNam />
    <HomepageTitle />
    <HomepageService />
    <HomepageTitle />
    <HomepageBrands />
    <Line />
    <HomepageBanner />

    <div v-for="donghoname in props.donghoname" :key="donghoname.id">
      {{ donghoname.name }}
    </div>

    <div v-for="donghonu in props.donghonu" :key="donghonu.id">
      {{ donghonu.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
type Product = {
  id: number
  name: string
  category: string[]
  price: number
  image: string
}
type Props = {
  donghoname?: Product[]
  donghonu?: Product[]
}
const props = withDefaults(defineProps<Props>(), {
  donghoname: () => [],
  donghonu: () => [],
})
</script>

<style lang="scss">
@import './assets/css/components/HomePage/Main/main.scss';
</style>
