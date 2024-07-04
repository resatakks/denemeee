<script setup>
import { usejobList } from '~/stores/jobList'
import Spinner from '@/components/common/Spinner.vue'

const jobList = usejobList()
</script>

<template>
  <div class="job-listing container">
    <div class="job-listing__box">
      <p class="job-listing__count">{{ jobList.totalItems }}</p>
      <p class="job-listing__text">İş İlanları</p>
    </div>

    <div class="job-listing__content">
      <Spinner v-if="jobList.jobListLoading" />
      <a
        v-for="job in jobList.paginatedJobListData"
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
        :first="(jobList.currentPage - 1) * jobList.itemsPerPage"
        :rows="jobList.itemsPerPage"
        :totalRecords="jobList.totalItems"
        @page="jobList.onPageChange"
      />
    </div>
  </div>
</template>

<style scoped>
::v-deep .p-paginator.p-component {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
  padding: 16px 0;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  @media (max-width: 768px) {
    max-width: 370px;
  }
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
  @media (max-width: 768px) {
    padding-left: 10px;
  }
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
  @media (max-width: 768px) {
    padding: 8px;
    max-width: 370px;
  }
  @media (max-width: 376px) {
    padding: 8px;
    max-width: 350px;
  }
}
.job-listing__content {
  max-width: 629px !important;
  @media (max-width: 768px) {
    padding-left: 10px;
  }
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
