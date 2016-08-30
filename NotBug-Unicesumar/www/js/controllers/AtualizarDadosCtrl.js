app.controller('AtualizarDadosCtrl', function ($scope, $stateParams, $location, ionicMaterialInk, PrincipalService) {
	$scope.labelEmail = false;
	$scope.labelTelefone = false;
	$scope.labelEndereco = false;
	
	$scope.usuario = {
		"email": "admin@admin.com",
		"telefone": "(44)9999-8888",
		"estado": "Paraná",
		"cidade": "Maringá",
		"cep": "87013-250",
		"rua": "Avenida Paraná",
		"numero": "143",
		"complemento": "Apartamento 741"
	};

	$scope.salvar = function () {
		$location.path('/app/principal');
	}

	$scope.email = function () {
		$scope.labelEmail = true;
		$scope.labelTelefone = false;
		$scope.labelEndereco = false;
	}

	$scope.telefone = function () {
		$scope.labelEmail = false;
		$scope.labelTelefone = true;
		$scope.labelEndereco = false;
	}

	$scope.endereco = function () {
		$scope.labelEmail = false;
		$scope.labelTelefone = false;
		$scope.labelEndereco = true;
	}
});