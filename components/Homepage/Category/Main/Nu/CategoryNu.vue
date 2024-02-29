<template>
  <div class="content">
    <CategoryNavigation name="Đồng Hồ Nữ" />
    <div class="category-content container mx-auto">
      <CategorySection
        title="Đồng hồ nữ đẹp, thời trang, cao cấp chính hãng 100%, góp 0%"
        image="https://image.donghohaitrieu.com/wp-content/uploads/2023/11/banner-danh-muc-dong-ho-nu.jpg"
        description="Những mẫu đồng hồ nữ đẹp đã trở thành biểu tượng của giới mê thời trang bởi không chỉ thiết kế bắt mắt, mà còn nằm ở vật liệu bền bỉ theo thời gian, cỗ máy đáng tin cậy, tính năng hữu ích cho người sử dụng. Đặc biệt, các thương hiệu đồng hồ nữ thời trang như Daniel Wellington, Saga, Fossil,… làm rất tốt nhiệm vụ khi liên tục cho ra mắt bộ sưu tập mới hằng năm. Nếu bạn mê mẩn các sản phẩm đồng hồ đeo tay nữ cao cấp, Hải Triều là điểm đến tin cậy."
      />
    </div>
    <HomepageAlbums title="Bộ sưu tập đồng hồ nữ" />
    <Line />
    <div class="category-products">
      <CategoryProductFilter />
      <CategoryProductList />
      <HomepagePagination />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/css/components/Category/Main/Nu/category-nu.scss';
</style>
