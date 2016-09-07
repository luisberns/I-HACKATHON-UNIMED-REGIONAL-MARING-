app.config(function($stateProvider,  $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'index.html',
    controller: 'indexController'
  })
  .state('music', {
    url: '/music',
    templateUrl: 'view/music.html',
    controller: 'MusicController'
  })
  .state('outra', {
    url: '/outra',
    templateUrl: 'view/outra.html',
    controller: 'MusicController'
  });


  $urlRouterProvider.otherwise("/music");
});

