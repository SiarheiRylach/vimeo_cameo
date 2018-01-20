'use strict';

const MasterPage = require('./master/master.page');

class DeletingPage extends MasterPage{
    constructor() {
        super();
        this.url = '/goodbye/forever';
        this['Delete Account'] = element(by.css('.btn_red'));
        this['Password'] = element(by.css('#password'));
    };

}

module.exports = DeletingPage;