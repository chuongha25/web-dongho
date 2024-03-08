<template>
  <div class="category-navigation container mx-auto">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
      <el-breadcrumb-item v-if="categoryComputed">{{
        categoryComputed
      }}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="brandComputed">{{
        brandComputed
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
// Cách truy cập thông tin về đường dẫn hiện tại trong ứng dụng Vue
const route = useRoute()

// Lấy tất cả các tham số của đường dẫn hiện tại và gán chúng cho biến param
// route.params chứa một đối tượng chứa tất cả các tham số trên URL
const param = route.params
console.log(param)

// Sử dụng cú pháp giải nén (destructuring) để trích xuất hai thuộc tính 'category' và 'brand' từ đối tượng param
const { category, brand } = param
console.log(category, brand)

const categories: Record<string, string> = {
  'dong-ho-nam': 'Đồng hồ nam',
  'dong-ho-nu': 'Đồng hồ nữ',
}

const categoryComputed = computed(() => {
  // nếu biến category tồn tại và kh rỗng,
  // nó sẽ truy xuất giá trị tương ứng trong đối tượng 'categories' bằng cách sử dụng 'category' làm key
  return category ? categories[category as string] : ''
})

const brands: Record<string, string> = {
  casio: 'Casio',
  citizen: 'Citizen',
  orient: 'Orient',
}

const brandComputed = computed(() => {
  return brand ? brands[brand as string] : ''
})
</script>

<style lang="scss">
@import './assets/css/components/Category/Navigation/category-navigation.scss';
</style>
