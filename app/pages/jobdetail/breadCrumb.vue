<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  jobDetailData: Object,
})

const router = useRouter()

function goToJobList() {
  router.push('/joblist')
}
</script>

<template>
  <div class="breadcrumb primary-box">
    <p class="breadcrumb__item">Ana Sayfa</p>
    <i class="breadcrumb__icon pi pi-arrow-right"></i>
    <p class="breadcrumb__item breadcrumb__item--active" @click="goToJobList">
      İş İlanları
    </p>
    <i class="breadcrumb__icon pi pi-arrow-right"></i>
    <p class="breadcrumb__item breadcrumb__item--active" @click="goToJobList">
      {{ jobDetailData.companyLocation }} İş İlanları
    </p>
    <i class="breadcrumb__icon pi pi-arrow-right"></i>
    <p
      class="breadcrumb__item breadcrumb__item--active font-bold"
      @click="goToJobList"
    >
      {{ jobDetailData.companyLocation }} {{ jobDetailData.positionName }} İş
      İlanları
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
  overflow-x: auto;
}

.breadcrumb__item {
  margin-bottom: 0;
  color: #878787;
  font-size: 12px;
  white-space: nowrap;
}

.breadcrumb__item--active {
  color: #333333;
  cursor: pointer;
}

.breadcrumb__icon {
  color: #a9a9a9 !important;
}

@media (max-width: 768px) {
  .breadcrumb {
    padding: 12px 10px;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
