<template>
  <el-container class="layout-container" style="height: 600px">
    <DashboardSidebar />
    <el-container class="layout-body">
      <DashboardHeader />
      <DashboardMain />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
// definePageMeta({
//   layout: false,
// });
</script>

<style scoped>
.layout-body {
  display: flex;
  flex-direction: column;
}
.layout-container .el-header {
  position: relative;
  background-color: var(--el-color-info-light-5);
  color: var(--el-text-color-primary);
}
.layout-container .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-info-light-5);
}
.layout-container .el-menu {
  border-right: none;
}
.layout-container .el-main {
  padding: 0;
}
</style>
