angular.module('app', ['ngRoute','services', 'directives', 'home'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/app/views/home/index.html',
            controller: 'homeController'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
