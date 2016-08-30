"use strict";
app.controller("ProcedimentosCtrl", [
	"$scope",
	"$stateParams",
	"$ionicLoading",
	"$http",
	'ratingConfig',
	'BaseSvc',
	'$location',
	function($scope, $stateParams, $ionicLoading, $http, ratingConfig, BaseSvc, $location){
		var usuario = window.localStorage.getItem('usuario');
		if(!usuario)$location.path('login');

		var vm = this;
		vm.voltar = function () {
            $location.path('tab/procedimentos');
        };
		vm.pesquisando = function (pesquisa) {
			if (pesquisa === '') {
				vm.lista = [];
			} else {
				BaseSvc.queryApi('procedimentos', 'q=' + pesquisa, true)
				.then(function(response){
					vm.lista = response.data;
				});
			}
		};

		vm.carregarProcedimento = function (id) {
			$location.path("procedimento/" + id);
		};

		return vm;
	}
]);