import type { CarDamageF124Type } from "./TelemetryTypes/car-damage.types";
import type { CarMotionF124Type } from "./TelemetryTypes/car-motion.types";
import type { CarSetupF124Type } from "./TelemetryTypes/car-setup.types";
import type { CarStatusF124Type } from "./TelemetryTypes/car-status.types";
import type { CarTelemetryF124Type } from "./TelemetryTypes/car-telemetry.types";
import type { EventF124Type } from "./TelemetryTypes/event.types";
import type { FinalClassificationF124Type } from "./TelemetryTypes/final-classification.type";
import type { LapF124Type } from "./TelemetryTypes/lap.types";
import type { LobbyInfoF124Type } from "./TelemetryTypes/lobby-info.types";
import type { MotionExF124Type } from "./TelemetryTypes/motion-ex.types";
import type { ParticipantsF124Type } from "./TelemetryTypes/participants.types";
import type { SessionHistoryF124Type } from "./TelemetryTypes/session-history.types";
import type { SessionF124Type } from "./TelemetryTypes/session.types";
import type { TimeTrialF124Type } from "./TelemetryTypes/time-trial.types";
import type { TyreSetsF124Type } from "./TelemetryTypes/tyres-set.types";

export interface TelemetryF124Type {
  lap: LapF124Type;
  carDamage: CarDamageF124Type;
  carMotion: CarMotionF124Type;
  carSetup: CarSetupF124Type;
  carStatus: CarStatusF124Type;
  carTelemetry: CarTelemetryF124Type;
  event: EventF124Type;
  finalClassification: FinalClassificationF124Type;
  lobbyInfo: LobbyInfoF124Type;
  motionEx: MotionExF124Type;
  participants: ParticipantsF124Type;
  sessionHistory: SessionHistoryF124Type;
  session: SessionF124Type;
  timeTrial: TimeTrialF124Type;
  tyresSet: TyreSetsF124Type;
}
