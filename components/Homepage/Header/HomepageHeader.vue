<template>
  <div class="header container mx-auto">
    <div class="header__brand">
      <div class="header__brand__logo">
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsi8bgtXW-1-HbIKYTcbRX6X6jewBiMqeCQ&usqp=CAU"
            alt="Logo"
          />
        </a>
      </div>
      <div class="header__brand__right">
        <div class="header__search">
          <el-input
            v-model="input1"
            class="w-50"
            size="large"
            placeholder="Tìm sản phẩm"
            :prefix-icon="Search"
          />
        </div>
        <div class="header__card">
          <div class="header__card__scoped">
            <a href="#">
              <el-icon>
                <ShoppingCart />
              </el-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="header__menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-sub-menu index="1">
          <template #title>Thương Hiệu</template>
          <el-menu-item index="1-1">Casio</el-menu-item>
          <el-menu-item index="1-2">Citizen</el-menu-item>
          <el-menu-item index="1-3">Orient</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">Nam</el-menu-item>
        <el-menu-item index="3">Nữ</el-menu-item>
        <el-menu-item index="4">Cặp Đôi</el-menu-item>
        <el-sub-menu index="5">
          <template #title>Phụ Kiện</template>
          <el-menu-item index="5-1">Dây da đồng hồ</el-menu-item>
          <el-menu-item index="5-2">Dây kim loại</el-menu-item>
          <el-menu-item index="5-3">Kính cường lực</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="6">Liện Hệ</el-menu-item>
        <el-menu-item index="7">Thông Tin</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search, ShoppingCart } from '@element-plus/icons-vue'
const input1 = ref('')

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss">
@import '@/assets/css/components/HomePage/Header/header.scss';
</style>
