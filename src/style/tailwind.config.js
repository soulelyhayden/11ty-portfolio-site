const colors = require('tailwindcss/colors')

module.exports = {
	purge: {
		content: ["./src/_includes/**/*.njk"],
		options: {
			keyframes: true
		},
	},
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			white: colors.white,
			grey: colors.coolGray,
			blue: colors.lightBlue,
			red: colors.rose,
			pink: colors.fuchsia,

			primaryColour: '#fff',
			secondaryColour: '#3B454E',
			accentColour: '#b42a00',
			textColour: '#3B454E'
		},
		boxShadow: {
			DEFAULT: '0 0px 6px -1px rgba(0,0,0,0.1), 0 0px 5px -1px rgba(0,0,0,.06)',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
	},
	variants: {
		extend: {
			fontWeight: ['hover'],
		}
	},
	plugins: [],
};