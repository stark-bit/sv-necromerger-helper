export let paramState = $state({ value: '' });

export function updateParams({
	runes,
	legendaries,
	level,
	feats,
	other
}: {
	runes: string;
	legendaries: string;
	level: string;
	feats: string;
	other: string;
}) {
	paramState.value = new URLSearchParams({ runes, legendaries, level, feats, other }).toString();
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
