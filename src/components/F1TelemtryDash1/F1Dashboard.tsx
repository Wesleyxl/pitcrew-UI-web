import "./F1TelemetryDashboard.css";

const F1Dashboard = () => {
  const lit = 5; // exemplo de segmentos ativos

  return (
    <div className="f1-dashboard">
      <div className="rpm-bar">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`segment ${i < lit ? "active" : ""}`} />
        ))}
      </div>

      <div className="lap">
        <p className="lap-title">Race:</p>
        <p className="lap-number">10</p>
      </div>
      <div className="voice">Voice</div>
      <div className="position">Pos: 1</div>
      <div className="battery">battery</div>
      <div className="gear">4</div>
      <div className="current-time">current-time</div>
      <div className="kilometers">kilometers</div>
      <div className="delta-time">delta-time</div>
      <div className="car-damages">Car Damages</div>
      <div className="hybrid-type">Overtake</div>
      <div className="fuel-type">Rich</div>
      <div className="Lap-remains">+1.36</div>
      <div className="fuel">6.0</div>
      <div className="best-time">best-time</div>
      <div className="last-time">last-time</div>
      <div className="car-config">car-config</div>
      <div className="race-status">race-status</div>
    </div>
  );
};

export default F1Dashboard;
