module.exports = function (wallaby) {
	return {
		files: [
			'src/**/*.js*',
			{ pattern: 'node_modules/**/babel*/**/polyfill.js', instrument: false },
			{ pattern: 'src/**/tests/**/*', ignore: true } // NOTE: Avoids subsuming tests/*.js with above.
		],
		tests: [
			'src/**/tests/**/*.js'//,
			// { pattern: 'src/tests/data.js', ignore: true }
		],
		env: {
			type: 'node'
		},
		setup: function(wallaby) {
			require('console.table') // NOTE: Visible through line tests (CMD+SHIFT+T, L)
		},
		testFramework: 'ava',
		compilers: {
			'**/*.js*': wallaby.compilers.babel({
				presets: ['es2015', 'stage-0', 'react'],
				plugins: [
					require('babel-plugin-espower/create')(
						require('babel-core'), {
							patterns:require('ava/lib/enhance-assert').PATTERNS
						}
					)
				]
			})
		},
		preprocessors: {
			'**/*.js*': file => require('babel-core').transform(file.content, { sourceMap: true, presets: ['es2015', 'stage-0', 'react'], plugins: [['transform-runtime', {"polyfill": false, "regenerator": true}]] })
		}
	};
};
