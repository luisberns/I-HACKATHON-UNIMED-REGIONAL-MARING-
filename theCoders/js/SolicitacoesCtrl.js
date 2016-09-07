angular.module('app')
.controller('SolicitacoesCtrl', function($uibModal, Notification){
  var vm = this;
  vm.solicitacoes = solicitacoes;

  vm.nova = function(){
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'views/modal-solicitacao.html',
      controller: 'ModalSolicitacaoCtrl',
      controllerAs: '$ctrl',
      size: 'lg'
    });

    modalInstance.result.then(function(solicitacao){
      var data = new Date();
      vm.solicitacoes.push({
        id: vm.solicitacoes.length + 1,
        tipo: solicitacao.tipo,
        data: data.toLocaleDateString() + ' ' +  data.toLocaleTimeString().slice(0,5),
        status: 0
      })
      Notification({message: solicitacao.tipo + ' solicitada!', title: 'Sucesso!'}, 'success');
      // console.log(solicitacao);
    })
  }

})
.controller('ModalSolicitacaoCtrl', function($uibModalInstance){
  var $ctrl = this;

  $ctrl.tipos = [
    {
      id: 1,
      tipo: "Alteração de conta bancaria",
      obs: 'Enviar comprovante bancario'
    },
    {
      id: 2,
      tipo: "Alteração de Endereço",
      obs: 'Enviar comprovante de residência'
    }
  ]
  $ctrl.close = function(){
    $uibModalInstance.dismiss();
  }

  $ctrl.solicitar = function(){
    $uibModalInstance.close($ctrl.solicitacao);
  }
})
