export interface LapF124Type {
  /** Última volta em milissegundos */
  lastLapTimeMs: number;
  /** Tempo na volta atual em milissegundos */
  currentLapTimeMs: number;
  /** Setor 1 — parte em milissegundos */
  sector1TimeMsPart: number;
  /** Setor 1 — parte em minutos */
  sector1TimeMinutesPart: number;
  /** Setor 2 — parte em milissegundos */
  sector2TimeMsPart: number;
  /** Setor 2 — parte em minutos */
  sector2TimeMinutesPart: number;
  /** Delta para carro à frente — parte em milissegundos */
  deltaToCarInFrontMsPart: number;
  /** Delta para carro à frente — parte em minutos */
  deltaToCarInFrontMinutesPart: number;
  /** Delta para líder de corrida — parte em milissegundos */
  deltaToRaceLeaderMsPart: number;
  /** Delta para líder de corrida — parte em minutos */
  deltaToRaceLeaderMinutesPart: number;
  /** Distância na volta atual (m) */
  lapDistance: number;
  /** Distância total na sessão (m) */
  totalDistance: number;
  /** Delta em relação ao safety car (s) */
  safetyCarDelta: number;
  /** Posição de corrida (1 = primeiro) */
  carPosition: number;
  /** Número da volta atual */
  currentLapNum: number;
  /** 0 = não em pit, 1 = entrando, 2 = na área de pit */
  pitStatus: number;
  /** Quantidade de pit-stops já feitos */
  numPitStops: number;
  /** Setor atual (0, 1 ou 2) */
  sector: number;
  /** 0 = volta válida, 1 = volta inválida */
  currentLapInvalid: number;
  /** Segundos de penalidade acumulados */
  penalties: number;
  /** Número de warnings recebidos */
  totalWarnings: number;
  /** Warnings por cortar chicane */
  cornerCuttingWarnings: number;
  /** Drive-throughs a cumprir */
  numUnservedDriveThroughPens: number;
  /** Stop-go a cumprir */
  numUnservedStopGoPens: number;
  /** Posição de largada */
  gridPosition: number;
  /** Status do piloto (0=garage,1=flying,2=in lap,3=out lap,4=on track) */
  driverStatus: number;
  /** Resultado (0=invalid,1=inactive,2=active,3=finished,4=DNF,5=disqualified,6=not classified,7=retired) */
  resultStatus: number;
  /** 0 = pit-lane timer off, 1 = on */
  pitLaneTimerActive: number;
  /** Tempo no pit-lane em ms */
  pitLaneTimeInLaneInMs: number;
  /** Duração do pit-stop em ms */
  pitStopTimerInMs: number;
  /** 1 = deve cumprir penalidade no pit-stop */
  pitStopShouldServePen: number;
  /** Velocidade máxima no speed trap (km/h) */
  speedTrapFastestSpeed: number;
  /** Volta em que se obteve essa velocidade (255 = n/a) */
  speedTrapFastestLap: number;
}
