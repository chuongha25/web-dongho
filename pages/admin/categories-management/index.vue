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
import { ElNotification, ElMessageBox } from 'element-plus'
import type { Category } from '~/types/category'

const listCategories = ref<Category[]>([])

const fetchData = async () => {
  const { data } = await useCustomFetch<Category[]>('/api/categories')

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
  ElMessageBox.confirm(
    'proxy will permanently delete the category. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    },
  )
    .then(async () => {
      await useCustomFetch(`/api/categories/${id}`, {
        method: 'DELETE',
      })
      // Cập nhật lại dữ liệu
      fetchData()

      ElNotification({
        type: 'success',
        message: 'Delete completed',
        duration: 4000,
      })
    })
    .catch(() => {
      ElNotification({
        type: 'info',
        message: 'Delete canceled',
        duration: 4000,
      })
    })
}
</script>

<style lang="scss">
@import '@/assets/css/pages/admin/categories/create/create.scss';
</style>
