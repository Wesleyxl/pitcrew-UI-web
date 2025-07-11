import { useEffect, useState } from "react";
import F1SvgDamage from "../F1SvgDamage";
import "./F1TelemetryDashboard.css";
import { socket } from "../../hooks/socket";

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

const F1Dashboard = () => {
  const lit = 5; // exemplo de segmentos ativos

  const [lap, setLap] = useState<LapData | null>(null);

  useEffect(() => {
    socket.on("lap", (data: LapData) => {
      setLap(data);
    });

    return () => {
      socket.off("lap");
    };
  }, []);
  return (
    <div className="f1-dashboard">
      <div className="rpm-bar">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`segment ${i < lit ? "active" : ""}`} />
        ))}
      </div>

      <div className="lap">
        <p className="lap-title">Lap:</p>
        <p className="lap-number">10</p>
      </div>
      <div className="voice">Voice</div>
      <div className="position">
        <p className="pos-title">pos:</p>
        <p className="pos-number">10</p>
      </div>
      <div className="battery">battery</div>
      <div className="gear">4</div>
      <div className="current-time">
        <p>{lap ? formatTime(lap.currentLapTimeMs) : "0:00.000"}</p>
      </div>
      <div className="kilometers">
        <p>172</p> <span>Km</span>
      </div>
      <div className="delta-time">
        <p>-0.125</p>
      </div>
      <div className="car-damages">
        <F1SvgDamage />
      </div>
      <div className="hybrid-type">Overtake</div>
      <div className="fuel-type">Rich</div>
      <div className="Lap-remains">+1.36</div>
      <div className="fuel">6.0</div>
      <div className="best-time">
        <p>1:29:120</p>
      </div>
      <div className="last-time">
        <p>{lap ? formatTime(lap.lastLapTimeMs) : "0:00.000"}</p>
      </div>
      <div className="car-config">car-config</div>
      <div className="race-status">race-status</div>
    </div>
  );
};

export default F1Dashboard;
