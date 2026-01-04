export let paramState = $state({ value: '' });

export function updateParams({
  ownedRunes,
  ownedLegendaries,
  neededLegendaries,
  level,
  feats,
  other
}: {
  ownedRunes: string;
  ownedLegendaries: string;
  neededLegendaries?: string;
  level: string;
  feats: string;
  other: string;
}) {
  const params = new URLSearchParams();
  params.set('ownedRunes', ownedRunes);
  params.set('ownedLegendaries', ownedLegendaries);
  if (neededLegendaries) {
    params.set('neededLegendaries', neededLegendaries);
  }
  params.set('level', level);
  params.set('feats', feats);
  params.set('other', other);
  paramState.value = params.toString();
}

export function serialize(obj: Record<string, number>, separator = '-') {
  return Object.values(obj).map(String).join(separator);
}

export function deSerialize(param: string | null, target: Record<string, number>, separator = '-') {
  if (!param) return;

  const values = param.split(separator).map(Number);
  const keys = Object.keys(target);
  for (let i = 0; i < keys.length; i++) {
    if (!isNaN(values[i])) {
      target[keys[i] as keyof typeof target] = values[i];
    }
  }
}
