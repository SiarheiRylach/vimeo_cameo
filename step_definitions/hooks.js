const {defineSupportCode} = require('cucumber');
const logger = require('../logger.config').logger;
const {Status} = require('cucumber');
const fs = require('fs');

defineSupportCode(function ({After}) {

    After({tags: '@scroll-start-page'}, () => {
        return browser.executeScript('window.scroll(0, 0)');
    });

    After(function (Step) {
        if (Step.result.status === Status.FAILED) {
            return browser.takeScreenshot().then((screenShot) => {
                logger.debug(`Preparing to take a screenshot`);
                fs.existsSync("screenshots") || fs.mkdirSync("screenshots");
                let screenshotPath = `./screenshots/${Step.pickle.name}.png`;
                let stream = fs.createWriteStream(screenshotPath);
                stream.write(new Buffer(screenShot, 'base64'));
                stream.end();
                logger.debug(`Screenshot taken and saved`);
                return this.attach(screenshotPath);
            });
        }
    });

});
