import { reactive } from "vue";
import { io, Socket } from "socket.io-client";

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
  matchId: null,
  playerId: null
});

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";
const URL = "http://localhost:3000";

export const socket: Socket = io(URL, {
  autoConnect: false,
  transports: ["websocket"] 
});

socket.on("connect", () => {
  console.log('Connected!!');
  state.connected = true;
});

socket.on("disconnect", () => {
  console.log('Disconnect!!');
  state.connected = false;
});

socket.on("connectionEstablished", ({ matchId, playerId }) => {
  console.log('playerId => ', playerId);
  console.log('matchId => ', matchId);
  state.playerId = playerId;
  state.matchId = matchId;
});

// socket.on("foo", (...args) => {
//   state.fooEvents.push(args);
// });

// socket.on("bar", (...args) => {
//   state.barEvents.push(args);
// });