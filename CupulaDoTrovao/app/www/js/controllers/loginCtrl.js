"use strict";
app.controller("LoginCtrl", [
	"$scope",
    "$location",
	"$stateParams",
	"$ionicLoading",
    "$ionicPopup",
	"BaseSvc",
	function($scope, $location, $stateParams, $ionicLoading, $ionicPopup, BaseSvc){
        window.localStorage.removeItem('usuario');
        $scope.usuario = {};
        $scope.entrar = function(usuario){
            if(usuario.cartao){
                window.localStorage.setItem('usuario',usuario.cartao);
                $location.path('inicio');
            }else{
                $ionicPopup.alert({
                    title: "Aviso",
                    template: "Deve ser informado o número do cartão"
                });
            }
        };
    }
]);