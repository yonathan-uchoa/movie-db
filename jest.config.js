const config = {
    roots: [
        "./src/test/"
    ],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100
        }
    },
    //setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'node',
    verbose: true,
    testEnvironment: 'jest-environment-node',
    testTimeout: 15000
};

export default config;