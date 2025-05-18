import { type Legend } from "$lib/types";

export let runeCount = $state({ ice: 0, poison: 0, blood: 0, moon: 0, death: 0, cosmic: 0 });
export let legendaryCount = $state<Record<Legend, number>>({
  lich: 0, gorgon: 0, harpy: 0, reaper: 0,
  cyclops: 0, archdemon: 0, cursed: 0, infernal: 0, colossus: 0, "robot chicken": 0, "shield bot": 0, stalker: 0
});

export function inc(legend: Legend) {
  let count = legendaryCount[legend];
  if ((legend === 'cursed' || legend === 'colossus' || legend === 'infernal') && legendaryCount[legend] === 1) {
    return null;
  }
  if ((legend === 'shield bot' || legend === 'robot chicken') && count === 3) {
    return null;
  }
  legendaryCount[legend] = legendaryCount[legend] + 1;
  handleRuneCount(legend, 'inc', legendaryCount[legend]);
}

export function dec(legend: Legend) {
  if (legendaryCount[legend] <= 0) {
    return null;
  }
  legendaryCount[legend] = legendaryCount[legend] <= 0 ? legendaryCount[legend] : legendaryCount[legend] - 1;
  handleRuneCount(legend, 'dec', legendaryCount[legend]);
}

export function handleRuneCount(legend: Legend, action: 'inc' | 'dec', count: number) {
  switch (legend?.toLowerCase()) {
    case 'lich':
      if (action === 'inc') {
        count === 1 ? runeCount.ice += 640 : runeCount.ice += 620;
      } else {
        count === 0 ? runeCount.ice -= 640 : runeCount.ice -= 620;
      }
      break;
    case 'gorgon':
      if (action === 'inc') {
        count === 1 ? runeCount.poison += 640 : runeCount.poison += 620;
      } else {
        count === 0 ? runeCount.poison -= 640 : runeCount.poison -= 620;
      }
      break;
    case 'harpy':
      if (action === 'inc') {
        count === 1 ? runeCount.blood += 640 : runeCount.blood += 620;
      } else {
        count === 0 ? runeCount.blood -= 640 : runeCount.blood -= 620;
      }
      break;
    case 'reaper':
      if (action === 'inc') {
        count === 1 ? runeCount.ice += 1600 : runeCount.ice += 1550;
        count === 1 ? runeCount.moon += 640 : runeCount.moon += 620;
      } else {
        count === 0 ? runeCount.ice -= 1600 : runeCount.ice -= 1550;
        count === 0 ? runeCount.moon -= 640 : runeCount.moon -= 620;
      }
      break;
    case 'cyclops':
      if (action === 'inc') {
        count === 1 ? runeCount.poison += 1600 : runeCount.poison += 1550;
        count === 1 ? runeCount.moon += 640 : runeCount.moon += 620;

      } else {
        count === 0 ? runeCount.poison -= 1600 : runeCount.poison -= 1550;
        count === 0 ? runeCount.moon -= 640 : runeCount.moon -= 620;
      }
      break;
    case 'archdemon':
      if (action === 'inc') {
        count === 1 ? runeCount.blood += 960 : runeCount.blood += 930;
        count === 1 ? runeCount.death += 960 : runeCount.death += 930;
      } else {
        count === 0 ? runeCount.blood -= 960 : runeCount.blood -= 930;
        count === 0 ? runeCount.death -= 960 : runeCount.death -= 930;
      }
      break;
    case 'cursed':
      if (action === 'inc') {
        runeCount.ice += 2240;
        runeCount.moon += 640;
      } else {
        runeCount.ice -= 2240;
        runeCount.moon -= 640;
      }
      break;
    case 'colossus':
      if (action === 'inc') {
        runeCount.poison += 2240;
        runeCount.moon += 640;
      } else {
        runeCount.poison -= 2240;
        runeCount.moon -= 640;
      }
      break;
    case 'infernal':
      if (action === 'inc') {
        runeCount.blood += 1600;
        runeCount.death += 960;
      } else {
        runeCount.blood -= 1600;
        runeCount.death -= 960;
      }
      break;
    case 'robot chicken':
      if (action === 'inc') {
        count === 1 ? runeCount.ice += 960 : runeCount.ice += 960;
        count === 1 ? runeCount.poison += 480 : runeCount.poison += 480;
      } else {
        count === 0 ? runeCount.ice -= 960 : runeCount.ice -= 960;
        count === 0 ? runeCount.poison -= 480 : runeCount.poison -= 480;
      }
      break;
    case 'shield bot':
      if (action === 'inc') {
        count === 1 ? runeCount.cosmic += 640 : runeCount.cosmic += 640;

      } else {
        count === 0 ? runeCount.cosmic -= 640 : runeCount.cosmic -= 640;
      }
      break;
    case 'stalker':
      if (action === 'inc') {
        count === 1 ? runeCount.cosmic += 800 : runeCount.cosmic += 800;
        count === 1 ? runeCount.death += 800 : runeCount.death += 800;
      } else {
        count === 0 ? runeCount.cosmic -= 800 : runeCount.cosmic -= 800;
        count === 0 ? runeCount.death -= 800 : runeCount.death -= 800;
      }
      break;

    default:
      throw new Error(`unknown legendary: ${legend}`);
  }
}
