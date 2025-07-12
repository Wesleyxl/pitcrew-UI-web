export interface CarTelemetryDataF124Type {
  speed: number; // km/h
  throttle: number; // 0.0–1.0
  steer: number; // –1.0–1.0
  brake: number; // 0.0–1.0
  clutch: number; // 0–100
  gear: number; // –1 = R, 0 = N, 1–8 = gears
  engineRPM: number;
  drs: number; // 0 = off, 1 = on
  revLightsPercent: number; // 0–100
  revLightsBitValue: number; // bitmap LEDs
  brakesTemperature: number[]; // [RL, RR, FL, FR] °C
  tyresSurfaceTemperature: number[]; // [RL, RR, FL, FR] °C
  tyresInnerTemperature: number[]; // [RL, RR, FL, FR] °C
  engineTemperature: number; // °C
  tyresPressure: number[]; // [RL, RR, FL, FR] PSI
  surfaceType: number[]; // [RL, RR, FL, FR]
}

/**
 * Estrutura do pacote Car Telemetry (ID = 6)
 */
export interface CarTelemetryF124Type {
  carTelemetryData: CarTelemetryDataF124Type[]; // 22 carros
  mfdPanelIndex: number; // painel atual (player)
  mfdPanelIndexSecondary: number; // painel player 2 (splitscreen)
  suggestedGear: number; // gear sugerida (–1 se nenhuma)
}
