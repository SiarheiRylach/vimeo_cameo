'use strict';

const MasterPage = require('./master/master.page');

class SettingsPage extends MasterPage{
    constructor() {
        super();
        this.url = '/general';
        this['Delete Account'] = element(by.css('.delete-account'));
    };

}

module.exports = SettingsPage;