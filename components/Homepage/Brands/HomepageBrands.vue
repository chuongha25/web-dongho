<template>
  <div class="brand container mx-auto">
    <HomepageTitle :title="props.title" />
    <div
      class="brand__grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4"
    >
      <div class="brand__item">
        <div class="brand__item__logo">
          <a href="#">
            <div class="overlay"></div>
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Casio-1.jpg"
              alt="Logo Brand"
            />
          </a>
        </div>
      </div>
      <div class="brand__item">
        <div class="brand__item__logo">
          <a href="#">
            <div class="overlay"></div>
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Saga.jpg"
              alt="Logo Brand"
            />
          </a>
        </div>
      </div>
      <div class="brand__item">
        <div class="brand__item__logo">
          <a href="#">
            <div class="overlay"></div>
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Orient-1.jpg"
              alt="Logo Brand"
            />
          </a>
        </div>
      </div>
      <div class="brand__item">
        <div class="brand__item__logo">
          <a href="#">
            <div class="overlay"></div>
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Citizen-1.jpg"
              alt="Logo Brand"
            />
          </a>
        </div>
      </div>
      <div class="brand__item">
        <div class="brand__item__logo">
          <a href="#">
            <div class="overlay"></div>
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Daniel-Wellington.jpg"
              alt="Logo Brand"
            />
          </a>
        </div>
      </div>
      <div class="brand__item">
        <div class="brand__item__logo">
          <a href="#">
            <div class="overlay"></div>
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Seiko.jpg"
              alt="Logo Brand"
            />
          </a>
        </div>
      </div>
      <div class="brand__item">
        <div class="brand__item__logo">
          <a href="#">
            <div class="overlay"></div>
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/G-Shock.jpg"
              alt="Logo Brand"
            />
          </a>
        </div>
      </div>
      <div class="brand__item">
        <div class="brand__item__logo">
          <a href="#">
            <div class="overlay"></div>
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Baby-G.jpg"
              alt="Logo Brand"
            />
          </a>
        </div>
      </div>
      <div class="brand__item">
        <div class="brand__item__logo">
          <a href="#">
            <div class="overlay"></div>
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Fossil.jpg"
              alt="Logo Brand"
            />
          </a>
        </div>
      </div>
      <div class="brand__item">
        <div class="brand__item__logo">
          <a href="#">
            <div class="overlay"></div>
            <img
              src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Sokolov.jpg"
              alt="Logo Brand"
            />
          </a>
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
@import './assets/css/components/HomePage/Brands/brands.scss';
</style>
