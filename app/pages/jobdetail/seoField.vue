<script setup>
const props = defineProps({
  jobDetailData: Object,
})
</script>

<template>
  <div class="seo-field">
    <p class="seo-header">
      {{ jobDetailData.positionName }} pozisyonu ile ilgili daha detaylı bilgi
      almak ya da diğer iş fırsatlarını incelemek için aşağıdaki sayfaları
      inceleyebilirsiniz.
    </p>
    <a class="position-link">{{ jobDetailData.positionName }} İş İlanları</a>
  </div>
</template>

<style scoped>
.seo-header {
  margin-bottom: 8px;
  font-size: 12px;
  color: #333;
}
.seo-field {
  margin-bottom: 16px;
}
.position-link {
  color: #8316b5;
  text-decoration: none !important;
  background-color: transparent;
  text-align: left !important;
  width: fit-content;
  border: none !important;
  cursor: pointer;
}
</style>
