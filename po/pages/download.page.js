'use strict';

class DownloadPage{
    constructor() {
        this.url = 'https://itunes.apple.com/us/app/cameo-video-editor-movie-maker/id988821661';
        this['Seller'] = element(by.css('.l-row:nth-of-type(1) > dd'));
        this['Size'] = element(by.css('.l-row:nth-of-type(2) dd'));
        this['Category'] = element(by.css('.l-row:nth-of-type(3) dd'));
        this['Compatibility'] = element(by.css('.l-row:nth-of-type(4) dd'));
        this['Languages'] = element(by.css('.l-row:nth-of-type(5) dd'));
        this['Age Rating'] = element(by.css('.l-row:nth-of-type(6) dd'));
        this['Copyright'] = element(by.css('.l-row:nth-of-type(7) dd'));
        this['Price'] = element(by.css('.l-row:nth-of-type(8) dd'));
        this['Version'] = element(by.css('.whats-new__latest__version'));
    };

}

module.exports = DownloadPage;