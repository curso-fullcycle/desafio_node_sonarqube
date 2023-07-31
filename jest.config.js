module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'text-summary'],
    reporters: ['default', 'jest-sonar'],
    testResultsProcessor: 'jest-sonar-reporter',
};