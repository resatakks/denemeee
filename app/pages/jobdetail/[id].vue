<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useJobDetail } from '@/stores/jobDetail'
import Spinner from '@/components/common/Spinner.vue'

const route = useRoute()
const router = useRouter()
const jobDetail = useJobDetail()

onMounted(async () => {
  const jobId = route.params.id
  await jobDetail.getJobDetail(jobId)
})

function goToJobList() {
  router.push('/joblist')
}
</script>

<template>
  <div v-if="jobDetail.jobDetailData" class="primary-box">
    <div class="breadcrumb primary-box">
      <p class="breadcrumb__item">Ana Sayfa</p>
      <i class="breadcrumb__icon pi pi-arrow-right"></i>
      <p class="breadcrumb__item breadcrumb__item--active" @click="goToJobList">
        İş İlanları
      </p>
      <i class="breadcrumb__icon pi pi-arrow-right"></i>
      <p class="breadcrumb__item breadcrumb__item--active" @click="goToJobList">
        {{ jobDetail.jobDetailData.companyLocation }} İş İlanları
      </p>
      <i class="breadcrumb__icon pi pi-arrow-right"></i>
      <p
        class="breadcrumb__item breadcrumb__item--active font-bold"
        @click="goToJobList"
      >
        {{ jobDetail.jobDetailData.companyLocation }}
        {{ jobDetail.jobDetailData.positionName }} İş İlanları
      </p>
    </div>

    <Spinner v-if="jobDetail.jobDetailLoading" />

    <div class="col-12 col-sm-7 col-md-7 col-lg-8 p-0 mb-0 col main-box">
      <div class="top-card">
        <div class="headline-top">
          <div class="headline-top-left">
            <div class="title">
              <p class="position-name">
                {{ jobDetail.jobDetailData.positionName }}
              </p>
              <p class="company-name">
                {{ jobDetail.jobDetailData.companyName }}
              </p>
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
              {{ jobDetail.jobDetailData.companyLocation }}
            </div>
            <div class="work-model-box">
              <div class="dot-icon"></div>
              <div>{{ jobDetail.jobDetailData.workModel }}</div>
            </div>
          </div>
          <div class="updated-date">
            <span>{{ jobDetail.jobDetailData.createdDate }} güncellendi</span>
          </div>
        </div>
        <div class="details-container">
          <div class="details">
            <div class="detail">
              <h3 class="mb-1 text">Çalışma Şekli</h3>
              <p class="text">{{ jobDetail.jobDetailData.workType }}</p>
            </div>
            <div class="detail">
              <h3 class="mb-1 text">Pozisyon Seviyesi</h3>
              <p class="text">
                {{ jobDetail.jobDetailData.positionLevel }}
              </p>
            </div>
            <div class="detail">
              <h3 class="mb-1 text">Departman</h3>
              <p class="text">{{ jobDetail.jobDetailData.department }}</p>
            </div>
            <div class="detail">
              <h3 class="mb-1 text">Başvuru Sayısı</h3>
              <p class="text">
                {{ jobDetail.jobDetailData.applicationNumber }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="job-container">
        <div class="job-detail-container">
          <div class="job-sub-detail">
            <div class="job-detail-content">
              <h2 class="card-title">GENEL NİTELİKLER VE İŞ TANIMI</h2>
              <div class="job-detail-qualifications">
                <p style="font-weight: 500">Genel Nitelikler</p>
                <ul class="list">
                  <li>
                    {{ jobDetail.jobDetailData.generalQualifications }}
                  </li>
                  <li>
                    {{ jobDetail.jobDetailData.generalQualifications }}
                  </li>
                  <li>
                    {{ jobDetail.jobDetailData.generalQualifications }}
                  </li>
                  <li>
                    {{ jobDetail.jobDetailData.generalQualifications }}
                  </li>
                  <li>
                    {{ jobDetail.jobDetailData.generalQualifications }}
                  </li>
                </ul>
                <br />
                <p style="font-weight: 500">İş Tanımı</p>
                <ul class="list">
                  <li>
                    {{ jobDetail.jobDetailData.positionDescription }}
                  </li>
                  <li>
                    {{ jobDetail.jobDetailData.positionDescription }}
                  </li>
                  <li>
                    {{ jobDetail.jobDetailData.positionDescription }}
                  </li>
                  <li>
                    {{ jobDetail.jobDetailData.positionDescription }}
                  </li>
                  <li>
                    {{ jobDetail.jobDetailData.positionDescription }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="job-detail-button">
            <div class="job-detail-button-detail">İlanı Şikayet Et</div>
          </div>
          <div class="job-detail-description-footer"></div>
        </div>
      </div>

      <div class="aligment-container">
        <header>
          <h2 class="value-contain">Aday Kriterleri</h2>
        </header>
        <section>
          <div class="aligment-container-section">
            <h3 class="sub-title">Tecrübe:</h3>
            <span class="value-contain">
              {{ jobDetail.jobDetailData.experience }}</span
            >
          </div>
          <div class="aligment-container-section">
            <h3 class="sub-title">Eğitim Seviyesi:</h3>
            <span class="value-contain">{{
              jobDetail.jobDetailData.educationLevel
            }}</span>
          </div>
          <div class="aligment-container-section">
            <h3 class="sub-title">Askerlik Durumu:</h3>
            <span class="value-contain">{{
              jobDetail.jobDetailData.militaryService
            }}</span>
          </div>
          <div class="aligment-container-section !mb-0">
            <h3 class="sub-title">Ehliyet:</h3>
            <span class="value-contain">{{
              jobDetail.jobDetailData.driverLicense
            }}</span>
          </div>
        </section>
      </div>

      <div class="seo-field">
        <p class="seo-header">
          {{ jobDetail.jobDetailData.positionName }} pozisyonu ile ilgili daha
          detaylı bilgi almak ya da diğer iş fırsatlarını incelemek için
          aşağıdaki sayfaları inceleyebilirsiniz.
        </p>
        <a class="position-link"
          >{{ jobDetail.jobDetailData.positionName }} İş İlanları</a
        >
      </div>
    </div>
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
  cursor: pointer;
}

.breadcrumb__icon {
  color: #a9a9a9 !important;
}
.primary-box {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
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
.position-link {
  color: #8316b5;
  text-decoration: none !important;
  background-color: transparent;
  text-align: left !important;
  width: fit-content;
  border: none !important;
  cursor: pointer;
}

.seo-header {
  margin-bottom: 8px;
  font-size: 12px;
  color: #333;
}
.seo-field {
  margin-bottom: 16px;
}
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
.main-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.job-detail-description-footer {
  height: 50px;
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
.job-detail-button {
  padding: 0 0 16px 16px;
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
