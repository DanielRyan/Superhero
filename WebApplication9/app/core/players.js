var Players = (function () {
    var playerOne = undefined;
    var playerTwo = undefined;

    var players = function () {
        this.playerOne = undefined;
        this.playerTwo = undefined;
    }

    var getAll = function () {
        return ["Daniel", "Cato", "Steam Rune", "Glenn", "Peda", "Andreas", "Ørjan", "Shamrez", "Petter", "Pedro", "Rune S", "Kjartan", "Rune B", "Terje", "Øyvind", "Stein-Arild"];
    }

    var select = function (player) {
        if (!this.playerOne)
            this.playerOne = player;
        else if (!this.playerTwo)
            this.playerTwo = player;

        if (this.playerOne && this.playerTwo)
            this.ready = true;
    };

    var reset = function () {
        this.playerOne = undefined;
        this.playerTwo = undefined;
    };

    var ready = false;

    players.prototype = {
        getAll: getAll,
        select: select,
        reset: reset,
        ready: ready,
        playerOne: playerOne,
        playerTwo: playerTwo
    }

    return players;

})();