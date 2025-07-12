/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import F1SvgDamage from "../F1SvgDamage";
import "./F1TelemetryDashboard.css";
import { socket } from "../../hooks/socket";
import type { CarTelemetryF124Type } from "../../types/f124/TelemetryTypes/car-telemetry.types";
import type { LapF124Type } from "../../types/f124/TelemetryTypes/lap.types";
import { alertsSocket } from "../../hooks/alertsSocket";
import type { CarDamageF124Type } from "../../types/f124/TelemetryTypes/car-damage.types";
import type { TimeTrialF124Type } from "../../types/f124/TelemetryTypes/time-trial.types";

function formatTime(ms: number): string {
  const totalSeconds = ms / 1000;
  const m = Math.floor(totalSeconds / 60);
  const s = String(Math.floor(totalSeconds % 60)).padStart(2, "0");
  const msPart = String(Math.floor((totalSeconds % 1) * 1000)).padStart(3, "0");
  return `${m}:${s}.${msPart}`;
}

const F1Dashboard = () => {
  const lit = 5; // exemplo de segmentos ativos

  const [lap, setLap] = useState<LapF124Type | null>(null);
  const [carTelemetry, setCarTelemetry] = useState<CarTelemetryF124Type | null>(
    null
  );
  const [carDamage, setCarDamage] = useState<CarDamageF124Type | null>(null);
  const [timeTrial, setTimeTrial] = useState<TimeTrialF124Type | null>(null);

  useEffect(() => {
    function onTelemetry(data: { type: string; data: any }) {
      switch (data.type) {
        case "lap":
          setLap(data.data);
          break;
        case "carTelemetry":
          setCarTelemetry(data.data);
          break;
        case "carDamage":
          setCarDamage(data.data);
          break;
        case "timeTrial":
          setTimeTrial(data.data);
          break;
        default:
          break;
      }
    }
    socket.on("telemetry", onTelemetry);
    return () => {
      socket.off("telemetry", onTelemetry);
    };
  }, []);

  useEffect(() => {
    const handler = (payload: { message: string }) => {
      console.log(payload.message);

      const u = new SpeechSynthesisUtterance(payload.message);
      u.lang = "pt-BR";
      window.speechSynthesis.speak(u);
    };
    alertsSocket.on("alert", handler);
    return () => {
      alertsSocket.off("alert", handler);
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
        <p className="span-title">Lap:</p>
        <p className="span-value">{lap ? lap.currentLapNum : "0"}</p>
      </div>
      <div className="voice">Voice</div>
      <div className="position">
        <p className="span-title">pos:</p>
        <p className="span-value">10</p>
      </div>
      <div className="battery">battery</div>
      <div className="gear">
        {carTelemetry ? carTelemetry.carTelemetryData[0].gear : "N"}
      </div>
      <div className="current-time">
        <p className="time-title">Volta Atual:</p>
        <p className="time-value">
          {lap ? formatTime(lap.currentLapTimeMs) : "0:00.000"}
        </p>
      </div>
      <div className="kilometers">
        <p className="time-title">velocidade:</p>
        <p className="time-value">
          {carTelemetry ? `${carTelemetry.carTelemetryData[0].speed} KM` : "0"}
        </p>
      </div>
      <div className="delta-time">
        <p className="time-title">Delta:</p>
        <p className="time-value">{lap ? lap.deltaToCarInFrontMsPart : "0"}</p>
      </div>
      <div className="car-damages">
        <F1SvgDamage carTelemetry={carTelemetry} carDamage={carDamage} />
      </div>
      <div className="hybrid-type">Overtake</div>
      <div className="fuel-type">Rich</div>
      <div className="Lap-remains">+1.36</div>
      <div className="fuel">6.0</div>

      <div className="best-time">
        <p className="time-title">Melhor Volta:</p>
        <p className="time-value">
          {timeTrial
            ? formatTime(timeTrial.personalBest.lapTimeMs)
            : "0:00.000"}
        </p>
      </div>

      <div className="last-time">
        <p className="time-title">Volta Anterior:</p>
        <p className="time-value">
          {lap ? formatTime(lap.lastLapTimeMs) : "0:00.000"}
        </p>
      </div>
      <div className="car-config">car-config</div>
      {/* <div className="race-status">race-status</div> */}
    </div>
  );
};

export default F1Dashboard;
