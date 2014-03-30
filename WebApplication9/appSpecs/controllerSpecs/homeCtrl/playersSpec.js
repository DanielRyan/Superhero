/// <reference path="../../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../../Scripts/angular.js" />
/// <reference path="../../../Scripts/angular-mocks.js" />
/// <reference path="../../../app/app.js" />
/// <reference path="../../../app/controllers/homeCtrl.js" />

describe("HomeCtrl - model - players property", function () {
    var playerOne;
    var playerTwo;
    var playerThree;

    var model;

    beforeEach(function () {
        playerOne = "Daniel";
        playerTwo = "Tommy";
        playerThree = "King Arthur";

        module("home");

        inject(function ($rootScope, $controller) {
            var $scope = $rootScope.$new();

            var ctrl = $controller("homeController", {
                $scope: $scope
            });

            model = $scope.model;
        });
    });

    it("should be defined", function () {
        expect(model.players).toBeDefined();
    });

    it("should have an array", function () {
        expect(model.players.getAll().length).toBeGreaterThan(0);
    });

    it("should have playerOne property as undefined", function () {
        expect(model.players.playerOne).toBeUndefined();
    });

    it("should have playerTwo property as undefined", function () {
        expect(model.players.playerTwo).toBeUndefined();
    });

    it("should be able to select player one", function () {
        model.players.select(playerOne);

        expect(model.players.playerOne).toBe(playerOne);
    });

    it("should be able to select player two", function () {
        model.players.select(playerOne);
        model.players.select(playerTwo);

        expect(model.players.playerOne).toBe(playerOne);
        expect(model.players.playerTwo).toBe(playerTwo);
    });

    it("should not be able to select a third player", function () {
        model.players.select(playerOne);
        model.players.select(playerTwo);
        model.players.select(playerThree);

        expect(model.players.playerOne).toBe(playerOne);
        expect(model.players.playerTwo).toBe(playerTwo);
    });

    it("should be able to reset selected players", function () {
        model.players.select(playerOne);
        model.players.select(playerTwo);

        expect(model.players.playerOne).toBe(playerOne);
        expect(model.players.playerTwo).toBe(playerTwo);

        model.players.reset();

        expect(model.players.playerOne).toBeUndefined();
        expect(model.players.playerTwo).toBeUndefined();
    });

    it("should have ready set to false", function () {
        expect(model.players.ready).toBeFalsy();
    });

    it("should set ready to true when two players are selected", function () {
        expect(model.players.ready).toBeFalsy();

        model.players.select(playerOne);
        model.players.select(playerTwo);

        expect(model.players.ready).toBeTruthy();
    });

});