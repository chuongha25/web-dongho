<template>
  <div wrapper>
    <DashboardHeader />
    <div class="flex justify-between">
      <DashboardSidebar />
      <div class="dashboard-main">
        <div class="dashboard-main__content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '@/assets/css/layouts/dashboard.scss';
</style>
