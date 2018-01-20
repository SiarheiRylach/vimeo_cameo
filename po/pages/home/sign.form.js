'use strict';

class Sign{
    constructor() {
        this['Form'] = element(by.css('.iris_modal-box'));
        this['Title'] = element(by.css('#dialog-title'));
        this['Body'] = element(by.css('#dialog-content'));
        this['Email'] = element(by.css('#signup_email'));
        this['Login Password'] = element(by.css('#login_password'));
        this['Sign By Email'] = element(by.css('.iris_btn--positive'));

        //for registration
        this['Name'] = element(by.css('#signup_name'));
        this['Join Password'] = element(by.css('#signup_password'));
    };

}

module.exports = Sign;