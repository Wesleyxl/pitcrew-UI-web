import { useEffect } from "react";
import { alertsSocket } from "./alertsSocket";

export function useAlertsWithVoice(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const handleAlert = (payload: { message: string }) => {
      console.log("⚠️ Alerta recebido:", payload.message);
      const audio = new Audio("/voice/radio_check/test-2.wav");
      audio.play().catch(console.error);
    };

    alertsSocket.on("alert", handleAlert);

    return () => {
      alertsSocket.off("alert", handleAlert);
    };
  }, [enabled]);
}
