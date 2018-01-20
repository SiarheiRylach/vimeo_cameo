'use strict';

const { defineSupportCode } = require('cucumber');
const path = require('path');
const query = require(path.resolve('./framework/helper/query'));
const state = require(path.resolve('./framework/helper/state'));
const visibility = require(path.resolve('./framework/helper/visibility'));
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();

defineSupportCode(({ Then, setDefaultTimeout }) => {
    setDefaultTimeout(timeoutEveryStep);

    Then(/^I should be on "(.*)" page$/, (page) => {
        state.setState(page);
        return expect(browser.getCurrentUrl()).to.eventually.contain(state.getUrl());
    });

    Then(/^Page title should be "(.*)"$/, (title) => {
        return expect(browser.getTitle()).to.eventually.equal(title);
    });

    Then(/^Text of element "(.*)" should (not )?be "(.*)"$/, (element, isNot, value) => {
        if (isNot) {
            return expect(query.getProtractorElement(element).getText()).to.not.equal(value);
        } else {
            return expect(query.getProtractorElement(element).getText()).to.eventually.eql(value);
        }
    });

    Then(/^Element "(.*)" should (not )?be visible on screen$/, (element, isNot) => {
        if (isNot) {
            return expect(visibility.isVisibleOnScreen(query.getProtractorElement(element))).to.eventually.eql(false);
        } else {
            return expect(visibility.isVisibleOnScreen(query.getProtractorElement(element))).to.eventually.eql(true);
        }
    });
});

