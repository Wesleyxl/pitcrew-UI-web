// src/types/event.ts

/** Código de 4 caracteres do evento (e.g. "FTLP", "DRSE") */
interface BaseEvent {
  eventCode: string;
}

/** Piloto fez a primeira volta rápida */
export interface FastestLapEvent extends BaseEvent {
  eventCode: "FTLP";
  vehicleIdx: number;
  lapTime: number; // em segundos
}

/** Piloto se aposentou (retired) */
export interface RetirementEvent extends BaseEvent {
  eventCode: "RTMT";
  vehicleIdx: number;
}

/** DRS enabled/disabled */
export interface DrsEvent extends BaseEvent {
  eventCode: "DRSE" | "DRSD";
}

/** Team mate entrou nos pits */
export interface TeamMateInPitsEvent extends BaseEvent {
  eventCode: "TMPT";
  vehicleIdx: number;
}

/** Bandeirada (chequered flag) */
export interface ChequeredFlagEvent extends BaseEvent {
  eventCode: "CHQF";
}

/** Vencedor da corrida */
export interface RaceWinnerEvent extends BaseEvent {
  eventCode: "RCWN";
  vehicleIdx: number;
}

/** Penalidade aplicada */
export interface PenaltyEvent extends BaseEvent {
  eventCode: "PENA";
  penaltyType: number;
  infringementType: number;
  vehicleIdx: number;
  otherVehicleIdx: number;
  time: number; // segundos ou penalidade fixa
  lapNum: number;
  placesGained: number;
}

/** Speed trap */
export interface SpeedTrapEvent extends BaseEvent {
  eventCode: "SPTP";
  vehicleIdx: number;
  speed: number; // km/h
  isOverallFastestInSession: boolean;
  isDriverFastestInSession: boolean;
  fastestVehicleIdxInSession: number;
  fastestSpeedInSession: number; // km/h
}

/** Contagem de luzes de largada */
export interface StartLightsEvent extends BaseEvent {
  eventCode: "STLG";
  numLights: number;
}

/** Lights out */
export interface LightsOutEvent extends BaseEvent {
  eventCode: "LGOT";
}

/** Drive-through servido */
export interface DriveThroughServedEvent extends BaseEvent {
  eventCode: "DTSV";
  vehicleIdx: number;
}

/** Stop-go servido */
export interface StopGoServedEvent extends BaseEvent {
  eventCode: "SGSV";
  vehicleIdx: number;
}

/** Flashback (replay) */
export interface FlashbackEvent extends BaseEvent {
  eventCode: "FLBK";
  flashbackFrameIdentifier: number;
  flashbackSessionTime: number; // em segundos
}

/** Status de botão */
export interface ButtonStatusEvent extends BaseEvent {
  eventCode: "BUTN";
  buttonStatus: number; // bitmask
}

/** Manobra de ultrapassagem */
export interface OvertakeEvent extends BaseEvent {
  eventCode: "OVTK";
  overtakingVehicleIdx: number;
  beingOvertakenVehicleIdx: number;
}

/** Safety car */
export interface SafetyCarEvent extends BaseEvent {
  eventCode: "SCAR";
  safetyCarType: number; // 0=none,1=full,2=virtual,3=formation
  eventType: number; // 0=deployed,1=returning,2=returned,3=resume race
}

/** Colisão entre carros */
export interface CollisionEvent extends BaseEvent {
  eventCode: "COLL";
  vehicle1Idx: number;
  vehicle2Idx: number;
}

/**
 * União de todos os possíveis eventos de corrida (Packet ID = 3)
 */
export type EventF124Type =
  | FastestLapEvent
  | RetirementEvent
  | DrsEvent
  | TeamMateInPitsEvent
  | ChequeredFlagEvent
  | RaceWinnerEvent
  | PenaltyEvent
  | SpeedTrapEvent
  | StartLightsEvent
  | LightsOutEvent
  | DriveThroughServedEvent
  | StopGoServedEvent
  | FlashbackEvent
  | ButtonStatusEvent
  | OvertakeEvent
  | SafetyCarEvent
  | CollisionEvent;

/** Discriminador de evento para o front */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEventData(obj: any): obj is EventF124Type {
  return obj && typeof obj.eventCode === "string";
}
