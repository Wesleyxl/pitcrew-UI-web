// src/hooks/socket.ts
import { io } from "socket.io-client";

export const socket = io("http://localhost:3000/telemetry/f1", {
  transports: ["websocket"],
});

// Logs de deploy
socket.on("connect", () => console.log("✅ WS conectado:", socket.id));
socket.on("connect_error", (err) => console.error("❌ Erro WS:", err));
