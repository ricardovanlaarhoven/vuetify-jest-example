module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['./tests/jest.setup.js'],
  snapshotSerializers: ['jest-serializer-html'],
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
};
