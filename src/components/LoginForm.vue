<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const email = ref<string>()
const password = ref<string>()

const isValidEmail = computed(() => {
  if (!email.value) return true
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

const isValidPassword = computed(()=> {
  if (!password.value) return true;
  return password.value.length >= 8;
})

function handleSubmit(): void {
  // console.log('val???? -> ', val)
  console.log('email -> ', email.value)
  console.log('password -> ', password.value)
}
</script>

<template>
  <div class="flex-center flex-col h-full">
    <form @submit="handleSubmit" class="flex flex-col gap-2">
      <div class="mb-6 flex justify-between items-center w-full">
        <img src="https://images.placeholders.dev/?width=75&height=50&text=logoPlaceholder" />
        <h3>Retro Games</h3>
      </div>
      <span class="p-float-label mb-6">
        <InputText
          class="w-full"
          id="username"
          v-model="email"
          :class="{ 'p-invalid': !isValidEmail }"
        />
        <label for="username">Email</label>
      </span>
      <!-- <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small> -->
      <span class="p-float-label mb-6">
        <InputText 
          class="w-full" 
          v-model="password" 
          inputId="password" 
          type="password"
          :class="{ 'p-invalid': !isValidPassword }"
        />
        <label for="password">Password</label>
      </span>
      <Button type="button" label="Login" @click="handleSubmit" />
      <div class="flex justify-between items-center w-full">
        <span>Don't have an account?</span>
        <Button label="Sign up" link @click="$router.push('signup')" class="pr-0"/>
      </div>
    </form>
  </div>
</template>
