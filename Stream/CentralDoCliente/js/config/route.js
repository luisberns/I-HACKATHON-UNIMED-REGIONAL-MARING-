angular.module('centralCliente')
    .config(function($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: 'index.html',
                controller: 'InitialController'
            }).
            when('/boleto', {
                templateUrl: 'boleto.html',
                controller: 'BoletoController'
            }).
            when('/news', {
                templateUrl: 'news.html',
                controller: 'InitialController'
            }).
            otherwise({
                redirectTo: '/'
            });
    });