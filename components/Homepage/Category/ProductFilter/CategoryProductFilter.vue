<template>
  <div class="product-filter container mx-auto px-4">
    <el-select
      v-model="value"
      class=""
      placeholder="Khoảng Giá"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Cao',
    label: 'Cao',
  },
  {
    value: 'Thấp',
    label: 'Thấp',
  },
  {
    value: 'Trung bình',
    label: 'Trung bình',
  },
]
</script>

<style lang="scss">
@import './assets/css/components/Category/ProductFilter/product-filter.scss';
</style>
