<script setup lang="ts">
  interface BoardProps {
    board: String[][],
    isOwn: Boolean
  }
  const { board, isOwn } = defineProps<BoardProps>();
  console.log('isOwn -> ', typeof isOwn);
</script>

<template>
  <div class="m-2 flex-1 max-w-md">
    <p class="mb-2 truncate">{{ isOwn ? "My Fleet" : "Opponents Fleet" }}</p>
    <ul class="grid grid-rows-10 border-t border-l border-sky-500">
      <li class="grid grid-cols-10" v-for="(row, ri) in board" :key="`r-${ri}`">
        <li class="hover hover:bg-sky-600 text-center border-r border-b border-sky-500 aspect-square" v-for="(col, ci) in row" :key="`c-${ci}`">
          {{ col }}
        </li>
      </li>
    </ul>
  </div>
</template>
