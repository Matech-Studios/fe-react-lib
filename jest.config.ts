import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 45,
            lines: 70,
            statements: 70
        }
    },
    coveragePathIgnorePatterns: ['<rootDir>/src/utilities/test-utils/wrappers.tsx'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['tsx', 'ts', 'js'],
    moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src/$1',
        '^.+\\.(css|less|sass)$': 'babel-jest',
        '\\.svg$': '<rootDir>/svg-name-mapper.js'
    },
    modulePathIgnorePatterns: ['dist'],
    modulePaths: ['<rootDir>'],
    preset: 'ts-jest',
    rootDir: '.',
    roots: ['<rootDir>'],
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    transformIgnorePatterns: ['\\.(css|scss|sass)$'],
    verbose: true,
    setupFiles: ['<rootDir>/config/jest.envSetup.ts'],
    setupFilesAfterEnv: ['<rootDir>/config/jest.testsSetup.ts'],
    moduleDirectories: ['node_modules', '<rootDir>'],
    maxWorkers: '50%'
};

export default config;
