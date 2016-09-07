app.controller('MensagensCtrl', function ($scope, $stateParams, ionicMaterialInk, $location,$ionicPopup, $timeout) {

	 // An alert dialog
	 $scope.showAlert = function(res) {
	   var alertPopup = $ionicPopup.alert({
	     title: 'Presença Confirmada',
	     type: 'button-balanced',
	     template: 'Confirmada sua presença! Obrigado',
	     buttons: [
	      {
	        text: 'OK',
	        type: 'button-balanced',
	        onTap: function() {
	          $location.path('/app/principal');
	        }
	      }
	    ]
	   });

	   if (res) {
	   	$location.path('/app/principal');
	   }

	 };
});