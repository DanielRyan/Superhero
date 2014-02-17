/// <reference path="prototypes.js" />
/// <reference path="utilities.js" />

var FightMoves = (function () {

    var moves = ["Uppercut", "Sword", "Keybord", "CAT6 Ethernet Cable", "Coffe mug", "intelligence", "Algorithms", "Girlish Scream", "Buzz Words", "Git", "TFS", "Internet"];

    var fightMoves = function () { };

    var getRandomMove = function() {
        return moves.randomItem();
    };
    
    function calculateMove(playerOne, playerTwo) {
        var move = getRandomMove();
        var shuffledPlayers = shufflePlayers(playerOne, playerTwo);
        var moveScore = Utilities.random(1, 7);

        return { attacker: shuffledPlayers[0], defender: shuffledPlayers[1], move: move, score: moveScore };
    }

    function shufflePlayers(one, two) {
        var rndNumber = Utilities.random(0, 1);
        if (rndNumber === 0)
            return [one, two];
        return [two, one];
    }

    fightMoves.prototype = {
        randomMove: getRandomMove,
        calculateMove: calculateMove
    };

    return fightMoves;

})();