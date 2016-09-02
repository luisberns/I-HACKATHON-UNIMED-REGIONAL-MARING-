"use strict";
app.controller("InicioCtrl", [
	"$scope",
	"$location",
	"$stateParams",
	"$ionicLoading",
	"$http",
	"BaseSvc",
	"FaturaSvc",
	"$ionicPopup",
	function($scope, $location, $stateParams, $ionicLoading, $http, BaseSvc, FaturaSvc,$ionicPopup){
		var usuario = window.localStorage.getItem('usuario');
		if(!usuario)$location.path('login');
		$scope.faturas = new Array();
        BaseSvc.queryApi('realizados/')
			.then(function (response) {
				$scope.faturas = FaturaSvc.retornaListaFaturas(response.data);
				//console.log($scope.faturas);
			});
		var hoje = new Date();
		hoje = moment().format('');
		var inicio = new Date(moment().year(), moment().month() , 1)
		var mesquevem = moment(inicio).add(1, 'months').format('');
		BaseSvc.queryApi('compromissos/?data_gte=' + hoje + '&_sort=data&_order=ASC&_limit=1')
			.then(function (res) {
				$scope.evento = res.data;
				//console.log($scope.evento);	
			});
		BaseSvc.queryApi('compromissos/?data_gte=' + hoje + '&data_lte='+mesquevem+'&_sort=data&_order=ASC')
			.then(function (res) {
				$scope.totaleventos = res.data.length;
				console.log(mesquevem);

			});
		$scope.pagar = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Sucesso!',
                template: 'Foi enviado um email para você com o boleto para realizar o pagamento.'
            });

            alertPopup.then(function (res) {

            });
        };
	}
]);