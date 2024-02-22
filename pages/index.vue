<template>
  <div>
    <HomepageHeader />
    <HomepageMain :data="{donghoname: donhonamData, donghonu: donghonuData}"/>
    <HomepagePagination />
    <HomepageFooter />
  </div>
</template>

<script setup lang="ts">
const {data: donhonamData} = useFetch('/api/products', {
  query: { category: "Dong ho nam"}
})

const {data: donghonuData} = useFetch('/api/products', {
  query: { category: "Dong ho nu"}
})
console.log(donhonamData);

</script>

<style lang="scss">
/* @import "@/assets/css/reset.scss"; */
</style>
