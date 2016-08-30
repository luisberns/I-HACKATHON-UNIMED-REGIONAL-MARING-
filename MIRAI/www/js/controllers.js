angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope) {
  $scope.$on('$ionicView.enter', function() {
    $rootScope.menu = 'home';
  });
})

.controller('StartCtrl', function($scope) {
})

.controller('LacalizationCtrl', function($scope) {
})

.controller('ContactCtrl', function($scope) {})

.controller('CooperatedCtrl', function($scope, $rootScope) {
  $scope.$on('$ionicView.enter', function() {
    $rootScope.menu = 'cooperated';
  });
})

.controller('LoginCtrl', function($scope) {

})

.controller('ClientCtrl', function($scope, $rootScope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  $scope.$on('$ionicView.enter', function() {
    $rootScope.menu = 'client';
  });

  $scope.option = 2;
})

.controller('CollaboratorCtrl', function($scope,$rootScope) {
  $scope.$on('$ionicView.enter', function() {
    $rootScope.menu = 'collaborator';
  });
});
