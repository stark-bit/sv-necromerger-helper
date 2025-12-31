export let paramState = $state({ value: '' });

export function updateParams({
  runes,
  legendaries,
  legendariesShards,
  level,
  feats,
  other
}: {
  runes: string;
  legendaries: string;
  legendariesShards?: string;
  level: string;
  feats: string;
  other: string;
}) {
  const params = new URLSearchParams();
  params.set('runes', runes);
  params.set('legendaries', legendaries);
  if (legendariesShards) {
    params.set('legendariesShards', legendariesShards);
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
