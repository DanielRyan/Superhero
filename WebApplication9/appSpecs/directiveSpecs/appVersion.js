/// <reference path="../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../Scripts/angular.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../app/app.js" />
/// <reference path="../../app/directives/appVersion.js" />

describe("Directives", function () {

    beforeEach(function () {
        module("directives");
    });

    it("should display current version number", function () {
        var versionNumber = "1.0";

        module(function ($provide) {
            $provide.value("version", versionNumber);
        });

        inject(function ($compile, $rootScope) {
            var element = $compile("<div data-app-version></div>")($rootScope);
            expect(element.text()).toEqual(versionNumber);
        });
    });

});