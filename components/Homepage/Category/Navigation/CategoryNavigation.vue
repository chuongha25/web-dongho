<template>
  <div class="category-navigation container mx-auto">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
      <el-breadcrumb-item
        v-if="name === 'Casio' || name === 'Citizen' || name === 'Orient'"
        >Brands</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="path">{{ name }}</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>Casio</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ path: string; name: string }>(), {
  path: '',
  name: '',
})
</script>

<style lang="scss">
@import './assets/css/components/Category/Navigation/category-navigation.scss';
</style>
