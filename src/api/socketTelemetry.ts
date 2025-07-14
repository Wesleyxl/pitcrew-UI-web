import { io } from "socket.io-client"

const url = import.meta.env.VITE_API_URL_TELEMETRY

export const socketTelemetry = io(url, {
  transports: ["websocket"],
})

// Logs de deploy
socketTelemetry.on("connect", () => console.log("✅ WS conectado:", socketTelemetry.id))
socketTelemetry.on("connect_error", (err) => console.error("❌ Erro WS:", err))
