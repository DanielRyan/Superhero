/// <reference path="../../app/core/utilities.js" />
/// <reference path="../../Scripts/jasmine/jasmine.js" />
/// <reference path="../../app/core/prototypes.js" />

describe("Prototypes", function () {

    it("Should return a random item from an array", function () {

        var array = [1, 2, 3, 4];

        var randomItem = array.randomItem();
        expect(randomItem).toBeDefined();

        var randomItems = [];
        for (var i = 0; i < 100; i++) {
            randomItem = array.randomItem();
            randomItems.push(randomItem);
        }

        expect(randomItems).not.toContain(undefined);
        expect(randomItems).toContain(1);
        expect(randomItems).toContain(2);
        expect(randomItems).toContain(3);
        expect(randomItems).toContain(4);
    });
});