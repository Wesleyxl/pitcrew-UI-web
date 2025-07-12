export interface SessionF124Type {
  /** Clima atual (0=clear,1=light cloud,2=overcast,3=light rain,4=heavy rain,5=storm) */
  weather: number;
  /** Temperatura da pista (°C) */
  trackTemperature: number;
  /** Temperatura do ar (°C) */
  airTemperature: number;
  /** Total de voltas da corrida */
  totalLaps: number;
  /** Comprimento do circuito (m) */
  trackLength: number;
  /** Tipo de sessão (0=unknown,1=P1,2=P2...15=Race, etc) */
  sessionType: number;
  /** ID da pista (conforme Appendix) */
  trackId: number;
  /** Fórmula (0=F1 Modern,1=F1 Classic,2=F2, etc) */
  formula: number;
  /** Tempo restante na sessão (s) */
  sessionTimeLeft: number;
  /** Duração total da sessão (s) */
  sessionDuration: number;
  /** Limite de velocidade no pit lane (km/h) */
  pitSpeedLimit: number;
  /** Estado do safety car (0=none,1=full,2=virtual,3=formation lap) */
  safetyCarStatus: number;
  /** Se a sessão é online (0=offline,1=online) */
  networkGame: number;
  /** Número de zonas de marshal ativas */
  numMarshalZones: number;
  /** Zonas de marshal: início (fractional lap) e flag (0=none,1=green,2=blue,3=yellow) */
  marshalZones: Array<{
    zoneStart: number;
    zoneFlag: number;
  }>;
  /** Precisão da previsão de tempo (0=perfect,1=approximate) */
  forecastAccuracy: number;
  /** Dificuldade do AI (0–110) */
  aiDifficulty: number;
  /** Ideal lap para o pit‐stop do jogador */
  pitStopWindowIdealLap: number;
  /** Última lap para o pit‐stop do jogador */
  pitStopWindowLatestLap: number;
  /** Pos. prevista ao retornar do pit (jogador) */
  pitStopRejoinPosition: number;
}
