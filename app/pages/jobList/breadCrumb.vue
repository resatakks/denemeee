<template>
  <div class="breadcrumb container">
    <p class="breadcrumb__item">Ana Sayfa</p>
    <i class="breadcrumb__icon pi pi-arrow-right"></i>
    <p class="breadcrumb__item breadcrumb__item--active font-bold">
      İş İlanları
    </p>
  </div>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 12px 16px 12px 0;
}

.breadcrumb__item {
  margin-bottom: 0;
  color: #878787;
  font-size: 12px;
}

.breadcrumb__item--active {
  color: #333333;
}

.breadcrumb__icon {
  color: #a9a9a9 !important;
}
</style>
