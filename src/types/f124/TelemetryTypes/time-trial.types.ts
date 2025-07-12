export interface TimeTrialF124DataType {
  /** Índice do carro a que se refere */
  carIdx: number;
  /** ID da equipe */
  teamId: number;
  /** Tempo de volta em milisegundos */
  lapTimeMs: number;
  /** Tempo do setor 1 em milisegundos */
  sector1TimeMs: number;
  /** Tempo do setor 2 em milisegundos */
  sector2TimeMs: number;
  /** Traction control – 0=off, 1=medium, 2=full */
  tractionControl: number;
  /** Gearbox assist – 1=manual, 2=manual&suggested, 3=auto */
  gearboxAssist: number;
  /** Anti-lock brakes – 0=off, 1=on */
  antiLockBrakes: number;
  /** Equal car performance – 0=realistic, 1=equal */
  equalCarPerformance: number;
  /** Custom setup – 0=no, 1=yes */
  customSetup: number;
  /** Marca se o conjunto é válido – 0=invalid, 1=valid */
  valid: number;
}

/**
 * Pacote completo de Time Trial (Packet ID = 14)
 */
export interface TimeTrialF124Type {
  /** Melhor da sessão (player session best) */
  playerSessionBest: TimeTrialF124DataType;
  /** Melhor pessoal (personal best) */
  personalBest: TimeTrialF124DataType;
  /** Dados do rival */
  rival: TimeTrialF124DataType;
}
