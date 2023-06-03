module.exports = {
  verbose: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['/dist/'],
  transform: {
    '^.+\\.[t|j]s?$': ['ts-jest'],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: '.*\\.test\\.(j|t)s?$',
  moduleNameMapper: {
    'tests/(.*)$': '<rootDir>/tests/$1',
    server: '<rootDir>/src/app.ts',
    // app: '<rootDir>/app.ts',
  },
}
