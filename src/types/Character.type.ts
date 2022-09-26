export type TCharacter = {
  name: string;
  race: string;
  gender: string;
  flags: string[];
  profession: string;
  level: number;
  guild: null;
  age: number;
  created: Date;
  deaths: number;
  crafting: Crafting[];
  backstory: string[];
  wvw_abilities: WvwAbility[];
  equipment: Equipment[];
  recipes: number[];
  training: Training[];
  bags: Bag[];
  equipment_pvp: EquipmentPvp;
  specializations: Specialization[];
  skills: SkillSet;
};

export type SkillSet = {
  pve: Skill;
  pvp: Skill;
  wvw: Skill;
};

export type Bag = {
  id: number;
  size: number;
  inventory: Array<Inventory | null>;
};

export type Inventory = {
  id: number;
  count: number;
  binding?: Binding;
};

export enum Binding {
  Account = 'Account',
}

export type Crafting = {
  discipline: string;
  rating: number;
  active: boolean;
};

export type Equipment = {
  id: number;
  slot: string;
  stats?: Stats;
  binding?: Binding;
  dyes?: Array<number | null>;
  upgrades?: number[];
  infusions?: number[];
  skin?: number;
};

export type Stats = {
  id: number;
  attributes: Attributes;
};

export type Attributes = {
  Power: number;
  Precision: number;
  ConditionDamage: number;
  ConditionDuration: number;
};

export type EquipmentPvp = {
  amulet: null;
  rune: number;
  sigils: Array<number | null>;
};

export type Skill = {
  heal: number;
  utilities: number[];
  elite: number;
};

export type Specialization = {
  id: number;
  traits: number[];
};

export type Training = {
  id: number;
  spent: number;
  done: boolean;
};

export type WvwAbility = {
  id: number;
  rank: number;
};
