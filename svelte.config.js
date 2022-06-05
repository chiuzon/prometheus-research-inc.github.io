import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const dev = process.env.NODE_ENV === 'development';
const REPO_NAME = '/prometheus-research-inc.github.io';

console.log(dev ? '' : REPO_NAME);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md']
		})
	],

	kit: {
		trailingSlash: 'always',
		adapter: adapter({
			pages: '/docs',
			assets: '/docs'
		}),
		prerender: {
			default: true
		},
		// paths: {
		// 	base: dev ? '' : REPO_NAME
		// },
		appDir: 'internal',
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
