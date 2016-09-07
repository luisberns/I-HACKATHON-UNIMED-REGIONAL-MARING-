"use strict";
app.controller("AgendaCtrl", [
	"$scope",
	"$location",
	"$stateParams",
	"$ionicLoading",
	"BaseSvc",
	function($scope, $location, $stateParams, $ionicLoading, BaseSvc){
		var usuario = window.localStorage.getItem('usuario');
		if(!usuario)$location.path('login');

		$scope.meses = [];
		$scope.lista = [];
		$scope.mes = {};
		BaseSvc.queryApi('compromissos')
		.then(function(response){
			angular.forEach(response.data, function(item){
				var mes = parseInt(moment(item.data).format("M"))-1;
				var has = $scope.meses.filter(function(f){return f.key == mes}).length > 0;
				if(!has){
					$scope.meses.push({
						key:mes,
						label: moment().month(mes).format("MMMM")
					});
				}
			});
			$scope.lista = response.data;
			var mesAtual = $scope.lista.filter(function(item){
					return parseInt(moment(item.data).format("M"))-1 == $scope.meses[0].key
				});

			$scope.dias = groupByDate(mesAtual);
			$scope.mes = $scope.meses[0];
			console.log($scope.dias);
		});

		var groupByDate = function groupByDate(data){
			var grouped = {};
			angular.forEach(data, function(d){
				var actualDay = new Date(d.data).getDate();
				if ( !grouped[actualDay] ){
					grouped[actualDay] = [];
				}
				grouped[actualDay].push(d);
			});
			return grouped;
		};
		$scope.change = function(mes){
			var mesAtual = $scope.lista.filter(function(item){
					return parseInt(moment(item.data).format("M"))-1 == mes.key
				});

			$scope.dias = groupByDate(mesAtual);
		}
	}
])
;