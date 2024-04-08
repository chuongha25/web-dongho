<template>
  <el-page-header @back="goBack" />
  <div class="dashboard-order">
    <div class="flex items-center mb-10 justify-center">
      <p style="color: #606266" class="mt-6 text-lg font-bold font-sans">
        List Order Completed!
      </p>
    </div>
    <el-table :data="listOrders" style="width: 100%">
      <el-table-column prop="customer" label="Customer" />
      <el-table-column label="Product" width="280">
        <template #default="{ row }">
          <div v-for="(product, index) in row.products" :key="index">
            <p>{{ product.name }}</p>
            <p>Quantity: {{ product.quantity }}</p>
            <p>Price: {{ formatPrice(product.price) }}</p>
            <hr v-if="index < row.products.length - 1" />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Total Price">
        <template #default="{ row }">
          <p>{{ formatPrice(row.totalPrice) }}</p>
        </template>
      </el-table-column>
      <el-table-column label="Adress">
        <template #default="{ row }">
          <p>{{ row.adress + ', ' + row.city }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="Order date">
        <template #default="{ row }">
          <p>{{ dayjs(row.createdAt).format('YYYY-MM-DD HH:mm:ss') }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Status Order" />
    </el-table>
    <!-- <div class="flex justify-center mt-3.5">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="pagination.page"
        :page-size="pagination.record"
        :total="total"
        @current-change="handlePageChange"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import type { Order } from '@/types/order'
import { ref } from 'vue'
import dayjs from 'dayjs'
definePageMeta({
  layout: 'dashboard',
})

const listOrders = ref<Order[]>([])
const total = ref(0)

interface ProductListEntity {
  items: Order[]
  total: number
}

const fetchData = async () => {
  // const { page, record } = pagination.value
  const { data } = await useCustomFetch<ProductListEntity>('/api/oders', {
    // query: {
    //   page: page,
    //   record: record,
    // },
  })

  listOrders.value =
    data.value?.items.filter((order) => order.status === 'HOAN_THANH') || []
  // console.log(listOrders.value)

  total.value = listOrders.value.length || 0
}

// const pagination = ref({
//   page: 1,
//   record: 7,
// })

// const handlePageChange = async (page: number) => {
//   pagination.value.page = page
//   await fetchData()
// }

fetchData()

const goBack = () => {
  navigateTo('/admin/orders-management')
}
</script>
