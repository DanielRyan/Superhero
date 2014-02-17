/// <reference path="../../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../../Scripts/angular.js" />
/// <reference path="../../../Scripts/angular-mocks.js" />
/// <reference path="../../../app/app.js" />
/// <reference path="../../../app/controllers/homeCtrl.js" />

describe("HomeCtrl - model - fight function", function () {
    var model;

    beforeEach(function () {
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
        expect(model.fight).toBeDefined();
    });

    it("should add two items to model.combatLog after one second", function () {
        inject(function ($timeout) {
            expect(model.combatLog.length).toBe(0);
            model.fight();

            $timeout.flush(10);
            expect(model.combatLog.length).toBe(1);

            $timeout.flush(1250);
            expect(model.combatLog.length).toBe(2);
        });
    });

    it("should declare a winner", function () {
        inject(function ($timeout) {
            model.fight();
            $timeout.flush();
            expect(Object.getOwnPropertyNames(model.winner).length).toBeGreaterThan(0);
        });
    });

    it("should enable players.ready when the fight is finished", function () {
        inject(function ($timeout) {
            model.fight();
            $timeout.flush();

            expect(model.players.ready).toBeDefined();
            expect(model.players.ready).toBeFalsy();
        });
    });

    it("should clear the model.combatLog after initiating a second fight", function () {
        inject(function ($timeout) {
            model.fight();
            $timeout.flush();
            expect(model.combatLog.length).toBeGreaterThan(1);

            model.fight();
            expect(model.combatLog.length).toBe(0);
        });
    });

    it("should clear the model.winner after initiating a second fight", function () {
        inject(function ($timeout) {
            model.fight();
            $timeout.flush();

            model.fight();
            expect(Object.getOwnPropertyNames(model.winner).length).toBe(0);
        });
    });

    it("should reset players after the fight", function () {
        inject(function ($timeout) {
            spyOn(model.players, "reset");

            model.fight();
            $timeout.flush();

            expect(model.players.reset).toHaveBeenCalled();
        });
    });

    it("should disable the button when the fight is in progress", function () {
        model.players.ready = true;

        model.fight();
        expect(model.players.ready).toBeDefined();
        expect(model.players.ready).toBeFalsy();
    });

});