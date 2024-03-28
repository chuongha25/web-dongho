<template>
  <div class="sidebar">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo h-screen"
      :default-active="activeMenuItem"
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
      <el-menu-item @click="handleClick(1)" index="1">
        <el-icon><HomeFilled /></el-icon>
        <span>Dashboard</span>
      </el-menu-item>
      <el-menu-item @click="handleClick(2)" index="2">
        <el-icon><GoodsFilled /></el-icon>
        <span>Products</span>
      </el-menu-item>
      <el-menu-item @click="handleClick(3)" index="3">
        <el-icon><List /></el-icon>
        <span>Order</span>
      </el-menu-item>
      <el-menu-item @click="handleClick(4)" index="4">
        <el-icon><Histogram /></el-icon>
        <span>Reports</span>
      </el-menu-item>
      <el-menu-item @click="handleClick(5)" index="5">
        <el-icon><UserFilled /></el-icon>
        <span>categories</span>
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
import { useRouter } from 'vue-router'

const router = useRouter()
const activeMenuItem = ref('1')

onMounted(() => {
  // Lấy dữ liệu từ localStorage khi ứng dụng đã được khởi tạo
  const savedActiveMenuItem = localStorage.getItem('activeMenuItem')
  if (savedActiveMenuItem) {
    activeMenuItem.value = savedActiveMenuItem
  }
})

watch(
  () => router.currentRoute.value && router.currentRoute.value.path,
  (newPath, oldPath) => {
    if (newPath !== oldPath) {
      switch (newPath) {
        case '/admin/dashboard':
          activeMenuItem.value = '1'
          break
        case '/admin/products-management':
          activeMenuItem.value = '2'
          break
        case '/admin/orders-management':
          activeMenuItem.value = '3'
          break
        case '/admin/reports-management':
          activeMenuItem.value = '4'
          break
        case '/admin/categories-management':
          activeMenuItem.value = '5'
          break
        default:
          break
      }
      localStorage.setItem('activeMenuItem', activeMenuItem.value)
    }
  },
)

const handleClick = (index: any) => {
  activeMenuItem.value = String(index)
  localStorage.setItem('activeMenuItem', activeMenuItem.value)

  // Thực hiện điều hướng tới trang tương ứng
  switch (index) {
    case 1:
      router.push('/admin/dashboard')
      break
    case 2:
      router.push('/admin/products-management')
      break
    case 3:
      router.push('/admin/orders-management')
      break
    case 4:
      router.push('/admin/reports-management')
      break
    case 5:
      router.push('/admin/categories-management')
      break
    default:
      break
  }
}
</script>

<style lang="scss">
@import '@/assets/css/pages/admin/dashboard/sidebar/sidebar.scss';
</style>
