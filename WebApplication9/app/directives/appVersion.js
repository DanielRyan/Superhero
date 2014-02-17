angular.module('directives', [])
    .directive('appVersion', ['version', function (version) {
        return {
            template: version
        };
    }]);