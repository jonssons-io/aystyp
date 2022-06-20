/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ["'Karla'", 'sans-serif'],
			placeholder: ["'Inconsolata'", 'monospace'],
		},
		extend: {
			colors: {
				black: 'rgba(25, 23, 22, 1)',
				white: 'rgba(243, 243, 243, 1)',
				turquoise: 'rgba(38, 255, 230, 1)',
				capri: {
					100: 'rgba(30, 173, 243, 1)',
					200: 'rgba(58, 190, 255, 1)',
					300: 'rgba(32, 152, 210, 1)',
				},
				petrol: {
					200: 'rgba(28, 99, 134, 1)',
					300: 'rgba(22, 78, 105, 1)',
				},
				lightblue: 'rgba(210, 253, 255, 1)',
				'main-purple': {
					200: 'rgb(150, 0, 126)',
					300: 'rgba(97, 4, 95, 1)',
				},
				'main-yellow': 'rgba(255, 199, 0, 1)',
			},
		},
	},
	plugins: [],
};
