'use strict';

const MasterPage = require('../master/master.page');
const Sign = require('./sign.form');

class HomePage extends MasterPage{

    constructor() {
        super();
        this['Join'] = element(by.css('li[data-menu-id="join"] a'));
        this['Login'] = element(by.css('li[data-menu-id="login"] a'));
        this['Sign'] =  new Sign();
        this['Download'] = element(by.css('.download'));
        this['Phone Animation'] = element(by.css('.phone_animation_wrapper'));
        this['Themes button'] = element(by.css('#themes .navigation'));
        this['Soundtracks'] = element(by.css('#soundtracks > div'));
        this['Videos'] = element(by.css('#videos > div'));
        this['Creators'] = element(by.css('#creators .content_wrapper'));
    };

}


module.exports = HomePage;