import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ edge: false, split: false }),
    paths: {
      base: '/sv-necromerger-helper'
    }
  }
};

export default config;
