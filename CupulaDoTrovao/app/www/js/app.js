// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ionic-material', 'ionic.rating', 'angularMoment']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
  });
});

app.config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.inicio', {
      url: '/inicio',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-inicio.html',
          controller: 'InicioCtrl'
        }
      }
    })

    .state('tab.faturas', {
      url: '/faturas',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-faturas.html',
          controller: 'FaturasCtrl',
          controllerAs: 'ctrl'
        }
      }
    })

    .state('tab.agenda', {
      url: '/agenda',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-agenda.html',
          controller: 'AgendaCtrl'
        }
      }
    })

    .state('tab.procedimentos', {
      url: '/procedimentos',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-procedimentos.html',
          controller: 'ProcedimentosCtrl',
          controllerAs: 'ctrl'
        }
      }
    })

    .state('procedimento', {
      url: '/procedimento/:id',
      templateUrl: 'templates/tab-procedimento.html',
      controller: 'ProcedimentoCtrl',
      controllerAs: 'ctrl'
    })

    .state('tab.guiamedicos', {
      url: '/guiamedicos',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-guiamedicos.html',
          controller: 'GuiaMedicosCtrl',
          controllerAs: 'ctrl'
        }
      }
    })

    .state('tab.user', {
      url: '/user',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-user.html',
          controller: 'UserCtrl',
          controllerAs: 'ctrl'
        }
      }
    })

    .state('medico', {
      url: '/medico/:id',
      templateUrl: 'templates/tab-medico.html',
      controller: 'MedicoCtrl',
      controllerAs: 'ctrl'
    })
    
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/inicio');

});
