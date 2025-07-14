import { io } from "socket.io-client"

const urlAlert = import.meta.env.VITE_API_URL_ALERTS

export const alertsSocket = io(urlAlert, {
  transports: ["websocket"],
})

alertsSocket.on("connect", () => console.log("✅ conectado a /alerts/f1:", alertsSocket.id))
