<script setup>
import { usejobList } from '~/stores/jobList'
const jobList = usejobList()
</script>

<template>
  <div class="search-bar">
    <div class="search-bar__container">
      <InputText
        class="search-bar__input"
        placeholder="Pozisyon veya şirket ara"
        v-model="jobList.searchTerm"
        @keyup.enter="jobList.onSearch"
      />
      <InputText
        class="search-bar__input"
        placeholder="Şehir veya ilçe ara"
        v-model="jobList.citySearchTerm"
        @keyup.enter="jobList.onSearch"
      />
      <Button
        class="search-bar__button"
        severity="danger"
        outlined
        label="İş Ara"
        @click="jobList.onSearch"
      />
    </div>
  </div>
</template>

<style scoped>
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
</style>
