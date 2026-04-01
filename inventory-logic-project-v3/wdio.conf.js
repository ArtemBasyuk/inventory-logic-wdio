exports.config = {
    runner: 'local',
    baseUrl: 'https://www.saucedemo.com/',
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