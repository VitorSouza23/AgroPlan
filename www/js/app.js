// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers']);

app.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.plano = new PlanoDeNegocio();

  $rootScope.salvarPlano = function(){
    var planoSalvo = angular.toJson($rootScope.plano);
    localStorage.setItem("plano", planoSalvo);
    $rootScope.plano = new PlanoDeNegocio();
  };
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.sumarioExecutivo', {
    url: '/playlists/1',
    views: {
      'menuContent': {
        templateUrl: 'templates/sumarioExecutivoTemplate.html',
        controller: 'SumarioExecutivoController'
      }
    }
  })

  .state('app.analiseDeMercado', {
    url: '/playlists/2',
    views: {
      'menuContent': {
        templateUrl: 'templates/analiseMercadoTemplate.html',
        controller: 'AnaliseDeMercadoController'
      }
    }
  })

  .state('app.planoMarketing', {
    url: '/playlists/3',
    views: {
      'menuContent': {
        templateUrl: 'templates/planoMarketingTemplate.html',
        controller: 'PlanoDeMarketingCtrl'
      }
    }
  })

  .state('app.planoOperacional', {
    url: '/playlists/4',
    views: {
      'menuContent': {
        templateUrl: 'templates/planoOperacionalTemplate.html',
        controller: 'PlanoOperacionalCtrl'
      }
    }
  })

  .state('app.planoFinanceiro', {
    url: '/playlists/5',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.construcaoCenarios', {
    url: '/playlists/6',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.avaliacaoEstrategica', {
    url: '/playlists/7',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.avaliacaoPlanoDeNegocios', {
    url: '/playlists/8',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.roteiroParaColetaDeInformacoes', {
    url: '/playlists/9',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.socios', {
    url: '/playlists/1/socios',
    views: {
      'menuContent': {
        templateUrl: 'templates/socios.html',
        controller: 'SumarioExecutivoController'
      }
    }
  })

  .state('app.concorrentes', {
    url: '/playlists/2/concorrentes',
    views: {
      'menuContent': {
        templateUrl: 'templates/concorrentes.html',
        controller: 'AnaliseDeMercadoController'
      }
    }
  })

  .state('app.fornecedores', {
    url: '/playlists/2/fornecedores',
    views: {
      'menuContent': {
        templateUrl: 'templates/fornecedores.html',
        controller: 'AnaliseDeMercadoController'
      }
    }
  })

  .state('app.produtos', {
    url: '/playlists/3/produtos',
    views: {
      'menuContent': {
        templateUrl: 'templates/produtos.html',
        controller: 'PlanoDeMarketingCtrl'
      }
    }
  })

  .state('app.cargos', {
    url: '/playlists/4/cargos',
    views: {
      'menuContent': {
        templateUrl: 'templates/cargos.html',
        controller: 'PlanoOperacionalCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
