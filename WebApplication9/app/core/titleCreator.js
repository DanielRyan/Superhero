/// <reference path="prototypes.js" />

var TitleCreator = (function () {

    var titles = ["The Wizard", "The Warlock", "The Debugger", "The Code Monkey", "The Coffeeholic", "The Princess", "The Peace Maker", "The Destroyer", "The Highlander", "The Director", "The Ninja", "The CEO", "The New Guy", "The Butler", "The President", "The Ugly", "The Bad", "The Good", "The Texas Ranger", "The Gambler", "The Cheater", "The 2.0 Human Replica", "The Good Looking", "The Bad Hair Day", "The Gamer", "The Forgetful", "The Persistent", "The Exceptional", "The Expendable", "The Cave Dweller"];

    var titleCreator = function () { };

    var getRandomTitle = function() {
        return titles.randomItem();
    };

    titleCreator.prototype = {
        randomTitle: getRandomTitle
    };

    return titleCreator;

})();