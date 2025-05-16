import lich from '$lib/assets/images/Lich.gif';
import gorgon from '$lib/assets/images/Gorgon_002.gif';
import harpy from '$lib/assets/images/Harpy_002.gif';
import reaper from '$lib/assets/images/Reaper.gif';
import cyclops from '$lib/assets/images/Cyclops_002.gif';
import archdemon from '$lib/assets/images/Archdemon_002.gif';
import cursed from '$lib/assets/images/Cursed.gif';
import colossus from '$lib/assets/images/Colossus.gif';
import infernal from '$lib/assets/images/The_Infernal.gif';
import roboChicken from '$lib/assets/images/Robot_Chicken.gif';
import shieldBot from '$lib/assets/images/Shield_Bot_All.gif';
import stalker from '$lib/assets/images/Soul_Stalker.gif';
// runes
import ice from '$lib/assets/images/Ice_Rune_0.png';
import poison from '$lib/assets/images/Poison_Rune_0.png';
import blood from '$lib/assets/images/Blood_Rune_0.png';
import moon from '$lib/assets/images/Moon_Rune_0.png';
import death from '$lib/assets/images/Death_Rune_0.png';
import cosmic from '$lib/assets/images/Cosmic_Rune_0.png';
// misc
export { default as arrowDown } from '$lib/assets/images/Arrow_Right_1.png';
export { default as  arrowUp } from '$lib/assets/images/Arrow_Right_0.png';
export { default as  borderImage } from '$lib/assets/images/PanelBacking_Dark.png';


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
] as const;

export const runes = ['ice', 'poison', 'blood', 'moon', 'death', 'cosmic'] as const;

export type Legend = typeof legends[number];
export type Rune = typeof runes[number];

export const legendMap: Record<Legend, any> = {
  lich,
  gorgon,
  harpy,
  reaper,
  cyclops,
  archdemon,
  cursed,
  colossus,
  infernal,
  'robot chicken': roboChicken,
  'shield bot': shieldBot,
  stalker
};

export const runeMap: Record<Rune, any> = {
  ice, poison, blood, moon, death, cosmic
}

