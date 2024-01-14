<script setup lang="ts">
import SignupForm from '../components/SignupForm.vue'
</script>

<template>
  <div class="bg-image h-full bg-cover bg-center">
    <SignupForm />
  </div>
</template>

<style scoped>
  .bg-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('src/assets/loginBg.jpg');
  }
</style>