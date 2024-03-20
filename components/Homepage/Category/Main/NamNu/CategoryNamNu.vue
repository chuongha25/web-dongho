<template>
  <div class="content">
    <CategoryNavigation />
    <div class="category-content container mx-auto">
      <CategorySection
        :title="categories[category].title"
        :image="categories[category].image"
        :description="categories[category].description"
      />
    </div>
    <HomepageAlbums :title="categoriesTitle[category].title" />
    <Line />
    <div class="category-products">
      <CategoryProductFilter />
      <CategoryProductList :products="props.data" :category="category" />
      <div class="flex justify-center mb-8">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="pagination.page"
          :total="props.total"
          @current-change="handlePageChange"
          :page-sizes="pagination.record"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

const route = useRoute()
const category = route.params.category as string

const emits = defineEmits<{
  (e: 'change-page', val: any): void
}>()

const pagination = ref({
  page: 1,
  record: 12,
})

const handlePageChange = (page: number) => {
  pagination.value.page = page
  emits('change-page', pagination.value)
}

const categories: Record<
  string,
  { title: string; image: string; description: string }
> = {
  'dong-ho-nam': {
    title: 'Đồng hồ nam đẹp, thời trang, cao cấp chính hãng 100%, góp 0%',
    image:
      'https://image.donghohaitrieu.com/wp-content/uploads/2023/11/banner-danh-muc-dong-ho-nam.jpg',
    description:
      'Những mẫu đồng hồ nam đẹp luôn là món phụ kiện thời trang hoàn hảo cho tất cả các dịp, giúp nam giới tự tin hơn – khẳng định phong cách. Đặc biệt khi mà nhiều thương hiệu đồng hồ nam thời trang quốc tế du nhập vào Việt Nam, việc mua sắm chiếc đồng hồ đeo tay nam phù hợp rất dễ dàng bởi sự đa dạng về mẫu mã, màu sắc, tính năng và kiểu dáng. Shop Đồng Hồ Hải Triều hiện là đại lý ủy quyền của gần 30 thương hiệu, mang cả thế giới đồng hồ về trưng bày tại hơn 25 chi nhánh trên toàn quốc.',
  },
  'dong-ho-nu': {
    title: 'Đồng hồ nữ đẹp, thời trang, cao cấp chính hãng 100%, góp 0%',
    image:
      'https://image.donghohaitrieu.com/wp-content/uploads/2023/11/banner-danh-muc-dong-ho-nu.jpg',
    description:
      'Những mẫu đồng hồ nữ đẹp đã trở thành biểu tượng của giới mê thời trang bởi không chỉ thiết kế bắt mắt, mà còn nằm ở vật liệu bền bỉ theo thời gian, cỗ máy đáng tin cậy, tính năng hữu ích cho người sử dụng. Đặc biệt, các thương hiệu đồng hồ nữ thời trang như Daniel Wellington, Saga, Fossil,… làm rất tốt nhiệm vụ khi liên tục cho ra mắt bộ sưu tập mới hằng năm. Nếu bạn mê mẩn các sản phẩm đồng hồ đeo tay nữ cao cấp, Hải Triều là điểm đến tin cậy.',
  },
}

const categoriesTitle: Record<string, { title: string }> = {
  'dong-ho-nam': {
    title: 'Bộ sưu tập đồng hồ nam',
  },
  'dong-ho-nu': {
    title: 'Bộ sưu tập đồng hồ nữ',
  },
}

type Props = {
  data: Product[]
  total: number
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  total: 0,
})
</script>

<style lang="scss">
@import '@/assets/css/components/Category/Main/NamNu/category-nam-nu.scss';
</style>
