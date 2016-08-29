var mockDataForThisTest = "json=" + encodeURI(JSON.stringify([
    {
    id: 1,
    firstName: "Peter",
    lastName: "Jhons"},
{
    id: 2,
    firstName: "David",
    lastName: "Bowie"}
]));
var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http, $rootScope) {

  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.meals = [];



  var especialidades = [
    'Cardiologia',
    'Ginecologia',
    'Geriatria',
    'Obstetrícia',
    'Oncologia',
    'Acupuntura',
    'Neurologia',
    'Dermatologia',
    'Endoscopia',
    'Homeopatia',
    'Mastologia',
    'Urologia',
    'Infectologia'
  ];

  var especialidadesUnimed = [
    'Fisioterapia Motora',
    'Nutrição',
    'Psicologia',
    'Terapia Ocupacional',
    'Fisioterapia Neorológica'
  ];

  $scope.listaEspecialidadesUnimed = especialidadesUnimed;

  $scope.escolherPlano = function(opcao) {
    if (opcao == 'cuidar') {
      window.location.assign("http://172.20.254.250:8081/hackathon/cuidar.php")
    }else {
      window.location.assign("http://172.20.254.250:8081/hackathon/medicos.php")
    }
  }

  $scope.rota = function(destino) {
      window.location.assign("http://172.20.254.250:8081/hackathon/" + destino + '.php');
  }

  $scope.listaEspecialidades = especialidades;

  $scope.selecionaEspecialidade = function(nome) {
    $rootScope.especialidade = nome;
    }
  var httpRequest = $http({
              method: 'POST',
              url: 'js/medicos.json',
              data: mockDataForThisTest

          }).success(function(data, status) {
              $scope.listaMedicos = data;
          });

    var httpRequest = $http({
                method: 'POST',
                url: 'js/usuario.json',
                data: mockDataForThisTest

            }).success(function(data, status) {
                $scope.listaUsuarios = data;
            });

            var httpRequest = $http({
                        method: 'POST',
                        url: 'js/horarios.json',
                        data: mockDataForThisTest

                    }).success(function(data, status) {
                        $scope.listaHorarios = data;
                    });

            $scope.confirmaAtendimento = function(){
              var data = {
                "id": "2",
                "nome": "Joaquin Teste",
                "telefone": "44 32258686",
                "matricula": "Você",
                "endereco": "Mooca, 221",
                "email": "davi@accion.com.br",
                "plano": "AMB-ENF-OBS",
                "ativo": true
              }
              $scope.modal = true;
              $scope.listaUsuarios.push(data);
            }

            $scope.fechar = function(){
              $scope.modal = false;
              window.location.assign("http://172.20.254.250:8081/hackathon/painel.php");
            }

            $scope.fecharModal = function(){
              $scope.modal = false;
            }

            $scope.modalCuidarConfirma = function(){
              $scope.modal = true;
            }

            $scope.editarHorarios = function(status) {
              if (status == 2) {
                $scope.reagendar();
              }else if(status == 3){
                $scope.cancelar();
              }else{
                $scope.ocupado();
              }
            }

            $scope.cancelar = function(){
              alert("Cancelado");
            }

            $scope.reagendar = function(){
              alert("Reagendar");
            }

            $scope.ocupado = function(){
              alert("Ocupado");
            }
            $scope.listaDias = [];
            $scope.loadDias = function(dia, periodo) {
              var data = {
                "dia": dia,
                'periodo': periodo
              }

              $scope.listaDias.push(data);
            }


}

myApp.controller('MyController', MyController);
