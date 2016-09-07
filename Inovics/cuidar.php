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
      <div class="col-md-4 col-xs-2">
        <div class="menu-bar">
          <i class="fa fa-bars fa-2x" aria-hidden="true" ng-click="menu = !menu"></i>
        </div>
        <ul class="menu pull-left">
          <li><a href="http://172.20.254.250:8081/hackathon/painel.php">Especialidades</a></li>
          <li><a href="http://172.20.254.250:8081/hackathon/atendimento.php">Unidade Maringá</a></li>
        </ul>
      </div>
      <div class="col-md-4 col-xs-10 logo">
        <img src="img/logo.png" alt="" />
        <h2 class="title" onclick="history.go(-1)">Cuidar <i class="fa fa-heartbeat" aria-hidden="true"></i></h2>
      </div>
      <div class="col-md-4">
        <ul class="social pull-right">
          <li><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
          <li><i class="fa fa-twitter-square" aria-hidden="true"></i></li>
          <li><i class="fa fa-youtube-play" aria-hidden="true"></i></li>
        </ul>
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
          <li class="hide-list" ng-click="rota('painel')"><i class="fa fa-ambulance" aria-hidden="true"></i> Especialidades</li>
          <li class="hide-list" ng-click="rota('atendimento')"><i class="fa fa-hospital-o" aria-hidden="true"></i> Unidade Maringá</li>
		  <li><i class="fa fa-medkit" aria-hidden="true"></i> Ficha Médica</li>
		  <li><i class="fa fa-folder-open-o" aria-hidden="true"></i> Minhas Faturas</li>
          <li><i class="fa fa-user" aria-hidden="true"></i> Editar Perfil</li>
          <li><i class="fa fa-sign-out" aria-hidden="true"></i> Sair</li>
        </ul>
      </div>
    </div>
    <div class="col-md-offset-3 col-md-6 col-xs-12 plano-cuidar pagina-top">
      <i class="fa fa-heartbeat fa-3x" aria-hidden="true"></i>
      <h2>Cuidar faz parte da nossa missão!</h2>
      <h3>Nesta modalidade, uma clínica cooperada na especilidade {{especialidade}} entrará em contato com você oferecendo consulta especializada para os dias/horários que você escolheu ao fazer o seu cadastro.</h3>
      <div class="col-md-12 col-xs-12">
        <button type="button" name="button" class="btn btn-lg btn-warning" onclick="history.go(-1)">Recusar</button>
        <button type="button" name="button" class="btn btn-lg btn-info" ng-click="modalCuidarConfirma()">Aceitar</button>

      </div>
    </div>

    <div class="modal-alert" ng-if="modal == true">

    </div>
    <div class="col-md-offset-4 col-md-4 col-xs-12 text-center alert-sucesso" ng-if="modal == true">
      <h3 >Sua solicitação de atendimento foi efetuada com sucesso</h3>
      <h4>Em breve um funcionário de alguma das clínicas cooperada entrará em contato com você</h4>
      <h4 class="slogan">
        Unimed Maringá | Cuidar de você. Esse é o plano
        <i class="fa fa-smile-o" aria-hidden="true"></i>
        <i class="fa fa-smile-o" aria-hidden="true"></i>
        <i class="fa fa-smile-o" aria-hidden="true"></i>
      </h4>
      <button type="button" name="button" class="btn btn-info" ng-click='fechar()'>Fechar</button>
    </div>
    </body>
  </html>
