import { io } from "socket.io-client"

export const socketTelemetry = io("http://localhost:3000/telemetry/f1", {
  transports: ["websocket"],
})

// Logs de deploy
socketTelemetry.on("connect", () => console.log("✅ WS conectado:", socketTelemetry.id))
socketTelemetry.on("connect_error", (err) => console.error("❌ Erro WS:", err))
