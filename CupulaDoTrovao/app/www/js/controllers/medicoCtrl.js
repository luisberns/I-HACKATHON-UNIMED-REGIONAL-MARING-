"use strict";
app.controller("MedicoCtrl", [
    "$scope",
    "$location",
    "$stateParams",
    'ratingConfig',
    'BaseSvc',
    '$ionicPopup',
    function ($scope, $location, $stateParams, ratingConfig, BaseSvc, $ionicPopup) {
        var usuario = window.localStorage.getItem('usuario');
		if(!usuario)$location.path('login');
        
        var vm = this;
        vm.notaMaxima = 5;
        vm.readOnly = true;
        vm.id = $stateParams.id;

        vm.voltar = function () {
            $location.path('tab/guiamedicos');
        };

        BaseSvc.queryApi('medico', vm.id)
            .then(function (response) {
                vm.medico = response.data;
            });

        vm.pedirConsulta = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Sucesso!',
                template: 'Foi enviado um email para este médico informando que você deseja uma consulta. Em breve ele entrará em contato!'
            });

            alertPopup.then(function (res) {

            });
        };

        return vm;
    }
]);