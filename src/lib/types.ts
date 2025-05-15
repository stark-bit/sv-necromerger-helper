export const legends = [
  'lich',
  'gorgon',
  'harpy',
  'reaper',
  'cyclops',
  'archdemon',
  'cursed',
  'colossus',
  'infernal',
  'robot chicken',
  'shield bot',
  'stalker'
] as const
export type Legend = typeof legends[number];

export const runes = ['ice', 'poison', 'blood', 'moon', 'death', 'cosmic'] as const;
export type Rune = typeof runes[number];

