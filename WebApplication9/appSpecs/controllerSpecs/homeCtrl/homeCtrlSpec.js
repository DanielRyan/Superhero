/// <reference path="../../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../../Scripts/angular.js" />
/// <reference path="../../../Scripts/angular-mocks.js" />
/// <reference path="../../../app/app.js" />
/// <reference path="../../../app/controllers/homeCtrl.js" />

describe("HomeCtrl", function () {
    var $scope;

    beforeEach(function () {
        module("home");

        inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();

            var ctrl = $controller("homeController", {
                $scope: $scope
            });
        });
    });

    it("should have model property on $scope", function () {
        expect($scope.model).toBeDefined();
    });

});