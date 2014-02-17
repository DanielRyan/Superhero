Utilities = (function () {
    var util = {};

    util.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    util.randomSuccess = function (chanceOfSuccess) {
        var randomNumber = util.random(1, 100);
        return (randomNumber <= (chanceOfSuccess * 100));
    };

    return util;
})();