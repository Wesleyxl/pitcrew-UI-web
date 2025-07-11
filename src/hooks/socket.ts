import { io } from "socket.io-client";
export const socket = io("http://192.168.1.15:3000/telemetry", {
  transports: ["websocket"],
});
