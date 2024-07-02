import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

//theme imports
import { themeDefault } from './themes/default';
import { themeCatppuccinMocha, themeCatppuccinMacchiato, themeCatppuccinFrappe, themeCatppuccinLatte } from './themes/catppuccin';
import { themeAmoled } from './themes/amoled';
import { themeMultimc } from './themes/multimc';
import { themeTokyoNight, themeTokyoStorm } from './themes/tokyo';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				custom: [
					themeDefault,
					themeCatppuccinMocha,
					themeCatppuccinMacchiato,
					themeCatppuccinFrappe,
					themeCatppuccinLatte,
					themeAmoled,
					themeMultimc,
					themeTokyoNight,
					themeTokyoStorm
				]
			}
		})
	]
} satisfies Config;

export default config;