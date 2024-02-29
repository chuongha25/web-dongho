<template>
  <p class="section__img">
    <img :src="image" alt="Dong Ho Nam" />
  </p>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ image: string }>(), {
  image: '',
})

// const image = reactive({
//   nam: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/11/banner-danh-muc-dong-ho-nam.jpg',
//   nu: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/11/banner-danh-muc-dong-ho-nu.jpg',
//   casio:
//     'https://image.donghohaitrieu.com/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-Casio.jpg',
//   citizen:
//     'https://image.donghohaitrieu.com/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-citizen.jpg',
//   orient:
//     'https://image.donghohaitrieu.com/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-orient.jpg',
// })
</script>
