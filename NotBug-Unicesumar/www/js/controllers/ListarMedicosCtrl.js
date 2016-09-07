app.controller('ListarMedicosCtrl', function ($scope, $stateParams, $location, ionicMaterialInk, PrincipalService) {
	$scope.clickUsuario = function () {
		$location.path('/app/medico');
	}
});