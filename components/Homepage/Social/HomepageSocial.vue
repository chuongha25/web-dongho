<template>
  <div class="social container mx-auto px-4">
    <h2 class="social__mt">
      <b></b>
      <span>
        <a href="#">
          <el-icon class="social-icon"><Location /></el-icon>
        </a>
        <a href="#">
          <el-icon class="social-icon"><Van /></el-icon>
        </a>
        <a href="#">
          <el-icon class="social-icon"><Watch /></el-icon>
        </a>
        <a href="#">
          <el-icon class="social-icon"><ShoppingTrolley /></el-icon>
        </a>
        <a href="#">
          <el-icon class="social-icon"><Stopwatch /></el-icon>
        </a>
      </span>
      <b></b>
    </h2>
  </div>
</template>

<script setup lang="ts">
import {
  Location,
  Van,
  Watch,
  ShoppingTrolley,
  Stopwatch,
} from '@element-plus/icons-vue'
</script>

<style lang="scss">
@import './assets/css/components/HomePage/Social/social.scss';
</style>
