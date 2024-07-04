<script setup>
import { onMounted } from 'vue'
import { usejobList } from '~/stores/jobList'
import SearchBar from './SearchBar.vue'
import Breadcrumb from './Breadcrumb.vue'
import JobListing from './JobListing.vue'

const jobList = usejobList()

onMounted(async () => {
  await jobList.getJobList()
})
</script>

<template>
  <SearchBar />
  <div class="primary-box">
    <Breadcrumb />
    <JobListing />
  </div>
</template>

<style scoped>
.primary-box {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}
</style>
