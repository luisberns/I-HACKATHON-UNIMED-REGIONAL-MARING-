"use strict";
app.controller("ProcedimentoCtrl", [
    "$scope",
    "$location",
    "$stateParams",
    "$ionicLoading",
    "$http",
    'ratingConfig',
    'BaseSvc',
    '$ionicHistory',
    function ($scope, $location, $stateParams, $ionicLoading, $http, ratingConfig, BaseSvc, $ionicHistory) {
		var usuario = window.localStorage.getItem('usuario');
		if(!usuario)$location.path('login');

        var vm = this;
        vm.id = $stateParams.id;
        vm.valorTotal = 0;

        vm.voltar = function () {
            $location.path('tab/procedimentos');
        };

        BaseSvc.queryApi('procedimentos', vm.id)
            .then(function (response) {
                vm.procedimento = response.data;
                vm.valorTotal = vm.procedimento.valor;

                if (vm.procedimento.requeridos !== undefined) {
                    var requeridos = vm.procedimento.requeridos;
                    vm.procedimento.requeridos = [];
                    for (var i = 0; i < requeridos.length; i++) {
                        var id = requeridos[i];
                        BaseSvc.queryApi('procedimentos', id)
                            .then(function (response2) {
                                vm.procedimento.requeridos.push(response2.data);
                                vm.valorTotal += response2.data.valor;
                            });
                    }
                } else {
                    vm.procedimento.requeridos = [];
                    vm.procedimento.requeridos.push({
                        id:1,
                        nome: "Nenhum registro encontrado",
                        valor: 0
                    });
                }
            });

        return vm;
    }
]);