const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({After}) {

    After({tags: '@scroll-start-page'}, () => {
        return browser.executeScript('window.scroll(0, 0)');
    });

});
