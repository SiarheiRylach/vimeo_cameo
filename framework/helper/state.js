const path = require('path');
const world = require(path.resolve('./po/world'));

class State {
    constructor() {
        this.state = {};
    }

    setState(pageName) {
        this.state = world[pageName];
    }

    getState() {
        return this.state;
    }

    getUrl() {
        return this.state.url;
    }

}

module.exports = new State();