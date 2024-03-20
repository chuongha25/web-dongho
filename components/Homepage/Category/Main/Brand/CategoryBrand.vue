<template>
  <div class="content">
    <CategoryNavigation />
    <div class="category-content container mx-auto">
      <CategorySection
        :title="brands[brand].title"
        :image="brands[brand].image"
        :description="brands[brand].description"
      />
    </div>
    <AlbumBrands :title="brandsTitle[brand].title" />
    <Line />
    <div class="category-products">
      <CategoryProductFilter />

      <CategoryProductList :products="props.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'
const route = useRoute()

const brand = route.params.brand as string

const brands: Record<
  string,
  { title: string; image: string; description: string }
> = {
  casio: {
    title: 'Đồng hồ Casio nam, nữ chính hãng 100%, BH 5 năm, góp 0%',
    image:
      'https://image.donghohaitrieu.com/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-Casio.jpg',
    description:
      'Casio là thương hiệu đồng hồ lâu đời trong ngành công nghiệp đồng hồ tại Nhật Bản. Những mẫu đồng hồ Casio nam nữ được yêu thích bởi thiết kế đơn giản, dễ dàng để xem giờ, được trang bị đầy đủ các công nghệ mới nhất và có giá bán cực kỳ rẻ. Ngoài ra, đồng hồ Casio chính hãng còn nổi bật với chức năng đa dạng giúp ích cho người dùng vào những hoạt động đời sống thường ngày…',
  },
  citizen: {
    title: 'Đồng hồ Citizen nam, nữ Nhật Bản chính hãng 100%, góp 0%',
    image:
      'https://image.donghohaitrieu.com/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-citizen.jpg',
    description:
      'Citizen – Thương hiệu đồng hồ được thành lập bởi các nhà đầu tư Nhật Bản và Thụy Sỹ vào năm 1918. Tín đồ đánh giá đồng hồ Citizen nam, nữ có chất lượng tốt và đa dạng về chất liệu (dây da, kim loại, kính cứng, sapphire), nhiều kiểu dáng (mặt vuông, mặt tròn). Tại Việt Nam, Đồng Hồ Hải Triều là đại lý đồng hồ Citizen chính hãng ủy quyền uy tín nhất…',
  },
  orient: {
    title: 'Đồng hồ Orient nam, nữ, automatic chính hãng 100%, góp 0%',
    image:
      'https://image.donghohaitrieu.com/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-orient.jpg',
    description:
      'Orient – Thương hiệu đồng hồ Nhật Bản thuộc Seiko Epson thành lập vào năm 1950. Đồng hồ Orient nam, nữ, cặp đôi chính hãng được chế tác từ vật liệu thượng hạng, bộ máy cao cấp, độ hoàn thiện tinh xảo. Orient sở hữu tệp khách hàng rộng khắp nhờ thiết kế đa dạng trong dây đeo, kiểu dáng (tròn, vuông, chữ nhật), phong cách (Quartz, automatic, cơ tự động lộ máy), vật liệu…',
  },
}

const brandsTitle: Record<string, { title: string }> = {
  casio: {
    title: 'Bộ sưu tập Casio',
  },
  citizen: {
    title: 'Bộ sưu tập Citizen',
  },
  orient: {
    title: 'Bộ sưu tập Orient',
  },
}

type Props = {
  data: Product[]
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
})
</script>

<style lang="scss">
@import './assets/css/components/Category/Main/Brand/category-brand.scss';
</style>
