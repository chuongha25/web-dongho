<template>
  <div class="content">
    <div class="container mx-auto">
      <div class="content__wrapper">
        <CardProduct @change-total="updateTotalPrice" />
        <CardInfor :total="totalPrice" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const totalPrice = ref<number>(0)

const updateTotalPrice = (val: number) => {
  totalPrice.value = val
}
</script>

<style lang="scss">
@import '@/assets/css/components/Card/Main/card-main.scss';
</style>
