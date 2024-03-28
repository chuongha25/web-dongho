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
          <span class="el-dropdown-link flex items-center">
            <span class="mr-2">{{ userName }}</span>
            <el-avatar :icon="UserFilled" :src="userAvatar" />
            <el-icon class="el-icon--right"><caret-bottom /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item class="clearfix" @click="toProfile">
                Your Profile
                <el-badge class="mark" />
              </el-dropdown-item>
              <el-dropdown-item class="clearfix" @click="onLogout">
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

const authStore = useAuthStore()

const userName = computed(
  () =>
    `${authStore.user.profile?.firstName} ${authStore.user.profile?.lastName}`,
)
const userAvatar = computed(() => authStore.user.profile?.avatar)

const onLogout = () => {
  authStore.logout()
}

const toProfile = () => {
  navigateTo('/admin/user-profile')
}
</script>
<style lang="scss">
@import '@/assets/css/pages/admin/dashboard/header/header.scss';
</style>
