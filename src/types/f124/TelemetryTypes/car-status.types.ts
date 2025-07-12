export interface CarStatusF124Type {
  tractionControl: number; // 0 = off, 1 = medium, 2 = full
  antiLockBrakes: number; // 0 = off, 1 = on
  fuelMix: number; // 0 = lean, 1 = standard, 2 = rich, 3 = max
  frontBrakeBias: number; // Brake bias percentage
  pitLimiterStatus: number; // 0 = off, 1 = on
  fuelInTank: number; // Current fuel mass (kg)
  fuelCapacity: number; // Fuel capacity (kg)
  fuelRemainingLaps: number; // Estimated laps remaining
  maxRPM: number; // Cars max RPM
  idleRPM: number; // Cars idle RPM
  maxGears: number; // Maximum number of gears
  drsAllowed: number; // 0 = not allowed, 1 = allowed
  drsActivationDistance: number; // Distance (m) until DRS available
  actualTyreCompound: number; // See spec for codes
  visualTyreCompound: number; // See spec for codes
  tyresAgeLaps: number; // Age in laps of current tyre set
  vehicleFiaFlags: number; // -1 = invalid, 0 = none, 1 = green, 2 = blue, 3 = yellow
  enginePowerICE: number; // ICE power output (W)
  enginePowerMGUK: number; // MGU-K power output (W)
  ersStoreEnergy: number; // ERS energy store (J)
  ersDeployMode: number; // 0 = none, 1 = medium, 2 = hotlap, 3 = overtake
  ersHarvestedThisLapMGUK: number; // Energy harvested by MGU-K this lap (J)
  ersHarvestedThisLapMGUH: number; // Energy harvested by MGU-H this lap (J)
  ersDeployedThisLap: number; // Energy deployed this lap (J)
  networkPaused: number; // 0 = not paused, 1 = paused
}
