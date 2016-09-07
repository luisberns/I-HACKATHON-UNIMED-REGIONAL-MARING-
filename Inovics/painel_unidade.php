<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <link data-require="bootstrap-css@3.1.1" data-semver="3.1.1" rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript">
  <meta name="author" content="Hege Refsnes">
  <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"/>

  <script data-require="angular.js@1.3.0" data-semver="1.3.0" src="https://code.angularjs.org/1.3.0/angular.js"></script>
  <script data-require="jquery@*" data-semver="2.0.3" src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
  <script data-require="bootstrap@3.1.1" data-semver="3.1.1" src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
  <script src="js/script.js"></script>
  <script src="js/dirPagination.js"></script>
  <link rel="stylesheet" href="css/style.css" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="css/font-awesome.css" media="screen" title="no title" charset="utf-8">
</head>

  <body ng-controller="MyController">
    <header>
      <div class="col-md-12 col-xs-12 logo">
        <img src="img/logo.png" alt="" />
        <h2 class="title" onclick="history.go(-1)">Cuidar <i class="fa fa-heartbeat" aria-hidden="true"></i></h2>
      </div>
      </div>
    </header>
    <div class="col-md-3 col-sm-3 col-xs-10 menu-user" ng-class="{menuShow: menu}">
      <button type="button" name="button" class="close-menu" ng-click="menu = false"><i class="fa fa-times fa-3x"></i></button>
      <div class="col-md-12 text-center">
        <img class="img-circle" src="img/urbano.jpg" alt="" />
        <h3 class="text-center">Urbano Esteves</h3>
      </div>
      <div class="col-md-12 col-xs-12">
        <ul class="opcoes-user">
          <li ng-click="rota('agendamentos')"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Agendamentos</li>
          <li><i class="fa fa-stethoscope" aria-hidden="true"></i> Exames</li>
          <li class="hide-list" ng-click="rota('painel')><i class="fa fa-ambulance" aria-hidden="true"></i> Especialidades</li>
          <li class="hide-list" ng-click="rota('atendimento')"><i class="fa fa-hospital-o" aria-hidden="true"></i> Unidade Maringá</li>
		  <li><i class="fa fa-medkit" aria-hidden="true"></i> Ficha Médica</li>
		  <li><i class="fa fa-folder-open-o" aria-hidden="true"></i> Minhas Faturas</li>
          <li><i class="fa fa-user" aria-hidden="true"></i> Editar Perfil</li>
          <li><i class="fa fa-sign-out" aria-hidden="true"></i> Sair</li>
        </ul>
      </div>
    </div>
    <div class="col-md-12 col-xs-12 pagina-top">
      <div class="col-md-12 col-xs-12 title">
        <h2 class="text-center"><i class="fa fa-hospital-o" aria-hidden="true"></i> Pronto Atendimento Unimed</h2>
        <h3 class="text-center">Pacientes aguardando atendimento com o clínico geral</h3>
      </div>
      <div class="col-md-12 col-xs-12">
        <div class="col-md-offset-2 col-md-8 col-xs-12">
          <div class="col-md-12 col-xs-12 list-users" dir-paginate="item in listaUsuarios | filter:especialidade | itemsPerPage: 10" ng-class="{ativo: item.ativo}">
            <h3 class="pull-left">Nome: {{item.nome}}</h3>
            <h3 class="pull-right status" ng-class="{pendente: item.status == 'Pendente'}">Status: {{item.status}}...</h3>
          </div>
        </div>

      </div>
      </div>
    </div>
    <div class="modal-alert" ng-if="modal == true">

    </div>
    <div class="col-md-offset-4 col-md-4 col-xs-12 text-center alert-sucesso" ng-if="modal == true">
      <h3 >Sua solicitação de atendimento foi efetuada com sucesso</h3>
      <h4>A previsão de atentedimento é de 50 minutos a partir de agora</h4>
      <h4>Ao chegar na unidade n]ao esqueça de fazer seu check-in no Totem da unidade</h4>
      <button type="button" name="button" class="btn btn-primary" ng-click='fechar()'>Fechar</button>
    </div>

      <!-- Modal -->
      <div class="modal fade pagina-top" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 class="text-center">Localização da Unidade</h3>
          </div>
          <div class="modal-body">
            <div class="col-md-12 col-xs-12 mapa">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.141416685434!2d-51.92778098440529!3d-23.419258162246315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd07577ec4f2d%3A0xd72a831180efd54e!2sUnimed+Maring%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1472372784833" width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
            <div class="col-md-12 col-xs-12 text-center">
              <h4 class="text-center">Você realmente deseja confirmar atendimento da unidade acima?</h4>
              <button type="button" name="button" class="btn btn-warning" data-dismiss="modal" aria-label="Close">Cancelar</button>
              <button type="button" name="button" class="btn btn-info" data-dismiss="modal" aria-label="Close" ng-click="confirmaAtendimento()">Confirmar</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </body>
  </html>
