/// <reference path="../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../app/core/players.js" />

describe("Players", function () {
    var players = null;
    var playerOne = undefined;
    var playerTwo = undefined;

    beforeEach(function () {
        players = new Players();
        playerOne = players.getAll()[0];
        playerTwo = players.getAll()[1];
    });

    it("should be defined", function () {
        expect(players).toBeDefined();
    });

    it("should return a list of all players", function () {
        var allPlayers = players.getAll();
        expect(allPlayers.length).toBeGreaterThan(0);
    });

    it("should be able to select a player", function () {
        expect(players.select).toBeDefined();
    });

    it("should be able to select player one", function () {
        players.select(playerOne);

        expect(players.playerOne).toBeDefined();
        expect(players.playerTwo).toBeUndefined();
    });

    it("should be able to select player two", function () {
        players.select(playerOne);
        players.select(playerTwo);

        expect(players.playerOne).toBeDefined();
        expect(players.playerTwo).toBeDefined();
    });

    it("should be ready when both players are selected", function () {
        players.select(playerOne);
        players.select(playerTwo);

        expect(players.ready).toBe(true);
    });

    it("should be able to reset players", function () {
        players.select(playerOne);
        players.select(playerTwo);

        expect(players.playerOne).toBeDefined();
        expect(players.playerTwo).toBeDefined();

        players.reset();

        expect(players.playerOne).toBeUndefined();
        expect(players.playerTwo).toBeUndefined();
    });

});