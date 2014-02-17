/// <reference path="../../app/core/titleCreator.js" />
/// <reference path="../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../app/core/prototypes.js" />
/// <reference path="../../app/core/utilities.js" />

describe("TitleCreator", function () {
    var titleCreator;

    beforeEach(function () {
        titleCreator = new TitleCreator();
    });

    it("should return a title", function () {
        var title = titleCreator.randomTitle();

        expect(title).toBeDefined();
        expect(title.length).toBeGreaterThan(1);
    });

})