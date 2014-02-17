/// <reference path="../../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../../Scripts/angular.js" />
/// <reference path="../../../Scripts/angular-mocks.js" />
/// <reference path="../../../app/app.js" />
/// <reference path="../../../app/controllers/homeCtrl.js" />

describe("HomeCtrl - model - winner property", function () {
    var winner;

    beforeEach(function () {
        module("home");

        inject(function ($rootScope, $controller) {
            var $scope = $rootScope.$new();

            var ctrl = $controller("homeController", {
                $scope: $scope
            });

            winner = $scope.model.winner;
        });
    });

    it("should be defined", function () {
        expect(winner).toBeDefined();
    });

    it("should be an empty object", function () {
        expect(Object.getOwnPropertyNames(winner).length).toBe(0);
    });

});