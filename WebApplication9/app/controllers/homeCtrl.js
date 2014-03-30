/// <reference path="../core/match.js" />
/// <reference path="../core/players.js" />
function homeCtrl($scope, $timeout) {

    var model = {
        combatLog: [],
        winner: {},
        fight: function () {
            this.combatLog = [];
            this.winner = {};

            this.players.ready = false;

            var match = new Match();
            match.addPlayers(this.players.playerOne, this.players.playerTwo);

            var result = match.calculateFight();

            var that = this;
            result.combatLog.forEach(function (item, index) {
                item.index = index; // Used for UI ordering.

                $timeout(function () {
                    that.combatLog.push(item);
                }, (1250 * index));

                if (index === result.combatLog.length - 1)
                    $timeout(function () {
                        that.winner = result.winner;
                        that.players.ready = false;
                        that.players.reset();
                    }, (1250 * result.combatLog.length));
            });

        },
        players: new Players()
    };

    $scope.model = model;
}

angular.module('home', [])
    .controller('homeController', ['$scope', '$timeout', homeCtrl]);