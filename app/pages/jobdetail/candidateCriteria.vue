<script setup>
const props = defineProps({
  jobDetailData: Object,
})
</script>

<template>
  <div class="aligment-container">
    <header>
      <h2 class="value-contain">Aday Kriterleri</h2>
    </header>
    <section>
      <div class="aligment-container-section">
        <h3 class="sub-title">Tecrübe:</h3>
        <span class="value-contain">{{ jobDetailData.experience }}</span>
      </div>
      <div class="aligment-container-section">
        <h3 class="sub-title">Eğitim Seviyesi:</h3>
        <span class="value-contain">{{ jobDetailData.educationLevel }}</span>
      </div>
      <div class="aligment-container-section">
        <h3 class="sub-title">Askerlik Durumu:</h3>
        <span class="value-contain">{{ jobDetailData.militaryService }}</span>
      </div>
      <div class="aligment-container-section !mb-0">
        <h3 class="sub-title">Ehliyet:</h3>
        <span class="value-contain">{{ jobDetailData.driverLicense }}</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sub-title {
  font-size: 16px;
  color: #686868;
  margin-bottom: 0;
  display: inline;
}
.value-contain {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  line-height: 1.25;
}
.value-contain::before {
  content: '\00a0';
}
.aligment-container-section {
  margin-bottom: 16px;
  display: flex;
}
.aligment-container {
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 16px 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #212529;
  text-align: left;
}
</style>
