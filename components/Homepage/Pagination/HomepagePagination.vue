<template>
  <div class="pagination container mx-auto">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalPages"
      @current-change="handlePageChange"
      :current-page="currentPage"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const totalPages = 30 // Số trang tối đa
const router = useRouter()
const currentPage = ref(1) // Sử dụng ref để theo dõi giá trị của currentPage

const handlePageChange = (page: number) => {
  // Xử lý chuyển hướng đến trang mới tại đây
  const newPath =
    page === 1
      ? `/category/${props.category}`
      : `/category/${props.category}/page/${page}`
  // Chuyển hướng đến trang mới
  router.push(newPath)
  // Cập nhật giá trị của currentPage với giá trị mới sau khi chuyển hướng
  currentPage.value = page
}

const props = withDefaults(
  defineProps<{
    products: Product[]
    category: string
  }>(),
  {
    products: undefined,
    category: '',
  },
)

console.log(currentPage.value)
</script>

<style lang="scss">
@import './assets/css/components/HomePage/Pagination/pagination.scss';
</style>
