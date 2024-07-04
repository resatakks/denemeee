<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToJobList() {
  router.push('/joblist')
}
</script>

<template>
  <div
    @click="goToJobList()"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      color: #333;
      font-size: 24px;
      cursor: pointer;
    "
  >
    İş İlanlarına Gitmek İçin Tıkla
  </div>
</template>

<style scoped></style>
