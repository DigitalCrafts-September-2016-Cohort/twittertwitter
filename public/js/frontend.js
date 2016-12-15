var app = angular.module('twitter', ['ui.router']);  //cookies later

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state({
        name: 'home',
        url: '/home',
        templateUrl: 'home.html',
        controller: 'HomeController'
    })
    .state({
        name: 'home.world',
        url: '/world',
        templateUrl: 'world.html',
        controller: 'WorldController'
    })
    .state({
      name: 'home.welcome',
      url: '/welcome',
      templateUrl: 'welcome.html',
      controller: 'WelcomeController'
    })
    .state({
      name: 'home.welcome.default',
      url: '/default',
      templateUrl: 'default.html',
      controller: 'DefaultController'
    })
    .state({
      name: 'home.welcome.login',
      url: '/login',
      templateUrl: 'login.html',
      controller: 'LoginController'
    })
    .state({
      name: 'home.welcome.signup',
      url: '/signup',
      templateUrl: 'signup.html',
      controller: 'SignUpController'
    })
    .state({
      name: 'loggedIn',
      url: '/loggedIn',
      templateUrl: 'loggedIn.html',
      controller: 'LoggedInController'
    })
    .state({
      name: 'loggedIn.userTimeline',
      url: '/userTimeline',
      templateUrl: 'userTimeline.html',
      controller: 'UserTimelineController'
    })
    .state({
      name: 'loggedIn.userPage',
      url: '/userPage',
      templateUrl: 'userPage.html',
      controller: 'UserPageController'
    })
    .state({
      name: 'loggedIn.userPage.userTweets',
      url: '/userTweets',
      templateUrl: 'userTweets.html',
      controller: 'UserTweetsController'
    })
    .state({
      name: 'loggedIn.userPage.userLikes',
      url: '/userLikes',
      templateUrl: 'userLikes.html',
      controller: 'UserLikesController'
    });
    $urlRouterProvider.otherwise('/home');
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

app.controller('HomeController', function($scope, twitterService, $stateParams, $state) {
  $state.go('home.world');
});

app.controller('WorldController', function($scope, twitterService, $stateParams, $state) {
    twitterService.getWorld()
    .success(function(results){
        console.log(results);
        $scope.tweets = results;
    });
});

app.controller('WelcomeController', function($scope, twitterService, $stateParams, $state) {
  $state.go('home.welcome.default');
});

app.controller('DefaultController', function($scope, twitterService, $stateParams, $state) {

});

app.controller('LoginController', function($scope, twitterService, $stateParams, $state) {

});

app.controller('SignUpController', function($scope, twitterService, $stateParams, $state) {

});

app.controller('LoggedInController', function($scope, twitterService, $stateParams, $state) {

});

app.controller('UserTimelineController', function($scope, twitterService, $stateParams, $state) {

});

app.controller('UserPageController', function($scope, twitterService, $stateParams, $state) {

});

app.controller('UserTweetsController', function($scope, twitterService, $stateParams, $state) {

});

app.controller('UserLikesController', function($scope, twitterService, $stateParams, $state) {

});
