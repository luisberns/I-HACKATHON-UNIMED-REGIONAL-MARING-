app.controller('LoginCtrl', function ($scope, $stateParams, ionicMaterialInk, $location) {

	$scope.salvar = function () {
		$location.path('/app/principal');
	}

	$scope.solicitar = function () {
		$location.path('/app/solicitarSenha');
	}

});