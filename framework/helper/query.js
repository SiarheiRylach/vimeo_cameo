'use strict';

const state = require('./state');

class Query {
    constructor() {
        /** @type {string} */
        this.delimiter = " in ";
    }

    /**
     *
     * @param elementName {String} Name of the component in page object
     * @returns {ElementFinder || ElementArrayFinder}
     */
    getProtractorElement(elementName) {
        if (elementName.includes(this.delimiter)) {
            let elements = elementName.split(this.delimiter).reverse();
            let elementState = state.getState();
            elements.forEach((elm) => {
                elementState = elementState[elm];
            });
            return elementState;
        } else {
            return state.getState()[elementName];
        }
    }



}

module.exports = new Query();
