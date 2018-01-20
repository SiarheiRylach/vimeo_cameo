'use strict';

const MasterPage = require('./master/master.page');

class SignUpPage extends MasterPage{
    constructor() {
        super();
        this.url = '/sign_up';
        this['No thanks'] = element(by.css('a[href="/home"]'));
    };

}

module.exports = SignUpPage;