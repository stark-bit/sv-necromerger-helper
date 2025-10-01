import { type Legend, type Rune } from '$lib/types';

export const runeCount = $state<Record<Rune, number>>({
	ice: 0,
	poison: 0,
	blood: 0,
	moon: 0,
	death: 0,
	cosmic: 0
});
export const legendaryCount = $state<Record<Legend, number>>({
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

export function inc(legend: Legend) {
	const count = legendaryCount[legend];
	if (
		(legend === 'cursed' || legend === 'colossus' || legend === 'infernal') &&
		legendaryCount[legend] === 1
	) {
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
	legendaryCount[legend] =
		legendaryCount[legend] <= 0 ? legendaryCount[legend] : legendaryCount[legend] - 1;
	handleRuneCount(legend, 'dec', legendaryCount[legend]);
}

export function handleRuneCount(legend: Legend, action: 'inc' | 'dec', count: number) {
	const isInc = action === 'inc';
	const isHigh = count === 1;
	const isLow = count === 0;

	switch (legend?.toLowerCase()) {
		case 'lich':
			runeCount.ice += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
			break;

		case 'gorgon':
			runeCount.poison += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
			break;

		case 'harpy':
			runeCount.blood += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
			break;

		case 'reaper':
			runeCount.ice += isInc ? (isHigh ? 1600 : 1550) : isLow ? -1600 : -1550;
			runeCount.moon += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
			break;

		case 'cyclops':
			runeCount.poison += isInc ? (isHigh ? 1600 : 1550) : isLow ? -1600 : -1550;
			runeCount.moon += isInc ? (isHigh ? 640 : 620) : isLow ? -640 : -620;
			break;

		case 'archdemon':
			runeCount.blood += isInc ? (isHigh ? 960 : 930) : isLow ? -960 : -930;
			runeCount.death += isInc ? (isHigh ? 960 : 930) : isLow ? -960 : -930;
			break;

		case 'cursed':
			runeCount.ice += isInc ? 2240 : -2240;
			runeCount.moon += isInc ? 640 : -640;
			break;

		case 'colossus':
			runeCount.poison += isInc ? 2240 : -2240;
			runeCount.moon += isInc ? 640 : -640;
			break;

		case 'infernal':
			runeCount.blood += isInc ? 1600 : -1600;
			runeCount.death += isInc ? 960 : -960;
			break;

		case 'robot chicken':
			runeCount.ice += isInc ? 960 : -960;
			runeCount.poison += isInc ? 480 : -480;
			break;

		case 'shield bot':
			runeCount.cosmic += isInc ? 640 : -640;
			break;

		case 'stalker':
			runeCount.cosmic += isInc ? 800 : -800;
			runeCount.death += isInc ? 800 : -800;
			break;

		default:
			throw new Error(`unknown legendary: ${legend}`);
	}
}
