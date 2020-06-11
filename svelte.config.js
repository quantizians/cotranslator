// See https://github.com/kaisermann/svelte-preprocess#with-svelte-vs-code
const sveltePreprocess = require('svelte-preprocess');

const preprocess = sveltePreprocess({
    // ...svelte-preprocess options (optional)
	babel: {
		presets: [
			[
				'@babel/preset-env',
				{
					loose: true,
					modules: false,
					targets: {
						esmodules: true,
					},
				},
			],
		],
		plugins: [],
	},
	typescript: {
		tsconfigFile: './tsconfig.json',
	},
});


module.exports = {
	preprocess,
};