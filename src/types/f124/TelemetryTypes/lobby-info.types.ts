export interface LobbyInfoDataF124Type {
  /** 1 = AI controlled, 0 = human */
  aiControlled: boolean;
  /** ID do time (appendix) */
  teamId: number;
  /** Nacionalidade do jogador (appendix) */
  nationality: number;
  /** Plataforma: 1=Steam,3=PlayStation,4=Xbox,6=Origin,255=unknown */
  platform: number;
  /** Nome do jogador (UTF-8, até 48 bytes, null-terminated) */
  name: string;
  /** Número do carro */
  carNumber: number;
  /** Telemetry setting: 0=restricted,1=public */
  yourTelemetry: number;
  /** Show online names setting: 0=off,1=on */
  showOnlineNames: number;
  /** Tech level (F1 World) */
  techLevel: number;
  /** Ready status: 0=not ready,1=ready,2=spectating */
  readyStatus: number;
}

/**
 * Pacote completo de lobby multiplayer
 */
export interface LobbyInfoF124Type {
  /** Quantidade de jogadores no lobby */
  numPlayers: number;
  /** Dados de cada participante ativo */
  players: LobbyInfoDataF124Type[];
}
