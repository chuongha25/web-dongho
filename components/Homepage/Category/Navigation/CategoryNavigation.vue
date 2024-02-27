<template>
  <div class="category-navigation container mx-auto">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">Category</a></el-breadcrumb-item>
      <el-breadcrumb-item>Dong Ho Nam</el-breadcrumb-item>
      <el-breadcrumb-item>Detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/css/components/Category/Navigation/category-navigation.scss';
</style>
