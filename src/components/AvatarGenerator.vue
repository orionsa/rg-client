<script setup lang="ts">
import { defineProps, ref } from 'vue';
import Avatar from 'primevue/avatar'
const { image, onChange } = defineProps<{
  image?: string,
  onChange: (url: string) => void
}>();
// const image = ref<string | undefined>(props.image);

function handleChangeAvatar() {
    const rand = Math.random();
    onChange(`https://robohash.org/${rand}/?bgset=any`);
} 
</script>

<template>
  <Avatar
    :icon="!image ? 'pi pi-user' : undefined"
    v-tooltip="'Change Avatar'"
    class="mb-6 hover"
    :image="image"
    style="background-color: #424b57"
    size="xlarge"
    shape="circle"
    @click="handleChangeAvatar"
  />
</template>
