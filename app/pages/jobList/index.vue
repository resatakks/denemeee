<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Spinner from '@/components/common/Spinner.vue'

const jobListLoading = ref(false)
const jobListData = ref([])
const filteredJobListData = ref([])
const paginatedJobListData = ref([])
const currentPage = ref(1)
const totalItems = ref(0)
const itemsPerPage = ref(10)
const searchTerm = ref('')
const citySearchTerm = ref('')

onMounted(async () => {
  await getJobList()
})

async function getJobList() {
  jobListLoading.value = true
  try {
    const response = await axios.get(
      'https://667fcc0f56c2c76b495a24ea.mockapi.io/api/kariyertask/job-list'
    )
    jobListData.value = response.data
    filterJobList()
    jobListLoading.value = false
  } catch (error) {
    jobListLoading.value = false
    console.error('Error fetching job list', error)
  }
}

function filterJobList() {
  filteredJobListData.value = jobListData.value.filter((job) => {
    return (
      job.positionName.toLowerCase().includes(searchTerm.value.toLowerCase()) &&
      job.cityName.toLowerCase().includes(citySearchTerm.value.toLowerCase())
    )
  })
  totalItems.value = filteredJobListData.value.length
  paginate()
}

function paginate() {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  paginatedJobListData.value = filteredJobListData.value.slice(start, end)
}

function onPageChange(event) {
  currentPage.value = event.page + 1
  paginate()
}

function onSearch() {
  currentPage.value = 1
  filterJobList()
  paginate()
}
</script>

<template>
  <div class="search-bar">
    <div class="search-bar__container">
      <InputText
        class="search-bar__input"
        placeholder="Pozisyon veya şirket ara"
        v-model="searchTerm"
        @keyup.enter="onSearch"
      />
      <InputText
        class="search-bar__input"
        placeholder="Şehir veya ilçe ara"
        v-model="citySearchTerm"
        @keyup.enter="onSearch"
      />
      <Button
        class="search-bar__button"
        severity="danger"
        outlined
        label="İş Ara"
        @click="onSearch"
      />
    </div>
  </div>
  <div class="primary-box">
    <div class="breadcrumb container">
      <p class="breadcrumb__item">Ana Sayfa</p>
      <i class="breadcrumb__icon pi pi-arrow-right"></i>
      <p class="breadcrumb__item breadcrumb__item--active">İş İlanları</p>
    </div>
    <div class="job-listing container">
      <div class="job-listing__box">
        <p class="job-listing__count">{{ totalItems }}</p>
        <p class="job-listing__text">İş İlanları</p>
      </div>

      <div class="job-listing__content">
        <Spinner v-if="jobListLoading" />
        <a
          v-for="job in paginatedJobListData"
          :key="job.id"
          :href="`/jobdetail/${job.id}`"
          target="_blank"
          class="job-card-link"
        >
          <div class="job-card">
            <div class="job-card__top">
              <div class="job-card__image">
                <img :src="job.imageUrl" class="job-card__img" />
              </div>
              <div class="job-card__details">
                <div class="job-card__title">
                  <span class="job-card__position">{{ job.positionName }}</span>
                  <div class="job-card__icon"></div>
                </div>
                <div class="job-card__subtitle">
                  <span>{{ job.companyName }}</span>
                </div>
                <div class="job-card__info">
                  <span class="job-card__location">{{ job.cityName }}</span>
                  <span class="job-card__dot"></span>
                  <span class="job-card__model">{{ job.workModel }}</span>
                </div>
              </div>
              <div class="job-card__save-button">
                <div class="job-card__save-icon">
                  <span class="pi pi-heart job-card__fav"></span>
                </div>
              </div>
            </div>
            <div class="job-card__bottom">
              <div class="job-card__badges">
                <div class="job-card__badge">
                  <span class="job-card__badge-text">{{ job.workType }}</span>
                </div>
              </div>
              <div class="job-card__date">
                <span class="job-card__date-text">{{ job.createdDate }}</span>
              </div>
            </div>
          </div>
        </a>

        <Paginator
          style="box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1); max-width: 629px"
          :first="(currentPage - 1) * itemsPerPage"
          :rows="itemsPerPage"
          :totalRecords="totalItems"
          @page="onPageChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep .p-paginator.p-component {
  padding: 16px 0;
  border-radius: 4px;
  background-color: #fff !important;
}
.primary-box {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}
.search-bar {
  gap: 10px;
  transition: padding 0.2s ease-in-out;
  background: #fff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 15px 0;
}

.search-bar__container {
  display: flex;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}

.search-bar__input {
  height: 36px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background: #fff;
  color: black;
  text-overflow: clip;
}

.search-bar__button {
  height: 36px;
  padding: 9px 16px;
  background-color: #8316b5;
  border: 1px solid #8316b5;
  color: #fff;
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
}

.breadcrumb__icon {
  color: #a9a9a9 !important;
}

.job-listing {
  text-align: center;
  margin: 0 auto 16px;
}
.job-listing__box {
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  margin-bottom: 16px;
}
.job-listing__count,
.job-listing__text {
  margin-bottom: 0;
  font-size: 1.25rem;
  color: #333;
}

.job-card {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  max-width: 629px;
  margin-bottom: 8px;
  border-radius: 5px;
  background: #fff;
  color: #333;
  padding: 15px;
  cursor: pointer;
}
.job-listing__content {
  max-width: 629px !important;
}

.job-card__top {
  display: flex;
}

.job-card__image {
  flex-shrink: 0;
}

.job-card__img {
  width: 65px;
  height: 65px;
  border-radius: 4px;
  object-fit: contain;
}

.job-card__details {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  flex-grow: 1;
  margin-right: 10px;
}

.job-card__title {
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
}

.job-card__position {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.job-card__subtitle {
  line-height: 17px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  word-break: break-all;
}

.job-card__info {
  font-size: 12px;
  color: #878787;
  line-height: 14px;
  display: flex;
  align-items: center;
}

.job-card__location,
.job-card__model {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  font-size: 12px;
  color: #878787;
  line-height: 14px;
  display: flex;
  align-items: center;
}

.job-card__dot {
  background: #878787;
  width: 3px;
  height: 3px;
  border-radius: 3px;
  margin: 0 10px;
}

.job-card__save-button {
  background: #fff;
  display: block;
  color: #333;
}

.job-card__save-icon {
  color: #383d41;
  height: 20px;
  display: block !important;
  cursor: pointer;
}

.job-card__fav {
  display: flex;
  color: #333 !important;
}

.job-card__bottom {
  display: flex;
  justify-content: space-between;
}

.job-card__badges {
  display: flex;
}

.job-card__badge {
  display: flex;
  align-items: flex-end;
}

.job-card__badge-text {
  font-size: 12px;
  background: #fff;
  color: #333;
}

.job-card__date {
  margin-top: 18px;
}

.job-card__date-text {
  font-size: 12px;
}
</style>
