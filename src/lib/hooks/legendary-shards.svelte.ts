import { type Legend, type Rune } from '$lib/types';

export const neededRuneCount = $state<Record<Rune, number>>({
  ice: 0,
  poison: 0,
  blood: 0,
  moon: 0,
  death: 0,
  cosmic: 0
});
export const neededLegendaryCount = $state<Record<Legend, number>>({
  lich: 0,
  gorgon: 0,
  harpy: 0,
  reaper: 0,
  cyclops: 0,
  archdemon: 0,
  cursed: 0,
  infernal: 0,
  colossus: 0,
  'robot chicken': 0,
  'shield bot': 0,
  stalker: 0
});

export function incNeededLegendary(legend: Legend) {
  const count = neededLegendaryCount[legend];
  if (
    (legend === 'cursed' || legend === 'colossus' || legend === 'infernal') &&
    neededLegendaryCount[legend] === 1
  ) {
    return null;
  }
  if ((legend === 'shield bot' || legend === 'robot chicken' || legend === 'archdemon') && count === 4) {
    return null;
  }
  neededLegendaryCount[legend] = neededLegendaryCount[legend] + 1;
  updateNeededRuneCount(legend, 'inc', neededLegendaryCount[legend]);
}

export function decNeededLegendary(legend: Legend) {
  if (neededLegendaryCount[legend] <= 0) {
    return null;
  }
  neededLegendaryCount[legend] =
    neededLegendaryCount[legend] <= 0
      ? neededLegendaryCount[legend]
      : neededLegendaryCount[legend] - 1;
  updateNeededRuneCount(legend, 'dec', neededLegendaryCount[legend]);
}

export function updateNeededRuneCount(legend: Legend, action: 'inc' | 'dec', count: number) {
  const isInc = action === 'inc';
  const isHigh = count === 1;
  const isLow = count === 0;

  switch (legend?.toLowerCase()) {
    case 'lich':
      neededRuneCount.ice += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
      break;

    case 'gorgon':
      neededRuneCount.poison += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
      break;

    case 'harpy':
      neededRuneCount.blood += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
      break;

    case 'reaper':
      neededRuneCount.ice += isInc ? (isHigh ? 1600 : 1550) : isLow ? -1600 : -1550;
      neededRuneCount.moon += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
      break;

    case 'cyclops':
      neededRuneCount.poison += isInc ? (isHigh ? 1600 : 1550) : isLow ? -1600 : -1550;
      neededRuneCount.moon += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
      break;

    case 'archdemon':
      neededRuneCount.blood += isInc ? (isHigh ? 960 : 930) : isLow ? -960 : -930;
      neededRuneCount.death += isInc ? (isHigh ? 960 : 930) : isLow ? -960 : -930;
      break;

    case 'cursed':
      neededRuneCount.ice += isInc ? 2240 : -2240;
      neededRuneCount.moon += isInc ? 640 : -640;
      break;

    case 'colossus':
      neededRuneCount.poison += isInc ? 2240 : -2240;
      neededRuneCount.moon += isInc ? 640 : -640;
      break;

    case 'infernal':
      neededRuneCount.blood += isInc ? 1600 : -1600;
      neededRuneCount.death += isInc ? 960 : -960;
      break;

    case 'robot chicken':
      neededRuneCount.ice += isInc ? 960 : -960;
      neededRuneCount.poison += isInc ? 480 : -480;
      break;

    case 'shield bot':
      neededRuneCount.cosmic += isInc ? 640 : -640;
      break;

    case 'stalker':
      neededRuneCount.cosmic += isInc ? 800 : -800;
      neededRuneCount.death += isInc ? 800 : -800;
      break;

    default:
      throw new Error(`unknown legendary: ${legend}`);
  }
}

export function resetNeededCounts() {
  for (const key of Object.keys(neededLegendaryCount) as Legend[]) {
    neededLegendaryCount[key] = 0;
  }
  for (const key of Object.keys(neededRuneCount) as Rune[]) {
    neededRuneCount[key] = 0;
  }
}

export function rebuildNeededRuneCountFromLegendaries() {
  for (const key of Object.keys(neededRuneCount) as Rune[]) {
    neededRuneCount[key] = 0;
  }
  for (const legend of Object.keys(neededLegendaryCount) as Legend[]) {
    const count = neededLegendaryCount[legend];
    for (let i = 1; i <= count; i++) {
      updateNeededRuneCount(legend, 'inc', i);
    }
  }
}
