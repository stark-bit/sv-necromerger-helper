import { error } from '@sveltejs/kit';
import { feats } from '$lib/data/feats';

export function load({ params }) {
	const feat = feats[params.pageId as keyof typeof feats];

	if (!feat) {
		throw error(404, 'Not found');
	}

	return {
		feat
	};
}
