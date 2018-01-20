const {defineSupportCode} = require('cucumber');
const path = require('path');
const query = require(path.resolve('./framework/helper/query'));
const state = require(path.resolve('./framework/helper/state'));

defineSupportCode(({Given, When, setDefaultTimeout}) =>{
    setDefaultTimeout(timeoutEveryStep);

    Given(/^I am on "(.*)" page$/, (page) => {
        state.setState(page);
        return state.getState().openPage();
    });

    When(/^I click on "(.*)"$/, (button)=> {
        return query.getProtractorElement(button).click();
    });

    When(/^I sleep "(.*)" sec$/, timeout => {
        return browser.sleep(+timeout * 1000);
    });

    When(/^I refresh page$/, () => {
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
        return query.getProtractorElement(element).sendKeys(text);
    });

    When(/^I move mouse to "(.*)"$/, (element) => {
        return browser.actions().mouseMove(query.getProtractorElement(element)).perform();
    });

    When(/^I wait browser title contains "(.*)"$/, (fragment)=> {
        return browser.wait(EC.titleContains(fragment), defTimeoutExplicit);
    });

    When(/^I scroll down "(.*)" times$/, (times) => {
        return browser.executeScript(`window.scrollBy(0,${200 * times})`);
    });

});
