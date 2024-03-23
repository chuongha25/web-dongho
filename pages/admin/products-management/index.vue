<template>
  <div class="dashboard-products">
    <div
      class="dashboard-products__list flex items-center mb-8 justify-between"
    >
      <p>List Products</p>
      <el-button type="primary" @click="toCreate">Create products</el-button>
    </div>
    <el-table :data="listProducts" style="width: 100%">
      <el-table-column prop="_id" label="Id" width="180" />
      <el-table-column prop="name" label="Name" width="240" />
      <el-table-column prop="category" label="Category" />
      <el-table-column prop="price" label="Price" />
      <el-table-column prop="branch" label="Branch" />
      <el-table-column prop="operation" label="Operation">
        <template v-slot="{ row }">
          <el-button type="primary" @click="toEdit(row._id)">Edit</el-button>
          <el-button type="primary" @click="toDelete(row._id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from '@/types/product'
definePageMeta({
  layout: 'dashboard',
})

const listProducts = ref<Product[]>([])

interface ProductListEntity {
  items: Product[]
  total: number
}

const fetchData = async () => {
  const { data } = await useFetch<ProductListEntity>('/api/products', {
    query: {
      category: 'dong-ho-nu',
      branch: 'casio',
    },
  })

  listProducts.value = data.value?.items || []
}

fetchData()

const toCreate = () => {
  navigateTo(`/admin/products-management/create`)
}

const toEdit = (id: string) => {
  navigateTo(`/admin/products-management/edit/${id}`)
}

const toDelete = async (id: string) => {
  await fetch(`/api/products/${id}`, {
    method: 'DELETE',
  })
}

watch(
  () => listProducts.value,
  async (newVal) => {
    console.log('Danh sách sản phẩm đã thay đổi:', newVal)
    // Gọi lại fetchData() để cập nhật danh sách sản phẩm từ API mỗi khi có sự thay đổi
    await fetchData()
  },
)
</script>

<style lang="scss">
@import '@/assets/css/pages/admin/products/products.scss';
</style>
