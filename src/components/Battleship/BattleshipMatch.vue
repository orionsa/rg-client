<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import { socket, state } from '@/socket'
import Board from './BsBoard.vue'
const firstBoard = ref<String[][]>(
  Array.from({ length: 10 }, (_, i) => Array.from({ length: 10 }, (_, j) => `${i}${j}`))
)

function joinGame() {
  console.log('join game!!!')
  socket.connect()
}

function sendTestEvent() {
  socket.emit('test', { paylod: 'testPaylod' }, (data: string) =>
    console.log('returned data -> ', data)
  )
}

function gameAction(action: string): void {
  const { matchId, playerId } = state;
  socket.emit('game_action', { action, matchId, playerId }, (res: any) => {
    console.log("*********");
    console.log(res);
    console.log("*********");
  })
}
</script>

<template>
  <div class="flex-col justify-center">
    <h1 class="text-center text-xl">Battleship</h1>
    <div>
      <span>MatchId: {{ state.matchId }}</span>
      <br />
      <span>PlayerId: {{ state.playerId }}</span>
    </div>
    <div class="flex flex-1 justify-center">
      <Board :board="firstBoard" :isOwn="true" />
      <Board :board="firstBoard" :isOwn="false" />
    </div>
    <div class="flex flex-1 justify-center">
      <span class="p-buttonset">
        <Button label="Join Game" size="small" @click="joinGame()"></Button>
        <Button label="Test" size="small" @click="sendTestEvent()"></Button>
        <Button label="Get Fleet" size="small" @click="gameAction('getFleet')"></Button>
      </span>
    </div>
  </div>
</template>
