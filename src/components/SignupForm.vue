<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import AvatarGenerator from './AvatarGenerator.vue'

const image = ref<string>()
const form = ref([
  { label: 'firstName', text: 'First Name', value: '' },
  { label: 'lastName', text: 'Last Name', value: '' },
  { label: 'email', text: 'Email', value: '' },
  { label: 'password', text: 'Password', value: '', type: 'password' },
  { label: 'confirmPassword', text: 'Confirm Password', value: '', type: 'password' }
])

const handleSubmit = (): void => {
  // console.log(name, email, password, confirmPassword)
  console.log(form.value);
}

function handleChangeAvatar(newUrl: string): void {
  image.value = newUrl
}
</script>

<template>
  <div class="flex-center flex-col h-full">
    <form @submit="handleSubmit" class="flex flex-col items-center gap-2">
      <AvatarGenerator :onChange="handleChangeAvatar" :image="image" />
      <span class="p-float-label mb-6" v-for="item in form" :key="item.label">
        <InputText class="w-full" :id="item.label" v-model="item.value" :type="item.type"/>
        <label :for="item.label">{{ item.text }}</label>
      </span>
      <Button type="button" label="Go" @click="handleSubmit" />
    </form>
  </div>
</template>
