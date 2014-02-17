/// <reference path="../../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../../Scripts/angular.js" />
/// <reference path="../../../Scripts/angular-mocks.js" />
/// <reference path="../../../app/app.js" />
/// <reference path="../../../app/controllers/homeCtrl.js" />

describe("HomeCtrl - model - combatLog propery", function () {
    var combatLog;

    beforeEach(function () {
        module("home");

        inject(function ($rootScope, $controller) {
            var $scope = $rootScope.$new();

            var ctrl = $controller("homeController", {
                $scope: $scope
            });

            combatLog = $scope.model.combatLog;
        });
    });

    it("should be defined", function () {
        expect(combatLog).toBeDefined();
    });

    it("should be an empty array", function () {
        expect(combatLog.length).toBeDefined();
        expect(combatLog.length).toBe(0);
    });
});