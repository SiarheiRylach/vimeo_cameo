const {defineSupportCode} = require('cucumber');
const path = require('path');
const query = require(path.resolve('./framework/helper/query'));
const state = require(path.resolve('./framework/helper/state'));
const logger = require('../logger.config.js').logger;

defineSupportCode(({Given, When, setDefaultTimeout}) =>{
    setDefaultTimeout(timeoutEveryStep);

    Given(/^I am on "(.*)" page$/, (page) => {
        logger.debug(`Change state to ${page}`);
        state.setState(page);
        return state.getState().openPage();
    });

    When(/^I click on "(.*)"$/, (button)=> {
        logger.debug(`${button} button is clicked`);
        return query.getProtractorElement(button).click();
    });

    When(/^I sleep "(.*)" sec$/, timeout => {
        logger.debug(`I wait ${timeout}`);
        return browser.sleep(+timeout * 1000);
    });

    When(/^I refresh page$/, () => {
        logger.info('Page is refreshed');
        return browser.refresh();
    });

    When(/^I wait until element "(.*)" is (not )?visible$/, (element, isNot) => {
        if (isNot) {
            return browser.wait(EC.invisibilityOf(query.getProtractorElement(element)), defTimeoutExplicit);
        } else {
            return browser.wait(EC.visibilityOf(query.getProtractorElement(element)), defTimeoutExplicit);
        }
    });

    When(/^I type "(.*)" in "(.*)"$/, (text, element) => {
        logger.inso(`I type ${text} to ${element}`);
        return query.getProtractorElement(element).sendKeys(text);
    });

    When(/^I move mouse to "(.*)"$/, (element) => {
        logger.info(`Mouse to ${element}`);
        return browser.actions().mouseMove(query.getProtractorElement(element)).perform();
    });

    When(/^I wait browser title contains "(.*)"$/, (fragment)=> {
        return browser.wait(EC.titleContains(fragment), defTimeoutExplicit);
    });

    When(/^I scroll down "(.*)" times$/, (times) => {
        logger.debug(`Scroll: ${times * 200} pixels`);
        return browser.executeScript(`window.scrollBy(0,${200 * times})`);
    });

});
