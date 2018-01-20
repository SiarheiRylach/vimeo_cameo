'use strict';

const MasterPage = require('./master/master.page');

class UserPage extends MasterPage{
    constructor() {
        super();
        this.url = '/user';
    };

}

module.exports = UserPage;