import { legendaryCount } from "./legendary-cost.svelte";

export const shards = $state({ level: 0, feats: 15, legendary: 0, other: 100, total:0 });

export const level = $state({ value: 35 })
export const feats = $state({ value: 15 })
export const other = $state({ value: 100 })


$effect.root(() => {
  $effect(() => {

    shards.level = calcLevelShards(level.value)
    shards.feats = calcFeats();
    shards.legendary = calcLegendary(legendaryCount);
    shards.other = other.value
    shards.total = calcTotal();
  })
})

function calcTotal() {
  return shards.level * (shards.feats / 100) * (shards.legendary / 100) * (shards.other / 100)
}

function calcFeats() {
  return 100 + 10 * feats.value;
}

function calcLegendary(legs: typeof legendaryCount) {
  // T1
  const li = legs.lich;
  const go = legs.gorgon;
  const ha = legs.harpy;
  // T2
  const re = legs.reaper;
  const cy = legs.cyclops;
  const ar = legs.archdemon;
  // T3
  const cu = legs.cursed
  const co = legs.colossus
  const inf = legs.infernal
  // T4
  const rc = legs["robot chicken"];
  const sb = legs["shield bot"];
  const st = legs.stalker;

  // base
  let bonus = 100;

  const t1Bonus = li >= 1 && go >= 1 && ha >= 1;
  const t2Bonus = re >= 1 && cy >= 1 && ar >= 1;
  const t3Bonus = cu >= 1 && co >= 1 && inf >= 1;
  const t4Bonus = rc >= 1 && sb >= 1 && st >= 1;


  // T1: Lich, Gorgon, Harpy
  bonus += li >= 0 ? 10 + (li - 1) * 5 : 0;
  bonus += go >= 0 ? 10 + (go - 1) * 5 : 0;
  bonus += ha >= 0 ? 10 + (ha - 1) * 5 : 0;
  // T2: Reaper, Cyclops, Archdemon
  bonus += re > 0 ? 20 + (re - 1) * 10 : 0;
  bonus += cy > 0 ? 20 + (cy - 1) * 10 : 0;
  bonus += ar > 0 ? 20 + (ar - 1) * 10 : 0;
  // T3: Cursed, Collosus, Infernal
  bonus += cu > 0 ? 30 + (cu - 1) * 0 : 0;
  bonus += co > 0 ? 30 + (co - 1) * 0 : 0;
  bonus += inf > 0 ? 30 + (inf - 1) * 0 : 0;
  // T4: Robot chicken, shield bot, stalker
  bonus += rc > 0 ? 20 + (rc - 1) * 10 : 0;
  bonus += sb > 0 ? 30 + (sb - 1) * 15 : 0;
  bonus += st > 0 ? 40 + (st - 1) * 20 : 0;


  if (t1Bonus) {
    bonus += 20;
  }
  // T2 bonus
  if (t2Bonus) {
    bonus += 40;
  }
  // T3 bonus
  if (t3Bonus) {
    bonus += 60;
  }
  if (t4Bonus) {
    bonus += 80;
  }

  if (t1Bonus && t2Bonus && t3Bonus && t4Bonus) {
    bonus += 100;
  }

  return bonus;
}

function calcLevelShards(l: number) {
  let eligibleLevel = Object.keys(currentLevelMap)
    .map(Number)
    .filter(lvl => lvl <= l)
    .sort((a, b) => b - a)[0];
  return currentLevelMap[eligibleLevel];
}


export const currentLevelMap: Record<number, number> = {
  35: 150,
  40: 275,
  45: 500,
  50: 750,
  55: 1_000,
  60: 1_500,
  65: 2_000,
  70: 3_250,
  75: 4_500,
  80: 5_750,
  85: 7_500,
  90: 10_000,
  95: 12_500,
  100: 15_000,
  150: 40_000,
  200: 65_000,
  300: 150_000,
  400: 275_000,
  500: 450_000,
  600: 700_000,
  700: 1_050_000,
  800: 1_550_000,
  900: 2_250_000,
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
