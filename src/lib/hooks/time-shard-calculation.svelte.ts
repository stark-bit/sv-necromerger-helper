import {
  neededLegendaryCount,
  neededLegendaryGroupMultipliers,
  type LegendaryGroupMultipliers
} from '$lib/hooks/legendary-shards.svelte';

export const shards = $state({ level: 0, feats: 15, legendary: 0, other: 100, total: 0 });

export const level = $state({ value: 60 });
export const feats = $state({ value: 18 });
export const other = $state({ value: 100 });

$effect.root(() => {
  $effect(() => {
    shards.level = calcLevelShards(level.value);
    shards.feats = calcFeats();
    shards.legendary = calcLegendary(neededLegendaryCount, neededLegendaryGroupMultipliers);
    shards.other = other.value;
    shards.total = calcTotal();
  });
});

function calcTotal() {
  return shards.level * (shards.feats / 100) * (shards.legendary / 100) * (shards.other / 100);
}

function calcFeats() {
  return 100 + 10 * feats.value;
}

function calcLegendary(
  legs: typeof neededLegendaryCount,
  legendaryGroupBonus: LegendaryGroupMultipliers
) {
  // T1
  const li = legs.lich;
  const go = legs.gorgon;
  const ha = legs.harpy;
  // T2
  const re = legs.reaper;
  const cy = legs.cyclops;
  const ar = legs.archdemon;
  // T3
  const cu = legs.cursed;
  const co = legs.colossus;
  const inf = legs.infernal;
  // T4
  const rc = legs['robot chicken'];
  const sb = legs['shield bot'];
  const st = legs.stalker;

  // base
  let bonus = 100;

  const t1BonusEnabled = li >= 1 && go >= 1 && ha >= 1;
  const t2BonusEnabled = re >= 1 && cy >= 1 && ar >= 1;
  const t3BonusEnabled = cu >= 1 && co >= 1 && inf >= 1;
  const t4BonusEnabled = rc >= 1 && sb >= 1 && st >= 1;

  let t1Bonus = 20 * legendaryGroupBonus.t1Bonus;
  let t2Bonus = 40 * legendaryGroupBonus.t2Bonus;
  let t3Bonus = 80 * legendaryGroupBonus.t3Bonus;
  let t4Bonus = 80 * legendaryGroupBonus.t4Bonus;
  let t5Bonus = 100 * legendaryGroupBonus.t5Bonus;

  // T1: Lich, Gorgon, Harpy
  bonus += li > 0 ? 10 + (li - 1) * 5 : 0;
  bonus += go > 0 ? 10 + (go - 1) * 5 : 0;
  bonus += ha > 0 ? 10 + (ha - 1) * 5 : 0;
  // T2: Reaper, Cyclops, Archdemon
  bonus += re > 0 ? 20 + (re - 1) * 10 : 0;
  bonus += cy > 0 ? 20 + (cy - 1) * 10 : 0;
  bonus += ar > 0 ? 20 + (ar - 1) * 10 : 0;
  // T3: Cursed, Collosus, Infernal
  bonus += cu > 0 ? 40 + (cu - 1) * 0 : 0;
  bonus += co > 0 ? 40 + (co - 1) * 0 : 0;
  bonus += inf > 0 ? 40 + (inf - 1) * 0 : 0;
  // T4: Robot chicken, shield bot, stalker
  bonus += rc > 0 ? 20 + (rc - 1) * 10 : 0;
  bonus += sb > 0 ? 30 + (sb - 1) * 15 : 0;
  bonus += st > 0 ? 40 + (st - 1) * 20 : 0;

  if (t1BonusEnabled) {
    bonus += t1Bonus;
  }
  // T2 bonus
  if (t2BonusEnabled) {
    bonus += t2Bonus;
  }
  // T3 bonus
  if (t3BonusEnabled) {
    bonus += t3Bonus;
  }
  if (t4BonusEnabled) {
    bonus += t4Bonus;
  }

  if (t1BonusEnabled && t2BonusEnabled && t3BonusEnabled && t4BonusEnabled) {
    bonus += t5Bonus;
  }

  return bonus;
}

function calcLevelShards(l: number) {
  let eligibleLevel = Object.keys(currentLevelMap)
    .map(Number)
    .filter((lvl) => lvl <= l)
    .sort((a, b) => b - a)[0];
  return currentLevelMap[eligibleLevel];
}

export const baseLevelMap: Record<number, number> = {
  35: 150,
  // 25
  40: 275,
  // 45
  45: 500,
  // 50
  50: 750,
  // 50
  55: 1_000,
  // 100
  60: 1_500,
  // 100
  65: 2_000,
  // 250
  70: 3_250,
  // 250
  75: 4_500,
  //  250
  80: 5_750,
  // 350
  85: 7_500,
  // 500
  90: 10_000,
  // 500
  95: 12_500,
  // 500
  100: 15_000,
  // 5_000
  150: 40_000,
  // 5_000
  200: 65_000,
  // 17_000
  300: 150_000,
  // 25_000
  400: 275_000,
  // 35_000
  500: 450_000,
  // 50_000
  600: 700_000,
  // 70_000
  700: 1_050_000,
  // 100_000
  800: 1_550_000,
  // 140_000
  900: 2_250_000,
  // 200_000
  1000: 3_250_000
};

const maxLevelMap = {
  50: 0,
  60: 2_500,
  70: 7_500,
  80: 25_000,
  90: 75_000,
  100: 150_000,
  200: 0,
  300: 2_500_000,
  400: 7_500_000,
  500: 15_000_000,
  600: 30_000_000,
  700: 75_000_000,
  800: 150_000_000,
  900: 300_000_000,
  1000: 500_000_000
};

let ranges = [
  { start: 35, end: 40, increment: 25 },
  { start: 40, end: 45, increment: 45 },
  { start: 45, end: 50, increment: 50 },
  { start: 50, end: 55, increment: 50 },
  { start: 55, end: 60, increment: 100 },
  { start: 60, end: 65, increment: 100 },
  { start: 65, end: 70, increment: 250 },
  { start: 70, end: 75, increment: 250 },
  { start: 75, end: 80, increment: 250 },
  { start: 80, end: 85, increment: 350 },
  { start: 85, end: 90, increment: 500 },
  { start: 90, end: 95, increment: 500 },
  { start: 95, end: 100, increment: 500 },
  { start: 100, end: 150, increment: 5_000 },
  { start: 150, end: 200, increment: 5_000 },
  { start: 200, end: 300, increment: 17_000 },
  { start: 300, end: 400, increment: 25_000 },
  { start: 400, end: 500, increment: 35_000 },
  { start: 500, end: 600, increment: 50_000 },
  { start: 600, end: 700, increment: 70_000 },
  { start: 700, end: 800, increment: 100_000 },
  { start: 800, end: 900, increment: 140_000 },
  { start: 900, end: 1_000, increment: 200_000 }
];

export function generateLevelMap(): Record<number, number> {
  const levelMap: Record<number, number> = { ...baseLevelMap };

  for (const range of ranges) {
    const { start, end, increment } = range;
    let currentValue = levelMap[start];

    // Generate intermediate levels between start and end
    for (let level = start + 1; level < end; level++) {
      currentValue += increment;
      levelMap[level] = currentValue;
    }
  }

  return levelMap;
}

const currentLevelMap: Record<number, number> = generateLevelMap();

export { currentLevelMap };
