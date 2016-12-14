var app = angular.module('twitter', ['ui.router']);  //cookies later

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state({
        name: 'world',
        url: '/world',
        templateUrl: 'world.html',
        controller: 'WorldController'
    });
    $urlRouterProvider.otherwise('/world');
});

app.factory('twitterService', function($http, $state) {
    var service = {};

    service.getWorld = function(data) {
        var url = '/world';
        return $http({
            method: 'GET',
            url: url,
            data: data
        });
    };
    return service;
});

app.controller('WorldController', function($scope, twitterService, $stateParams, $state) {
    twitterService.getWorld()
    .success(function(results){
        console.log(results);
        $scope.tweets = results;
    });
});
