'use strict';

module.exports = {

    isVisibleOnScreen(elem){
        let screenSize = 0;

        return browser.executeScript('return window.innerHeight')
            .then((heightScreen)=> {
                screenSize = heightScreen;
            })
            .then(()=>elem.isDisplayed())
            .then((isDisplayed)=> isDisplayed ? browser.executeScript('return arguments[0].getBoundingClientRect()', elem) : false)
            .then((elementPosition)=>{
                    return  elementPosition && (0 < elementPosition.top) && (elementPosition.top < screenSize)
                        && (0 < elementPosition.bottom) && (elementPosition.bottom < screenSize);
            });
    }
 };