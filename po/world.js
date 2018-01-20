'use strict';

const HomePage = require('./pages/home/home.page');
const UserPage = require('./pages/user.page');
const SignUpPage = require('./pages/sign_up.page');
const SettingsPage = require('./pages/settings.page');
const DeletingAccPage = require('./pages/deleting_acc.page');
const DownloadPage = require('./pages/download.page');

class World {
    constructor() {
        this['Home Page'] = new HomePage();
        this['User Page'] = new UserPage();
        this['SignUp Page'] = new SignUpPage();
        this['Settings Page'] = new SettingsPage();
        this['DeletingAcc Page'] = new DeletingAccPage();
        this['Download Page'] = new DownloadPage();
    };

}

module.exports = new World();