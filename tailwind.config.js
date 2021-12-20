const colors   = require('tailwindcss/colors')
module.exports = {
	purge   : [],
	darkMode: false, // or 'media' or 'class'
	theme   : {
		fontFamily: {
			'mono': ["'monospace'"],
			'sans': ["'Univers for KPMG'", "'sans-serif'"],
		},
		fontWeight: {
			'light': 300,
			'norm' : 'normal',
			'bold' : 'bold',
			'black': 900,
		},
		colors    : {
			brandColor01: '#00338d',
			brandColor02: '#265cb1',
			white       : '#ffffff',
			gray        : colors.coolGray,
			purple      : colors.purple,
			violet      : colors.violet,
			indigo      : colors.indigo,
			blue        : colors.blue,
			cyan        : colors.cyan,
			teal        : colors.teal,
		},
		extend    : {},
	},
	variants: {
		extend: {},
	},
	plugins : [],
}
