/// <reference path="utilities.js" />
/// <reference path="titleCreator.js" />
/// <reference path="fightMoves.js" />

var Match = (function () {
    var playerOne;
    var playerTwo;

    var titleCreator;
    var fightMoves;

    var match = function () {
        playerOne = null;
        playerTwo = null;

        titleCreator = new TitleCreator();
        fightMoves = new FightMoves();
    };

    var addPlayers = function (one, two) {
        playerOne = createPlayer(one);
        playerTwo = createPlayer(two);
    };

    function createPlayer(name) {
        var title = titleCreator.randomTitle();
        return { name: name, title: title };
    }

    var getPlayerOne = function () {
        return playerOne;
    };

    var getPlayerTwo = function () {
        return playerTwo;
    };

    var calculateFight = function () {
        var combat = createCombat(playerOne, playerTwo);
        return combat;
    };

    function createCombat(one, two) {
        var moves = [];
        var numberOfRounds = Utilities.random(4, 12);

        for (var i = 0; i < numberOfRounds; i++) {
            var move = fightMoves.calculateMove(one, two);
            moves.push(move);
        }

        var winner = calculateWinner(one, two, moves);

        return { winner: winner, combatLog: moves };
    }

    function calculateWinner(one, two, combat) {
        var oneScore = 0;
        var twoScore = 0;

        combat.forEach(function (item) {
            if (item.attacker.name === one.name)
                oneScore += item.score;
            else
                twoScore += item.score;
        });

        if (oneScore > twoScore)
            return one;
        return two;
    }

    match.prototype = {
        addPlayers: addPlayers,
        getPlayerOne: getPlayerOne,
        getPlayerTwo: getPlayerTwo,
        calculateFight: calculateFight
    };

    return match;

})();