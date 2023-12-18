/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gold: '#ffbb00',
				old_line_gold: '#cc9900',
				graphite: '#3c3c3c',
				glen_mist: '#dddddd',
				black: {
					tu: '#151500'
				}
			}
		},

	},
	plugins: [
	],
}
