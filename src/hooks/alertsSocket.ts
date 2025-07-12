// src/hooks/alertsSocket.ts
import { io } from "socket.io-client";
export const alertsSocket = io("http://localhost:3000/alerts/f1", {
  transports: ["websocket"],
});

alertsSocket.on("connect", () =>
  console.log("✅ conectado a /alerts/f1:", alertsSocket.id)
);
