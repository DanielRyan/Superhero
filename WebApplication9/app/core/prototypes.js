Array.prototype.randomItem = function () {
    var randomIndex = Utilities.random(0, this.length - 1);
    return this[randomIndex];
}