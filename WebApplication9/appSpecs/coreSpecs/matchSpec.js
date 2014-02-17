/// <reference path="../../app/core/titleCreator.js" />
/// <reference path="../../Scripts/underscore.js" />
/// <reference path="../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../app/core/match.js" />
/// <reference path="../../app/core/utilities.js" />
/// <reference path="../../app/core/prototypes.js" />

describe("Match", function () {
    var match = null;
    var playerOneName;
    var playerTwoName;

    beforeEach(function () {
        match = new Match();
        
        playerOneName = "Daniel";
        playerTwoName = "Tommy";

        match.addPlayers(playerOneName, playerTwoName);
    });

    it("should not be null", function () {
        expect(match).not.toBeNull();
    });

    it("should be able to add two players", function () {
        var playerOne = match.getPlayerOne();
        var playerTwo = match.getPlayerTwo();

        expect(playerOne.name).toBe(playerOneName);
        expect(playerTwo.name).toBe(playerTwoName);
    });

    it("should give each player a title", function () {
        var playerOne = match.getPlayerOne();
        var playerTwo = match.getPlayerTwo();

        expect(playerOne.title).not.toBeNull();
        expect(playerTwo.title).not.toBeNull();

        expect(playerOne.title.length).toBeGreaterThan(1);
        expect(playerTwo.title.length).toBeGreaterThan(1);
    });

    it("should be able to decide a winner", function () {
        var result = match.calculateFight();

        expect(result.winner).toBeDefined();
    });

    it("should have a combat log", function () {
        var result = match.calculateFight();

        expect(result.combatLog).toBeDefined();
        expect(result.combatLog.length).toBeGreaterThan(0);
    });

    it("should have a combat log with at least two items", function() {
        var result = match.calculateFight();
        expect(result.combatLog.length).toBeGreaterThan(1);
    });

});