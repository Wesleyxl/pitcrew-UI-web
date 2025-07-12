export interface MotionExF124Type {
  suspensionPosition: number[]; // [RL, RR, FL, FR]
  suspensionVelocity: number[];
  suspensionAcceleration: number[];
  wheelSpeed: number[];
  wheelSlipRatio: number[];
  wheelSlipAngle: number[];
  wheelLatForce: number[];
  wheelLongForce: number[];
  heightOfCOGAboveGround: number;
  localVelocityX: number;
  localVelocityY: number;
  localVelocityZ: number;
  angularVelocityX: number;
  angularVelocityY: number;
  angularVelocityZ: number;
  angularAccelerationX: number;
  angularAccelerationY: number;
  angularAccelerationZ: number;
  frontWheelsAngle: number;
  wheelVertForce: number[]; // [RL, RR, FL, FR]
  frontAeroHeight: number;
  rearAeroHeight: number;
  frontRollAngle: number;
  rearRollAngle: number;
  chassisYaw: number;
}
