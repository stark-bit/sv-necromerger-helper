import { type Legend, type Rune } from '$lib/types';

export const ownedRuneCount = $state<Record<Rune, number>>({
	ice: 0,
	poison: 0,
	blood: 0,
	moon: 0,
	death: 0,
	cosmic: 0
});
export const ownedLegendaryCount = $state<Record<Legend, number>>({
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

export function incOwnedLegendary(legend: Legend) {
	const count = ownedLegendaryCount[legend];
	if (
		(legend === 'cursed' || legend === 'colossus' || legend === 'infernal') &&
		ownedLegendaryCount[legend] === 1
	) {
		return null;
	}
	if ((legend === 'shield bot' || legend === 'robot chicken') && count === 3) {
		return null;
	}
	ownedLegendaryCount[legend] = ownedLegendaryCount[legend] + 1;
	updateOwnedRuneCount(legend, 'inc', ownedLegendaryCount[legend]);
}

export function decOwnedLegendary(legend: Legend) {
	if (ownedLegendaryCount[legend] <= 0) {
		return null;
	}
	ownedLegendaryCount[legend] =
		ownedLegendaryCount[legend] <= 0
			? ownedLegendaryCount[legend]
			: ownedLegendaryCount[legend] - 1;
	updateOwnedRuneCount(legend, 'dec', ownedLegendaryCount[legend]);
}

export function updateOwnedRuneCount(legend: Legend, action: 'inc' | 'dec', count: number) {
	const isInc = action === 'inc';
	const isHigh = count === 1;
	const isLow = count === 0;

	switch (legend?.toLowerCase()) {
		case 'lich':
			ownedRuneCount.ice += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
			break;

		case 'gorgon':
			ownedRuneCount.poison += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
			break;

		case 'harpy':
			ownedRuneCount.blood += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
			break;

		case 'reaper':
			ownedRuneCount.ice += isInc ? (isHigh ? 1600 : 1550) : isLow ? -1600 : -1550;
			ownedRuneCount.moon += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
			break;

		case 'cyclops':
			ownedRuneCount.poison += isInc ? (isHigh ? 1600 : 1550) : isLow ? -1600 : -1550;
			ownedRuneCount.moon += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
			break;

		case 'archdemon':
			ownedRuneCount.blood += isInc ? (isHigh ? 960 : 930) : isLow ? -960 : -930;
			ownedRuneCount.death += isInc ? (isHigh ? 960 : 930) : isLow ? -960 : -930;
			break;

		case 'cursed':
			ownedRuneCount.ice += isInc ? 2240 : -2240;
			ownedRuneCount.moon += isInc ? 640 : -640;
			break;

		case 'colossus':
			ownedRuneCount.poison += isInc ? 2240 : -2240;
			ownedRuneCount.moon += isInc ? 640 : -640;
			break;

		case 'infernal':
			ownedRuneCount.blood += isInc ? 1600 : -1600;
			ownedRuneCount.death += isInc ? 960 : -960;
			break;

		case 'robot chicken':
			ownedRuneCount.ice += isInc ? 960 : -960;
			ownedRuneCount.poison += isInc ? 480 : -480;
			break;

		case 'shield bot':
			ownedRuneCount.cosmic += isInc ? 640 : -640;
			break;

		case 'stalker':
			ownedRuneCount.cosmic += isInc ? 800 : -800;
			ownedRuneCount.death += isInc ? 800 : -800;
			break;

		default:
			throw new Error(`unknown legendary: ${legend}`);
	}
}

export function resetOwnedCounts() {
	for (const key of Object.keys(ownedLegendaryCount) as Legend[]) {
		ownedLegendaryCount[key] = 0;
	}
	for (const key of Object.keys(ownedRuneCount) as Rune[]) {
		ownedRuneCount[key] = 0;
	}
}
