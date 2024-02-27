<template>
  <div class="category-navigation container mx-auto">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">Dong ho nam</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>product detail</el-breadcrumb-item> -->
      <!-- <el-breadcrumb-item><a href="/">Dong ho nam</a></el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/css/components/Category/Navigation/category-navigation.scss';
</style>
