<template>
  <div class="dashboard-categories">
    <div
      class="dashboard-categories__list flex items-center mb-8 justify-between"
    >
      <p>List category</p>
      <el-button type="primary" @click="toCreate">Create Category</el-button>
    </div>
    <el-table :data="listCategories" style="width: 100%">
      <el-table-column prop="_id" label="Id" />
      <el-table-column prop="name" label="Category" />
      <el-table-column prop="description" label="Description" />
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

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})
import { ref } from 'vue'
import { ElNotification } from 'element-plus'
import type { Category } from '~/types/category'

const listCategories = ref<Category[]>([])

const fetchData = async () => {
  const { data } = await useFetch<Category[]>('/api/categories')

  listCategories.value = data.value || []
}

fetchData()

const toCreate = () => {
  navigateTo(`/admin/categories-management/create`)
}

const toEdit = (id: string) => {
  navigateTo(`/admin/categories-management/edit/${id}`)
}

const toDelete = async (id: string) => {
  await useFetch(`/api/categories/${id}`, {
    method: 'DELETE',
  })

  ElNotification({
    title: 'Success',
    message: 'You have successfully delete the category',
    type: 'success',
  })

  // Cập nhật lại dữ liệu
  fetchData()
}
</script>
