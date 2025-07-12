export interface ParticipantDataF124Type {
  /** 1 = AI, 0 = humano */
  aiControlled: number;
  /** Driver ID (veja apêndice de Driver IDs) */
  driverId: number;
  /** ID de rede (em multiplayer) */
  networkId: number;
  /** Team ID (veja apêndice de Team IDs) */
  teamId: number;
  /** 1 = é seu time, 0 = outro time */
  myTeam: number;
  /** Número no carro */
  raceNumber: number;
  /** Nacionalidade (veja apêndice de Nationality IDs) */
  nationality: number;
  /** Nome do piloto ou gamertag (UTF-8, sem terminação NULL) */
  name: string;
  /** 0 = telemetry restrita, 1 = pública */
  yourTelemetry: number;
  /** 0 = não mostra online names, 1 = mostra */
  showOnlineNames: number;
  /** Tech level em F1 World */
  techLevel: number;
  /** Plataforma (1=Steam,3=PlayStation,4=Xbox,6=Origin,255=unknown) */
  platform: number;
}

/**
 * Conjunto de dados do pacote Participants (Packet ID = 4)
 */
export interface ParticipantsF124Type {
  /** Número de carros ativos na sessão */
  numActiveCars: number;
  /** Array de participantes (até 22) */
  participants: ParticipantDataF124Type[];
}
