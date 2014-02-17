/// <reference path="../../app/core/utilities.js" />
/// <reference path="../../Scripts/jasmine/jasmine.js" />

describe("Utilities", function () {

    it("Should generate a random number between 0 and 1", function () {

        var upperBound = 1;
        var lowerBound = 0;

        var hasZero = false;
        var hasOne = false;
        
        for (var i = 0; i < 50; i++) {
            var randomNumber = Utilities.random(lowerBound, upperBound);
            if (randomNumber === 0)
                hasZero = true;
            if (randomNumber === 1)
                hasOne = true;
        }

        expect(hasZero).toBeTruthy();
        expect(hasOne).toBeTruthy();
    });

    it("Should generate a random number between 5 and 20", function () {

        var upperBound = 20;
        var lowerBound = 5;

        for (var i = 0; i < 100; i++) {
            var randomNumber = Utilities.random(lowerBound, upperBound);

            expect(randomNumber).toBeGreaterThan(lowerBound - 1);
            expect(randomNumber).toBeLessThan(upperBound + 1);
        }
    });

    it("Should return true 30% of the time", function () {

        var successes = 0;
        for (var i = 0; i < 10000; i++) {
            var success = Utilities.randomSuccess(0.3);
            if (success)
                successes++;
        }

        expect(successes).toBeGreaterThan(2800);
        expect(successes).toBeLessThan(3200);
    });

    it("Should return true 100% of the time", function () {

        var successes = 0;
        for (var i = 0; i < 20; i++) {
            var success = Utilities.randomSuccess(1);
            if (success)
                successes++;
        }

        expect(successes).toBe(20);
    });

    it("Should return false 100% of the time", function () {

        var successes = 0;
        for (var i = 0; i < 20; i++) {
            var success = Utilities.randomSuccess(0);
            if (success)
                successes++;
        }

        expect(successes).toBe(0);
    });
});
