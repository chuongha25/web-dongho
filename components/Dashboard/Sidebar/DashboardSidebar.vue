<template>
  <div class="sidebar">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo h-screen"
      default-active="1"
      text-color="#fff"
    >
      <!-- Sidebar Profile -->
      <div class="sidebar__profile">
        <img
          class="sidebar__profile__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsi8bgtXW-1-HbIKYTcbRX6X6jewBiMqeCQ&usqp=CAU"
          alt="Avatar"
        />
        <h1><a href="#">MCWATCH.VN</a></h1>
        <div class="sidebar__profile__social">
          <a href="#">
            <el-icon><Delete /></el-icon>
          </a>
          <a href="#">
            <el-icon><Edit /></el-icon>
          </a>
          <a href="#">
            <el-icon><Message /></el-icon>
          </a>
          <a href="#">
            <el-icon><Van /></el-icon>
          </a>
          <a href="#">
            <el-icon><SwitchButton /></el-icon>
          </a>
        </div>
      </div>

      <!-- Sidebar menu -->
      <el-menu-item index="1">
        <el-icon><HomeFilled /></el-icon>
        <span>Dashboard</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><UserFilled /></el-icon>
        <span>About</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><GoodsFilled /></el-icon>
        <span>Products</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><List /></el-icon>
        <span>Order</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><Histogram /></el-icon>
        <span>Reports</span>
      </el-menu-item>

      <!-- Sidebar Setting -->
      <div class="sidebar__setting">
        <el-menu-item index="6">
          <el-icon><Setting /></el-icon>
          <span>Settings</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {
  Delete,
  Edit,
  Message,
  Van,
  SwitchButton,
  HomeFilled,
  UserFilled,
  GoodsFilled,
  List,
  Histogram,
  Setting,
} from '@element-plus/icons-vue'
</script>

<style lang="scss">
@import '@/assets/css/pages/admin/dashboard/sidebar/sidebar.scss';
</style>
