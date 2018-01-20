'use strict';

class ProfileMenu{
    constructor() {
        this['Logout'] = element(by.css('.topnav_desktop_menu_items_dropdown_item_log_out button'));
        this['Settings'] = element(by.css('a[data-gtm-click="top_nav_user_menu_settings_click"]'));
    };

}

module.exports = ProfileMenu;