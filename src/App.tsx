import { useEffect, useState } from "react";
import { socket } from "./hooks/socket";
import "./App.css";
import F1Dashboard from "./components/F1TelemtryDash1/F1Dashboard";

interface LapData {
  lastLapTimeMs: number;
  currentLapTimeMs: number;
  currentLapNum: number;
  carPosition: number;
}

function formatTime(ms: number): string {
  const totalSeconds = ms / 1000;
  const m = Math.floor(totalSeconds / 60);
  const s = String(Math.floor(totalSeconds % 60)).padStart(2, "0");
  const msPart = String(Math.floor((totalSeconds % 1) * 1000)).padStart(3, "0");
  return `${m}:${s}.${msPart}`;
}

export default function App() {
  const [lap, setLap] = useState<LapData | null>(null);

  useEffect(() => {
    socket.on("lap", (data: LapData) => {
      setLap(data);
      console.log(data);
    });

    return () => {
      socket.off("lap");
    };
  }, []);

  return (
    <div className="App">
      <h1>🏎 PitCrew Dashboard</h1>
      <F1Dashboard />
      {lap ? (
        <section>
          <div>
            <p>Última Volta: {formatTime(lap.lastLapTimeMs)}</p>
            <p>Volta Atual: {formatTime(lap.currentLapTimeMs)}</p>
            <p>Nº Volta: {lap.currentLapNum}</p>
            <p>Posição: {lap.carPosition}</p>
          </div>
        </section>
      ) : (
        <p>Aguardando dados...</p>
      )}
    </div>
  );
}
