module.exports = {
	// Tailwind Paths
	configJS         : 'tailwind.config.js',
	sourceCSS        : 'src/app/library/frameworks/tailwind/tailwind.scss',
	outputCSS        : 'src/app/library/frameworks/tailwind/tailwind.dist.scss',
	watchRelatedFiles: [],
	// Sass
	sass: false,
	// PurgeCSS Settings
	purge                    : false,
	keyframes                : false,
	fontFace                 : false,
	rejected                 : false,
	whitelist                : [],
	whitelistPatterns        : [],
	whitelistPatternsChildren: [],
	extensions               : [
		'.ts',
		'.html',
		'.js'
	],
	extractors               : [],
	content                  : []
}
