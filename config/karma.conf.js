module.exports = function ( config ) {
	config.set( {
		basePath: '../',
		frameworks: [ 'mocha' ],
		plugins: [
			'karma-mocha',
			'karma-mocha-reporter',
			'karma-chrome-launcher',
			'karma-firefox-launcher'
		],
		files: [
			'node_modules/expect.js/index.js',
			'dist/obseriot.js',
			'test/obseriot.js'
		],
		browsers: [ 'Chrome', 'Firefox' ],
		reporters: [ 'mocha' ],
		singleRun: true
	} )
}
