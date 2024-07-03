<script setup></script>

<template>
  <div class="loading-overlay flex justify-content-center">
    <div class="layout-preloader-container">
      <div class="layout-preloader">
        <ProgressSpinner />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-preloader-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #52525ab0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
