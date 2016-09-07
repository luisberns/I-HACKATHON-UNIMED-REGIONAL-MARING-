// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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
})

.value('menu', 'home')

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  //startApp
  .state('start', {
    url: '/start',
    templateUrl:'templates/start.html'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    contoller: 'LoginCtrl'
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'templates/contato.html',
    contoller: 'ContactCtrl'
  })

  .state('localization', {
    url: '/localization',
    templateUrl:'templates/localization.html',
    controller: 'LacalizationCtrl'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.cooperated', {
    url: '/cooperated',
    views: {
      'tab-cooperated': {
        templateUrl: 'templates/graphics.html',
        controller: 'CooperatedCtrl'
      }
    }
  })

  .state('tab.ovidoria', {
    url: '/cooperated/ouvidoria',
    views: {
      'tab-cooperated': {
        templateUrl: 'templates/ouvidoria.html'
      }
    }
  })

  .state('tab.client', {
    url: '/client',
    views: {
      'tab-client': {
        templateUrl: 'templates/tab-client.html',
        controller: 'ClientCtrl'
      }
    }
  })

  .state('tab.plan', {
    url: '/client/plan',
    views: {
      'tab-client': {
        templateUrl: 'templates/my-plan.html'
      }
    }
  })

  .state('tab.history', {
    url: '/client/history',
    views: {
      'tab-client': {
        templateUrl: 'templates/historico.html'
      }
    }
  })

   .state('tab.agend', {
    url: '/client/agend',
    views: {
      'tab-client': {
        templateUrl: 'templates/agendamento.html'
      }
    }
  })

  .state('tab.collaborator', {
    url: '/collaborator',
    views: {
      'tab-collaborator': {
        templateUrl: 'templates/tab-collaborator.html',
        controller: 'CollaboratorCtrl'
      }
    }
  })
  .state('tab.feedback', {
    url: '/collaborator/feedback',
    views: {
      'tab-collaborator': {
        templateUrl: 'templates/feedback.html'
      }
    }
  })
  .state('tab.relatorio', {
    url: '/collaborator/relatorio',
    views: {
      'tab-collaborator': {
        templateUrl: 'templates/relatorios.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start');

})
.run(function($rootScope, menu) {
  $rootScope.menu = menu;
});
