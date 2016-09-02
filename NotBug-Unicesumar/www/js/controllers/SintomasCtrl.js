app.controller('SintomasCtrl', function ($scope, $stateParams, $location, ionicMaterialInk, PrincipalService) {
	$scope.usuarios = true;
	$scope.dorDiv =false;
	$scope.pesquisa = '';
	$scope.clickUsuario = function () {
		$scope.usuarios = false;
		$scope.showPesquisa = true;
	}

	$scope.buscarMedicos = function () {
		$location.path('/app/listarMedicos');
	}

	$scope.dor = function (val) {
		if (val == 'dor' || val == 'Dor') {
			$scope.dorDiv =true;
		}else{
			$scope.dorDiv =false;
		}
	}
});