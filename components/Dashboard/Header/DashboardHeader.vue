<template>
  <div class="header-dashboard flex justify-between items-center bg-white">
    <div class="header-dashboard__search">
      <el-input size="large" placeholder="Please Input" :prefix-icon="Search" />
    </div>
    <div class="header-dashboard__section">
      <div class="header-dashboard__section__notify">
        <a href="#">
          <el-icon><BellFilled /></el-icon>
        </a>
      </div>
      <div class="header-dashboard__section__profile">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <span class="mr-2">Admin</span>
            <el-avatar :icon="UserFilled" />
            <el-icon class="el-icon--right"><caret-bottom /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item class="clearfix">
                Your Profile
                <el-badge class="mark" />
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                Sign out
                <el-badge class="mark" />
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Search,
  UserFilled,
  BellFilled,
  CaretBottom,
} from '@element-plus/icons-vue'
</script>

<style lang="scss">
@import '@/assets/css/pages/admin/dashboard/header/header.scss';
</style>
