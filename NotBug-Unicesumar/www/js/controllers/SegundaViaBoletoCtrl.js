app.controller('SegundaViaBoletoCtrl', function($scope, $location) {

	$scope.mes = {
		"nome": "1",
		"nome": "2",
		"nome": "3",
		"nome": "4",
		"nome": "5",
		"nome": "6",
		"nome": "7",
		"nome": "8",
		"nome": "9",
		"nome": "10",
		"nome": "11",
		"nome": "12"
	}

	$scope.salvar = function () {
		$location.path('/app/solicitacaoServicos');
	}


});
