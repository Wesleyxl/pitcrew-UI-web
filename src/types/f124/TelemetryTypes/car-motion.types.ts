export interface CarMotionDataF124Type {
  /** World position in metres */
  worldPositionX: number;
  worldPositionY: number;
  worldPositionZ: number;
  /** Velocity in world space metres/s */
  worldVelocityX: number;
  worldVelocityY: number;
  worldVelocityZ: number;
  /** Forward direction as normalized vector component (raw int16) */
  worldForwardDirX: number;
  worldForwardDirY: number;
  worldForwardDirZ: number;
  /** Right direction as normalized vector component (raw int16) */
  worldRightDirX: number;
  worldRightDirY: number;
  worldRightDirZ: number;
  /** G-Force components (g) */
  gForceLateral: number;
  gForceLongitudinal: number;
  gForceVertical: number;
  /** Orientation angles (radians) */
  yaw: number;
  pitch: number;
  roll: number;
}

/**
 * PacketMotionData holds motion data for all cars on track
 */
export interface CarMotionF124Type {
  carMotionData: CarMotionDataF124Type[];
}
