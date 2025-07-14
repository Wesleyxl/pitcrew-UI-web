export interface CarSetupF124DataType {
  /** Front wing aero (0–255) */
  frontWing: number;
  /** Rear wing aero (0–255) */
  rearWing: number;
  /** Differential adjustment on throttle (%) */
  onThrottle: number;
  /** Differential adjustment off throttle (%) */
  offThrottle: number;
  /** Front camber angle (suspension geometry) */
  frontCamber: number;
  /** Rear camber angle (suspension geometry) */
  rearCamber: number;
  /** Front toe angle (suspension geometry) */
  frontToe: number;
  /** Rear toe angle (suspension geometry) */
  rearToe: number;
  /** Front suspension stiffness (0–255) */
  frontSuspension: number;
  /** Rear suspension stiffness (0–255) */
  rearSuspension: number;
  /** Front anti-roll bar (0–255) */
  frontAntiRollBar: number;
  /** Rear anti-roll bar (0–255) */
  rearAntiRollBar: number;
  /** Front ride height (0–255) */
  frontSuspensionHeight: number;
  /** Rear ride height (0–255) */
  rearSuspensionHeight: number;
  /** Brake pressure (%) */
  brakePressure: number;
  /** Brake bias (%) */
  brakeBias: number;
  /** Engine braking (%) */
  engineBraking: number;
  /** Rear left tyre pressure (PSI) */
  rearLeftTyrePressure: number;
  /** Rear right tyre pressure (PSI) */
  rearRightTyrePressure: number;
  /** Front left tyre pressure (PSI) */
  frontLeftTyrePressure: number;
  /** Front right tyre pressure (PSI) */
  frontRightTyrePressure: number;
  /** Ballast (0–255) */
  ballast: number;
  /** Fuel load (kg) */
  fuelLoad: number;
}

export interface CarSetupF124Type {
  /** Array de setups para todos os carros (índice = vehicleIndex) */
  carSetups: CarSetupF124DataType[];
  /** Valor de asa dianteira que será aplicado no próximo pit stop (player-only) */
  nextFrontWingValue: number;
}
