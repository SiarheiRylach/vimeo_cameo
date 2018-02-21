"use strict";

const path = require("path");
const commonUtils = require('utils_for_tests');

exports.config = {
    directConnect: true,
    baseUrl: 'https://vimeo.com/cameo',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1680,1050', '--disable-notifications', '--disable-infobars']
        },
        platform: "Windows 10",
        maxDuration: 10800
    },
    specs: [
        './features/*.feature'
    ],

    suites: {
        homepage: './features/home.page.feature',
        smoke: ['./features/home.page.feature',
            './features/user_account.feature']
    },

    onPrepare: function () {
        commonUtils.createDir('./output');
        global.EC = protractor.ExpectedConditions;
        global.timeoutEveryStep = 100 * 1000;
        global.defTimeoutExplicit = 15000;
        browser.waitForAngularEnabled(false);
    },

    cucumberOpts: {
        require: [path.resolve('./step_definitions/**.js')],
        format: ['json:output/log.json'],
        tags: []
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
};