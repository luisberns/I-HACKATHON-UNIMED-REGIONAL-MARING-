app.controller('DuvidasCtrl', function ($scope, $stateParams, $location, ionicMaterialInk, PrincipalService) {
	$scope.labelDuvida1 = false;
	$scope.labelDuvida2 = false;
	$scope.labelDuvida3 = false;
	
	$scope.salvar = function () {
		$location.path('/app/principal');
	}

	$scope.duvida1 = function () {
		$scope.labelDuvida1 = true;
		$scope.labelDuvida2 = false;
		$scope.labelDuvida3 = false;
	}

	$scope.duvida2 = function () {
		$scope.labelDuvida1 = false;
		$scope.labelDuvida2 = true;
		$scope.labelDuvida3 = false;
	}

	$scope.duvida3 = function () {
		$scope.labelDuvida1 = false;
		$scope.labelDuvida2 = false;
		$scope.labelDuvida3 = true;
	}
});