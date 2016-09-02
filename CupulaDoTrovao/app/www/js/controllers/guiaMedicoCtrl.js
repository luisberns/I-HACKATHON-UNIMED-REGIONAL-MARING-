"use strict";
app.controller("GuiaMedicosCtrl", [
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
		vm.notaMaxima = 5;
		vm.readOnly = true;

		vm.pesquisando = function (pesquisa) {
			if (pesquisa === '') {
				vm.lista = [];
			} else {
				BaseSvc.queryApi('medico', 'q=' + pesquisa, true)
				.then(function(response){
					vm.lista = response.data;
				});
			}
		};

		vm.carregarMedico = function (id) {
			$location.path("medico/" + id);
		};

		return vm;
	}
]);