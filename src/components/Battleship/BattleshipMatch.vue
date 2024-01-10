<script setup lang="ts">
import { ref } from 'vue';
import Board from './Board.vue';
import Button from "primevue/button"

const firstBoard = ref<String[][]>(Array.from({ length: 10 }, (_, i) =>
  Array.from({ length: 10 }, (_, j) => `${i}${j}`)
))

</script>

<template>
  <div class="flex-col justify-center">
    <h1 class="text-center text-xl">Battleship</h1>
    <div class="flex flex-1 justify-center">
      <Board :board="firstBoard" :isOwn="true" />
      <Board :board="firstBoard" :isOwn="false"/>
    </div>
    <div class="flex flex-1 justify-center">
      <Button label="Join Game" size="small"></Button>
    </div>
  </div>
</template>
