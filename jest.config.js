module.exports = {
	clearMocks: true,
	setupFilesAfterEnv: ['regenerator-runtime/runtime'],
	testMatch: [ "<rootDir>/node_modules/cm523-fall2020/test-unit-test/index.test.js", "**/?(*.)+(spec|test).[jt]s?(x)" ],
	testPathIgnorePatterns: [],
	haste: {
		"providesModuleNodeModules": [
			"cm523-fall2020",
		]
	},
	transformIgnorePatterns: []
};
