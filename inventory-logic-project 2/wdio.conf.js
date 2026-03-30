exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 2,
    capabilities: [
        { browserName: 'firefox' },
        { browserName: 'MicrosoftEdge' }
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000
    }
};
