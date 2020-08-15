module.exports = {
	clearMocks: true,
	setupFilesAfterEnv: ['regenerator-runtime/runtime'],
	testMatch: [ "**/?(*.)+(spec|test).[jt]s?(x)" ],
	testPathIgnorePatterns: [],
	haste: {
		"providesModuleNodeModules": [
			"cm523-unit-tests/test-unit-test",
		]
	},
	transformIgnorePatterns: []
};
