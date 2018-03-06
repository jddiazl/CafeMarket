angular.module('app.controllers', [])
  
.controller('bienvenidoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('MyController', function($scope, $ionicPopover) { 
  
    $ionicPopover.fromTemplateUrl('templates/popover.html', {
      scope: $scope
    }).then(function(popover) {
    $scope.popover = popover;
    }); 
    
      $scope.openPopover = function($event) {
        $scope.popover.show($event);
      };
      $scope.closePopover = function() {
        $scope.popover.hide();
      };
      //Cleanup the popover when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.popover.remove();
      });
      // Execute action on hidden popover
      $scope.$on('popover.hidden', function() {
        // Execute action
      });
      // Execute action on remove popover
      $scope.$on('popover.removed', function() {
        // Execute action
      });
    })
    .controller('LoginController', function($scope, $ionicPopover,$http,$ionicPopup,$state,$ionicHistory) { 
       
      
        $ionicPopover.fromTemplateUrl('templates/popoverLogin.html', {
          scope: $scope
        }).then(function(popover) {
        $scope.popover = popover;
        }); 
        
          $scope.openPopover = function($event) {
            $scope.popover.show($event);
          };
          $scope.closePopover = function() {
            $scope.popover.hide();
            
          };
          //Cleanup the popover when we're done with it!
          $scope.$on('$destroy', function() {
            $scope.popover.remove();
          });
          // Execute action on hidden popover
          $scope.$on('popover.hidden', function() {
            // Execute action
          });
          // Execute action on remove popover
          $scope.$on('popover.removed', function() {
            // Execute action
          });

    $scope.user = {};  //declares the object user
		$scope.login = function() {
			str="http://cafemarket.911drinks.com/mobile/login.php?e="+$scope.user.email+"&p="+$scope.user.password;
			$http.get(str)
			.success(function (response){   // if login request is Accepted
			
				// records is the 'server response array' variable name.
				$scope.user_details = response.records;  // copy response values to user-details object.
				
				//stores the data in the session. if the user is logged in, then there is no need to show login again.
				sessionStorage.setItem('loggedin_name', $scope.user_details.u_name);
				sessionStorage.setItem('loggedin_id', $scope.user_details.u_id );
				sessionStorage.setItem('loggedin_phone', $scope.user_details.u_phone);
				sessionStorage.setItem('loggedin_address', $scope.user_details.u_address);
				sessionStorage.setItem('loggedin_pincode', $scope.user_details.u_pincode);
				
				// remove the instance of login page, when user moves to profile page.
				// if you dont use it, you can get to login page, even if you are already logged in .
				$ionicHistory.nextViewOptions({
					disableAnimate: true,
					disableBack: true
				});
				
				//in my FoodKart App, it checks the page from where the user logs in.
				//if it is from the check out, then after login, the check out page will be shown.
				//else normal profile page will be shown
				
				lastView = $ionicHistory.backView();
				if(lastView.stateId=="checkOut"){ $state.go('checkOut', {}, {location: "replace", reload: true}); }
				else{$state.go('profile', {}, {location: "replace", reload: true});}
				
				
			}).error(function() {   						//if login failed
					var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					});
			});
		};
		
})
.controller('precioDeLaArrobaDeCafCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mejoresPrCticasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('placesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 