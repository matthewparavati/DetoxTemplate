module.exports = {
  maxWorkers: 1,
  testEnvironment: 'detox/runners/jest/testEnvironment',
  reporters: ['detox/runners/jest/reporter'],
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  // testRunner: {
  //   $0: 'jest',
  //   args: {
  //     config: 'e2e/jest.config.js',
  //     _: ['e2e'],
  //   },
  // },
  testTimeout: 120000,
  testRegex: '\\.e2e\\.js$',
  verbose: true,
};
