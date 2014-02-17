/// <reference path="../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../app/core/prototypes.js" />
/// <reference path="../../app/core/utilities.js" />
/// <reference path="../../app/core/fightMoves.js" />
/// <reference path="../../app/core/match.js" />

describe("FightMoves", function () {
    var fightMoves;
    var match;
    var playerOne;
    var playerTwo;

    beforeEach(function () {
        fightMoves = new FightMoves();

        var playerOneName = "Daniel";
        var playerTwoName = "Tommy";
        
        match = new Match();
        match.addPlayers(playerOneName, playerTwoName);
        playerOne = match.getPlayerOne();
        playerTwo = match.getPlayerTwo();
    });

    it("should return a title", function () {
        var move = fightMoves.randomMove();

        expect(move).not.toBeNull();
        expect(move.length).toBeGreaterThan(1);
    });

    it("should create a move", function () {
        var move = fightMoves.calculateMove(playerOne, playerTwo);
        expect(move).toBeDefined();
    });

    it("should have an attacker and defender", function () {
        var move = fightMoves.calculateMove(playerOne, playerTwo);
        expect(move.attacker).toBeDefined();
        expect(move.defender).toBeDefined();
    });

    it("should have a score", function () {
        var move = fightMoves.calculateMove(playerOne, playerTwo);
        expect(move.score).toBeDefined();
        expect(move.score).toBeGreaterThan(0);
    });

    it("should have a move", function () {
        var move = fightMoves.calculateMove(playerOne, playerTwo);
        expect(move.move).toBeDefined();
    });

})