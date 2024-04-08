<template>
  <div class="albums container mx-auto">
    <HomepageTitle :title="props.title" />
    <div
      class="albums__grid grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4"
    >
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/casio">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-kinh-sapphire.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/orient">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-quatz.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/citizen">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-nang-luong-anh-sang.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/casio">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-mat-chu-nhat.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/orient">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-mat-vuong.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/citizen">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-mat-tron.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/casio">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-day-cao-su.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/orient">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-day-da.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/citizen">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-day-kim-loai.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/casio">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-mau-vang.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/orient">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-mau-den.jpg"
              alt="Albums"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="albums__item">
        <div class="albums__img">
          <nuxt-link to="/category/brands/citizen">
            <img
              src="https://fridayshopping.vn/wp-content/uploads/2023/12/icon-dong-ho-mau-trang.jpg"
              alt="Albums"
            />
          </nuxt-link>
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
@import './assets/css/components/HomePage/Albums/albums.scss';
</style>
