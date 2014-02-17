/// <reference path="../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../Scripts/angular.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../app/app.js" />
/// <reference path="../../app/services/versionNumber.js" />

describe("Version number", function() {

    beforeEach(function() {
        module("services");
    });

    it("should return the current version number", function () {
        inject(function(version) {
            expect(version).toBeDefined();
            expect(version).toBeGreaterThan(0);
        });
    });

});