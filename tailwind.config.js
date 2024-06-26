/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif']
			},
			colors: {
				primary: '#FE7900',
				secondary: '#E9E6EE',
				background: '#FDFAF3'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
