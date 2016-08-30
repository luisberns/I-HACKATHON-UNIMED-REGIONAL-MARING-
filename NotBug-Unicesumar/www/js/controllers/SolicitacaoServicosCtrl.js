app.controller('SolicitacaoServicosCtrl', function($scope, $ionicPopup, $timeout, $location) {
   
  $scope.showConfirm = function(res) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Prezado Cliente!',
      template: 'Para a realização da emissão da segunda via do seu cartão, será debitado em sua próxima fatura um valor de R$ 5,38 referente aos custos. Deseja Confirmar ?'
    });
    
    confirmPopup.then(function(res) {
       if (!res) { 
         $location.path('/app/solicitacaoServicos');
       }
     });
   };
});