<template>
  <div class="service container mx-auto">
    <HomepageTitle :title="props.title" />
    <div
      class="service__grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <div class="service__item">
        <div class="service__item__img">
          <NuxtLink to="/category/contact">
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2024/01/hinh-dich-vu-sua-chua-dong-ho.jpg"
              alt="Service"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="service__item">
        <div class="service__item__img">
          <NuxtLink to="/category/contact">
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2024/01/hinh-dich-vu-in-khac-laser.jpg"
              alt="Service"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="service__item">
        <div class="service__item__img">
          <NuxtLink to="/category/contact">
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2024/01/hinh-dich-vu-khach-hang-doanh-nghiep.jpg"
              alt="Service"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string }>(), {
  title: '',
})
</script>

<style lang="scss">
@import './assets/css/components/HomePage/Service/service.scss';
</style>
