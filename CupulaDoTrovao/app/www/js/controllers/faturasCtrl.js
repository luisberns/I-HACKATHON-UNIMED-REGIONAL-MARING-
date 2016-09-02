"use strict";
app.controller("FaturasCtrl", [
	"$scope",
	"$location",
	"$stateParams",
	"$ionicLoading",
	"BaseSvc",
    "FaturaSvc",
	"$ionicModal",
	"$ionicPopup",
	function($scope, $location, $stateParams, $ionicLoading, BaseSvc, FaturaSvc, $ionicModal, $ionicPopup){
		var usuario = window.localStorage.getItem('usuario');
		
		$scope.fatura = {};
		$scope.faturas = new Array();
		
		if(!usuario)$location.path('login');

        BaseSvc.queryApi('realizados')
			.then(function(response){
				$scope.faturas = FaturaSvc.retornaListaFaturas(response.data);

				console.log($scope.faturas);
			});

		$ionicModal.fromTemplateUrl('templates/mod-fatura.html', function(modal) {
			$scope.modal = modal;
		},{
			scope: $scope,
			animation: 'slide-in-up'
		});

		$scope.abrirFatura = function(fat){
			$scope.abrirModal($scope.modal);
			$scope.fatura = fat;
		};

		$scope.abrirModal = function(md){
			md.show();
		};
		$scope.fecharModal = function(md){
			md.hide();
		};
		$scope.enviarFatura = function(){
			$ionicPopup.alert({
                title: 'Sucesso!',
                template: 'Foi enviado um email para você com a fatura detalhada.'
            });
		};
		$scope.pagar = function(){
			$ionicPopup.alert({
                title: 'Sucesso!',
                template: 'Foi enviado um email para você com o boleto para realizar o pagamento.'
            });
		};
	}
]);