export interface FinalClassificationDataF124Types {
  /** Posição de chegada (1 = vencedor) */
  position: number;
  /** Total de voltas completadas */
  numLaps: number;
  /** Posição no grid de largada */
  gridPosition: number;
  /** Pontos ganhos nesta corrida */
  points: number;
  /** Quantidade de pit stops feitos */
  numPitStops: number;
  /** Status do resultado:
   * 0 = invalid, 1 = inactive, 2 = active,
   * 3 = finished, 4 = didnotfinish,
   * 5 = disqualified, 6 = not classified, 7 = retired
   */
  resultStatus: number;
  /** Melhor volta da sessão em milissegundos */
  bestLapTimeInMS: number;
  /** Tempo total de corrida em segundos (sem penalidades) */
  totalRaceTime: number;
  /** Tempo total de penalidades acumulado em segundos */
  penaltiesTime: number;
  /** Número de penalidades aplicadas */
  numPenalties: number;
  /** Número de stints de pneus utilizados */
  numTyreStints: number;
  /** Códigos dos compostos usados em cada stint (até 8) */
  tyreStintsActual: number[];
  /** Códigos visuais dos compostos em cada stint (até 8) */
  tyreStintsVisual: number[];
  /** Voltas em que cada stint terminou (até 8) */
  tyreStintsEndLaps: number[];
}

export interface FinalClassificationF124Type {
  /** Número de carros na classificação final */
  numCars: number;
  /** Lista de dados de classificação, na ordem de veículo (0–21) */
  classifications: FinalClassificationDataF124Types[];
}
