<script setup>
const props = defineProps({
  jobDetailData: Object,
})
</script>

<template>
  <div class="job-detail-container">
    <div class="job-sub-detail">
      <div class="job-detail-content">
        <h2 class="card-title">GENEL NİTELİKLER VE İŞ TANIMI</h2>
        <div class="job-detail-qualifications">
          <p style="font-weight: 500">Genel Nitelikler</p>
          <ul class="list">
            <li>{{ jobDetailData.generalQualifications }}</li>
            <li>{{ jobDetailData.generalQualifications }}</li>
            <li>{{ jobDetailData.generalQualifications }}</li>
            <li>{{ jobDetailData.generalQualifications }}</li>
            <li>{{ jobDetailData.generalQualifications }}</li>
          </ul>
          <br />
          <p style="font-weight: 500">İş Tanımı</p>
          <ul class="list">
            <li>{{ jobDetailData.positionDescription }}</li>
            <li>{{ jobDetailData.positionDescription }}</li>
            <li>{{ jobDetailData.positionDescription }}</li>
            <li>{{ jobDetailData.positionDescription }}</li>
            <li>{{ jobDetailData.positionDescription }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="job-detail-button">
      <div class="job-detail-button-detail">İlanı Şikayet Et</div>
    </div>
    <div class="job-detail-description-footer"></div>
  </div>
</template>

<style scoped>
.card-title {
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}
.job-container {
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
.job-detail-container {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  transition: max-height 1s ease-in-out;
  max-height: 300rem;
}
.job-detail-button {
  padding: 0 0 16px 16px;
}
.job-detail-button-detail {
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: -0.39px;
  cursor: pointer;
  font-weight: 400;
  color: #8316b5;
  text-decoration: none;
  border-radius: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: transparent;
  border: 1px solid transparent;
}
.job-detail-description-footer {
  height: 50px;
}
.list {
  margin-bottom: 16px;
  font-weight: 400;
  color: #333 !important;
}
.job-detail-qualifications {
  margin-bottom: 0;
  font-size: 16px;
  color: #333;
  overflow: hidden;
}
.job-sub-detail {
  padding: 16px 16px 0;
}
</style>
