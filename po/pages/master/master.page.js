'use strict';

const ProfileMenu = require('../common/profile.menu');

class MasterPage {

    constructor() {
        this.url = 'https://vimeo.com/cameo/';
        this['Profile'] = element(by.css('#topnav_menu_avatar>a'));
        this['Profile Menu'] = new ProfileMenu();
    };

    openPage(){
        return browser.get(this.url);
    }

}


module.exports = MasterPage;