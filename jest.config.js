module.exports = {
  preset: '@react-native/jest-preset',

  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-reanimated|@react-native-vector-icons)/)',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/.cache/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/.cache/',
  ],

  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{js,jsx,ts,tsx}',
    '!src/**/types.{js,jsx,ts,tsx}',
    '!src/**/*.styles.{ts,tsx}',
    '!src/**/index.tsx',
    '!src/**/*.configs.{ts,tsx}',
    '!src/**/*.types.{ts,tsx}'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'text',
    'text-summary',
    'lcov',
    'html',
  ],

  clearMocks: true,
  restoreMocks: true,
  resetMocks: false,

  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
  ],
};