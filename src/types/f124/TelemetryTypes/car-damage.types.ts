export interface CarDamageF124Type {
  /** Desgaste dos pneus (%) [RL, RR, FL, FR] */
  tyreWear: number[];
  /** Dano dos pneus (%) [RL, RR, FL, FR] */
  tyreDamage: number[];
  /** Dano dos freios (%) [RL, RR, FL, FR] */
  brakeDamage: number[];
  /** Dano da asa dianteira esquerda (%) */
  frontLeftWingDamage: number;
  /** Dano da asa dianteira direita (%) */
  frontRightWingDamage: number;
  /** Dano da asa traseira (%) */
  rearWingDamage: number;
  /** Dano do assoalho (%) */
  floorDamage: number;
  /** Dano do difusor (%) */
  diffuserDamage: number;
  /** Dano das laterais (%) */
  sidepodDamage: number;
  /** Falha no DRS (true = falha) */
  drsFault: boolean;
  /** Falha no ERS (true = falha) */
  ersFault: boolean;
  /** Dano na caixa de câmbio (%) */
  gearBoxDamage: number;
  /** Dano do motor (%) */
  engineDamage: number;
  /** Desgaste MGU-H (%) */
  engineMGUHWear: number;
  /** Desgaste ES (%) */
  engineESWear: number;
  /** Desgaste CE (%) */
  engineCEWear: number;
  /** Desgaste ICE (%) */
  engineICEWear: number;
  /** Desgaste MGU-K (%) */
  engineMGUKWear: number;
  /** Desgaste TC (%) */
  engineTCWear: number;
  /** Motor estourado (true = estourado) */
  engineBlown: boolean;
  /** Motor travado (true = travado) */
  engineSeized: boolean;
}
