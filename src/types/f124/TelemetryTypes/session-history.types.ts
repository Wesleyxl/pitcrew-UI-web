export interface LapHistoryEntryF124Type {
  /** Tempo da volta em milissegundos */
  lapTimeInMs: number;
  /** Setor 1 — milissegundos */
  sector1TimeMsPart: number;
  /** Setor 1 — minutos */
  sector1TimeMinutesPart: number;
  /** Setor 2 — milissegundos */
  sector2TimeMsPart: number;
  /** Setor 2 — minutos */
  sector2TimeMinutesPart: number;
  /** Setor 3 — milissegundos */
  sector3TimeMsPart: number;
  /** Setor 3 — minutos */
  sector3TimeMinutesPart: number;
  /** Flags de validade (bit0=lap, bit1=sector1, bit2=sector2, bit3=sector3) */
  lapValidBitFlags: number;
}

export interface TyreStintEntryF124Type {
  /** Volta em que o stint termina (255 = atual) */
  endLap: number;
  /** Composto real utilizado */
  tyreActualCompound: number;
  /** Composto visual utilizado */
  tyreVisualCompound: number;
}

export interface SessionHistoryF124Type {
  /** Índice do carro a que se refere (0–21) */
  carIdx: number;
  /** Número de voltas armazenadas (incluindo parcial) */
  numLaps: number;
  /** Número de stints de pneus registrados */
  numTyreStints: number;
  /** Volta da melhor volta */
  bestLapTimeLapNum: number;
  /** Volta do melhor setor 1 */
  bestSector1LapNum: number;
  /** Volta do melhor setor 2 */
  bestSector2LapNum: number;
  /** Volta do melhor setor 3 */
  bestSector3LapNum: number;
  /** Histórico de voltas */
  lapHistoryData: LapHistoryEntryF124Type[];
  /** Histórico de stint de pneus */
  tyreStintsHistoryData: TyreStintEntryF124Type[];
}
