app.controller('SegundaViaCartaoCtrl', function($scope, $ionicPopup, $timeout, $location) {

	$scope.cartao = {
			"email": "admin@admin.com"
	}

	$scope.salvar = function () {
			$location.path('/app/principal');
	}

});