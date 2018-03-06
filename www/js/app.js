// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])

.config(function($ionicConfigProvider, $sceDelegateProvider){

  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})
.controller('customersCtrl', function($scope, $http) {
  $http.get("https://www.w3schools.com/angular/customers.php").then(function(response) {
      $scope.myData = response.data.records;
  });
})
.controller('precioCafe', function($scope, $http) {
  $http.get("https://www.quandl.com/api/v3/datasets/CHRIS/ICE_KC1.json?api_key=n4XYHUMpF-UynfHsQ_d-").then(function(response) {
    $scope.myDataCff = response.data.dataset;
});
})
.controller('precioDollar', function($scope, $http) {
$http.get("https://www.quandl.com/api/v3/datasets/CURRFX/USDCOP.json?api_key=n4XYHUMpF-UynfHsQ_d-&start_date=2017-09-09").then(function(response) {
  $scope.myDataDll = response.data.dataset;
});
})
.controller('SpicyController', ['$scope', function($scope) {
  $scope.spice = 'very';

  $scope.chiliSpicy = function() {
      $scope.spice = 'chili';
  };

  $scope.jalapenoSpicy = function() {
      $scope.spice = 'jalapeño';
  };
}])

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

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
})
.factory('Geolocation', function() {
  return {
    "formatted_address": "Chicago, IL, USA",
    "geometry": {
      "location": {
        "lat": 41.8781136,
        "lng": -87.6297982
      }
    },
    "place_id": "ChIJ7cv00DwsDogRAMDACa2m4K8"
  };
})
;

