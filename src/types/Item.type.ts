export type TItem = {
  name: string;
  description: string;
  type: Type;
  level: number;
  rarity: Rarity;
  vendor_value: number;
  default_skin: number;
  game_types: string[]; //TODO: Вынести в отдельный тип
  flags: string[]; //TODO: Вынести в отдельный тип
  restrictions: string[]; //TODO: Вынести в отдельный тип
  id: number;
  chat_link: string;
  icon: string;
  details: Details;
};

export enum AttributeName {
  AgonyResistance = 'Agony Resistance',
  BoonDuration = 'Concentration',
  ConditionDamage = 'Condition Damage',
  ConditionDuration = 'Expertise',
  CritDamage = 'Ferocity',
  Healing = 'Healing Power',
  Power = 'Power',
  Precision = 'Precision',
  Toughness = 'Toughness',
  Vitality = 'Vitality',
}

export enum Rarity {
  Junk = 'Junk',
  Basic = 'Basic',
  Fine = 'Fine',
  Masterwork = 'Masterwork',
  Rare = 'Rare',
  Exotic = 'Exotic',
  Ascended = 'Ascended',
  Legendary = 'Legendary',
}

export enum Type {
  Armor = 'Armor',
  Back = 'Back item',
  Bag = 'Bags',
  Consumable = 'Consumables',
  Container = 'Containers',
  CraftingMaterial = 'Crafting materials',
  Gathering = 'Gathering tools',
  Gizmo = 'Gizmos',
  Key = 'Key',
  MiniPet = 'Miniatures',
  Tool = 'Salvage kits',
  Trait = 'Trait guides',
  Trinket = 'Trinkets',
  Trophy = 'Trophies',
  UpgradeComponent = 'Upgrade components',
  Weapon = 'Weapons',
}

export type Details = {
  type: string;
  weight_class: string;
  defense: number;
  infusion_slots: TItem[];
  attribute_adjustment: number;
  infix_upgrade: InfixUpgrade;
  suffix_item_id: number;
  secondary_suffix_item_id: string;
};

export type InfixUpgrade = {
  id: number;
  attributes: Attribute[];
};

export type Attribute = {
  attribute: AttributeName;
  modifier: number;
};
