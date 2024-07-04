<script setup>
const props = defineProps({
  jobDetailData: Object,
})
</script>

<template>
  <div class="top-card">
    <div class="headline-top">
      <div class="headline-top-left">
        <div class="title">
          <p class="position-name">{{ jobDetailData.positionName }}</p>
          <p class="company-name">{{ jobDetailData.companyName }}</p>
        </div>
      </div>
      <div class="buttons">
        <Button class="btn-primary" outlined label="Başvur" />
        <Button class="btn-secondary" outlined label="Kaydet" />
        <Button class="share-button" outlined icon="pi pi-share-alt" />
      </div>
    </div>
    <div class="headline-bottom">
      <div class="text-box">
        <div class="company-location">
          {{ jobDetailData.companyLocation }}
        </div>
        <div class="work-model-box">
          <div class="dot-icon"></div>
          <div>{{ jobDetailData.workModel }}</div>
        </div>
      </div>
      <div class="updated-date">
        <span>{{ jobDetailData.createdDate }} güncellendi</span>
      </div>
    </div>
    <div class="details-container">
      <div class="details">
        <div class="detail">
          <h3 class="mb-1 text">Çalışma Şekli</h3>
          <p class="text">{{ jobDetailData.workType }}</p>
        </div>
        <div class="detail">
          <h3 class="mb-1 text">Pozisyon Seviyesi</h3>
          <p class="text">{{ jobDetailData.positionLevel }}</p>
        </div>
        <div class="detail">
          <h3 class="mb-1 text">Departman</h3>
          <p class="text">{{ jobDetailData.department }}</p>
        </div>
        <div class="detail">
          <h3 class="mb-1 text">Başvuru Sayısı</h3>
          <p class="text">{{ jobDetailData.applicationNumber }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-card {
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
}
.headline-top {
  justify-content: space-between;
  display: flex;
  padding: 16px;
  color: #333;
}
.headline-top-left {
  margin-right: 16px;
}
.buttons {
  flex-shrink: 0;
}
.title {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
}
.position-name {
  overflow: hidden;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: normal;
  box-shadow: transparent 0px 0px;
}
.company-name {
  color: inherit;
  font-size: 16px;
  cursor: unset;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 20rem;
}
.btn-primary {
  color: #fff;
  background-color: #8316b5;
  border-color: #8316b5;
  margin-right: 8px;
  font-weight: 500;
  min-width: 110px;
  max-width: 160px;
}
.btn-secondary {
  color: #8316b5;
  background-color: #fff;
  border-color: #8316b5;
  margin-right: 4px;
  font-weight: 500;
  min-width: 110px;
  max-width: 160px;
}
.share-button {
  width: 36px !important;
  height: 36px;
  padding: 0;
  min-width: 0;
  border: none;
  margin-right: -9px;
  font-weight: 500;
  max-width: 160px;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #8316b5;
  text-align: center;
}
.headline-bottom {
  display: flex;
  color: #878787;
  justify-content: space-between;
  padding: 0 16px;
}
.text-box {
  display: flex;
  color: #878787;
}
.company-location {
  display: flex;
  white-space: nowrap;
  color: #878787;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 125px;
}
.work-model-box {
  display: flex;
  align-items: center;
  color: #878787;
  gap: 4px;
}
.dot-icon {
  margin-left: 8px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #878787;
  margin-right: 8px;
}
.updated-date {
  color: #878787;
}
.details-container {
  padding: 16px;
  color: #333;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: left;
}
.details {
  padding: 1.5rem 16px;
  display: flex;
  justify-content: space-between;
  background-color: #f8f9fa;
  border-radius: 4px;
}
.detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #333;
  font-weight: 500;
  min-width: 91px;
}
.text {
  font-size: 14px;
  color: #686868;
  font-weight: 400;
}
p.text {
  font-weight: 500;
  color: #333;
}
</style>
