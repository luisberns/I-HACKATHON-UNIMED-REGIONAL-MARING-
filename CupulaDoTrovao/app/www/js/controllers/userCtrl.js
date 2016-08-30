"use strict";
app.controller("UserCtrl", [
	"$scope",
	"$stateParams",
	"$ionicLoading",
	"BaseSvc",
	"$ionicPopup",
	function ($scope, $stateParams, $ionicLoading, BaseSvc, $ionicPopup) {
		var vm = this;
		vm.carteirinha = "00970000012385420";

		BaseSvc.queryApi('cooperado', "q=", vm.carteirinha, true)
            .then(function (response) {
                vm.end = response.data[0];
            });
			
		vm.showConfirm = function () {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Envio de 2ª via',
				template: 'Deseja que enviemos a 2ª via de seu cartão no endereço atual?',
				buttons: [
					{ text: 'Não' },
					{
						text: 'Sim',
						type: 'button-positive',
						onTap: function (e) {
							var alertPopup = $ionicPopup.alert({
								title: 'Sucesso!',
								template: 'A 2ª via do cartão chegará logo em seu endereço!'
							});

							alertPopup.then(function (res) {

							});
						}
					}
				]
			});
		};

		vm.alterarDados = function () {
			var alertPopup = $ionicPopup.alert({
				title: 'Sucesso!',
				template: 'Seus dados foram alterados com sucesso!'
			});

			alertPopup.then(function (res) {

			});
		};

		return vm;
    }
]);