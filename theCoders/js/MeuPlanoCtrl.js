angular.module('app')
.controller('MeuPlanoCtrl', function($scope, $uibModal, Notification){
  var vm = this;

  var pessoas = [
    {
      id: 1,
      nome: "José Alvez Cardoso",
      numero: '084 1 000000002539',
      imagem: "doctor2.jpg",
      relacionamento: "Cooperado",
      statusCarteira: 1,
      status: 1,
      consumo: [
        {
          id: 1,
          nome: "Exame de fezes",
          data: '04/08/2016 09:00',
          local: 'Laboratório Santo Antônio',
          valor: '60.00',
          situacao: "Concluído"
        },
        {
          id: 3,
          nome: "Sessão de fisio terapia 1 de 5",
          data: '03/08/2016 12:00',
          local: 'Fisio Center',
          valor: '50.00',
          situacao: "Concluído"
        },
        {
          id: 4,
          nome: "Sessão de fisio terapia 2 de 5",
          data: '10/08/2016 12:00',
          local: 'Fisio Center',
          valor: '50.00',
          situacao: "Concluído"
        },
        {
          id: 5,
          nome: "Sessão de fisio terapia 3 de 5",
          data: '17/08/2016 12:00',
          local: 'Fisio Center',
          valor: '50.00',
          situacao: "Concluído"
        },
        {
          id: 6,
          nome: "Sessão de fisio terapia 4 de 5",
          data: '24/08/2016 12:00',
          local: 'Fisio Center',
          valor: '50.00',
          situacao: "Concluído"
        },
        {
          id: 2,
          nome: "Exame de sangue",
          data: '29/08/2016 16:00',
          local: 'Laboratório Santo Antônio',
          valor: '40.00',
          situacao: "Pendente"
        },
        {
          id: 7,
          nome: "Sessão de fisio terapia 5 de 5",
          data: '31/08/2016 12:00',
          local: 'Fisio Center',
          valor: '50.00',
          situacao: "Pendente"
        },
      ]
    },
    {
      id: 2,
      nome: "Julio Birllll Cardoso",
      numero: '084 1 000000002540',
      imagem: "bambam.jpg",
      statusCarteira: 0,
      relacionamento: "Filho",
      status: 1
    },
    {
      id: 3,
      nome: "Kelly Oliveira Cardoso",
      numero: '084 1 000000002541',
      imagem: "mulher1.jpg",
      statusCarteira: 1,
      relacionamento: "Esposa",
      status: 1
    },

  ]
  vm.pessoas = pessoas;


  vm.solicitar = function(id, nome){
    var pode = true;
    vm.pessoas.forEach(function(item){
      if(item.id == id && item.statusCarteira == 0){
        pode = false;
      }
    })
    if(!pode){
      return true;
    }
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'views/modal-confirm.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: 'lg',
      resolve: {
        msg: function () {
          return "Você realmente deseja solicitar a segunda via da carteirinha para " + nome + "?";
        },
        title: function(){
          return "Confirmação"
        }
      }
    })

    modalInstance.result.then(function(){
      var data = new Date();
      vm.pessoas.forEach(function(item, i){
        if(item.id == id){
          item.statusCarteira = 0;
          solicitacoes.push({
            id: solicitacoes.length + 1,
            tipo: "2ª Via da carteirinha - " + nome,
            data: data.toLocaleDateString() + ' ' +  data.toLocaleTimeString().slice(0,5),
            status: 0
          });
          Notification({message: '2ª Via da carteirinha solicitada!', title: 'Sucesso!'}, 'success');
          // Notification.success('');
        }
      })
    })
  }

  vm.remover = function(id, nome){
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'views/modal-confirm.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: 'lg',
      resolve: {
        msg: function () {
          return "Essa ação vai gerar uma solicitação para remoção do dependente, você realmente deseja remover o dependente  " + nome + "?";
        },
        title: function(){
          return "Atenção"
        }
      }
    });

    modalInstance.result.then(function(){
      vm.pessoas.forEach(function(item){
        var data = new Date();
        if(item.id == id){
          solicitacoes.push({
            id: solicitacoes.length + 1,
            tipo: "Remoção do dependente " + nome,
            data: data.toLocaleDateString() + ' ' +  data.toLocaleTimeString().slice(0,5),
            status: 0
          });
          Notification({message: 'Solicitação de remoção de dependente realizada!', title: 'Sucesso!'}, 'success');
          item.status = 0;
        }
      })
    });
  }

  vm.detalhes = function(id, consumo, nome){
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'views/modal-consumo.html',
      controller: 'ModalConsumoCtrl',
      controllerAs: '$ctrl',
      size: 'lg',
      resolve: {
        consumo: function () {
          return consumo
        },
        nome: function(){
          return nome;
        }
      }
    });
  }

})
.controller('ModalConsumoCtrl', function($uibModalInstance, consumo, nome){
  var $ctrl = this;
  $ctrl.consumo = consumo
  $ctrl.nome = nome;
  $ctrl.close = function(){
    $uibModalInstance.close();
  }
})
.controller('ModalInstanceCtrl', function ($uibModalInstance, msg, title){
  var $ctrl = this;
  $ctrl.msg = msg;
  $ctrl.title = title;

  $ctrl.cancel = function(){
    $uibModalInstance.dismiss();
  }

  $ctrl.ok = function(){
    $uibModalInstance.close();
  }
})
