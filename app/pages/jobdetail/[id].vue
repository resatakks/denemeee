<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useJobDetail } from '../../stores/jobDetail'
import Breadcrumb from './breadCrumb.vue'
import TopCard from './topCard.vue'
import jobDetailContent from './jobDetailContent.vue'
import CandidateCriteria from './candidateCriteria.vue'
import SeoField from './seoField.vue'

const route = useRoute()
const jobDetail = useJobDetail()

onMounted(async () => {
  const jobId = route.params.id
  await jobDetail.getJobDetail(jobId)
})
</script>

<template>
  <div v-if="jobDetail.jobDetailData" class="primary-box">
    <Breadcrumb :jobDetailData="jobDetail.jobDetailData" />
    <div class="col-12 col-sm-7 col-md-7 col-lg-8 p-0 mb-0 col main-box">
      <TopCard :jobDetailData="jobDetail.jobDetailData" />
      <jobDetailContent :jobDetailData="jobDetail.jobDetailData" />
      <CandidateCriteria :jobDetailData="jobDetail.jobDetailData" />
      <SeoField :jobDetailData="jobDetail.jobDetailData" />
    </div>
  </div>
</template>

<style scoped>
.primary-box {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1400px) {
    max-width: 1000px;
  }
  @media (max-width: 1200px) {
    max-width: 800px;
  }
}
.main-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 1200px) {
    padding: 0 10px;
  }
}
</style>
