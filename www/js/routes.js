angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.bienvenido', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/bienvenido.html',
        controller: 'bienvenidoCtrl'
      }
    }
  })

  .state('tabsController.precioDeLaArrobaDeCaf', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/precioDeLaArrobaDeCaf.html',
        controller: 'precioDeLaArrobaDeCafCtrl'
      }
    }
  })

  .state('tabsController.mejoresPrCticas', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/mejoresPrCticas.html',
        controller: 'mejoresPrCticasCtrl'
      }
    }
  })
  
    .state('tabsController.places', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/places.html',
        controller: 'placesCtrl as vm'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })



$urlRouterProvider.otherwise('/page1/page2')


});