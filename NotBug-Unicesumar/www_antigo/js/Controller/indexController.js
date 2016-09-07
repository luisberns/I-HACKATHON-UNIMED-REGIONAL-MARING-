app.controller('indexController', function($scope, $state) {
	$scope.paginaOutra = function(){
		$state.go('outra');
	}
})