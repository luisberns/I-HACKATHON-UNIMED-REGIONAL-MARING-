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
    </div>
    <div class="col-md-4 col-xs-10 logo">
      <img src="img/logo.png" alt="" />
      <h2 class="title" onclick="history.go(-1)">Cuidar <i class="fa fa-heartbeat" aria-hidden="true"></i></h2>
    </div>
    <div class="col-md-4">
      <ul class="social pull-right">
        <li><i class="fa fa-youtube-play" aria-hidden="true"></i><a href="ead/index.html">
      <span style="font-size:16px">Aprenda a utilizar... É muito fácil!</span></a></li>
      </ul>
    </div>
  </header>

  <div class="col-md-3 col-sm-3 col-xs-10 menu-user" ng-class="{menuShow: menu}">
    <button type="button" name="button" class="close-menu" ng-click="menu = false"><i class="fa fa-times fa-3x"></i></button>
    <div class="col-md-12 text-center">
      <img class="img-circle" src="img/clinica.jpg" alt="" />
      <h3 class="text-center">Clinica UniCesumar</h3>
    </div>
    <div class="col-md-12 col-xs-12">
      <ul class="opcoes-user">
        <li><i class="fa fa-user" aria-hidden="true"></i> Editar Perfil</li>
        <li><i class="fa fa-sign-out" aria-hidden="true"></i> Sair</li>
      </ul>
    </div>
  </div>
  <div class="col-md-12 col-xs-12 pagina-top">
    <div class="col-md-12 col-xs-12 title">
      <h2 class="text-center">Agendamentos</h2>
      <h3 class="text-center">Verifique aqui as suas solicitações de agendamentos</h3>
      <div class="col-md-offset-4 col-md-4 col-xs-12 form-group filter-form">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input ng-model="especialidade" id="search" class="form-control" placeholder="Pesquise aqui">
      </div>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12">
      <table class="table table-hover">
		<thead>
			<tr>
			<th>Solicitação</th>
			<th>Nome</th>
			<th>Telefone</th>
			<th>Plano</th>
			<th>Status</th>
			<th>Agendamento</th>
			</tr>
		</thead>
		<tbody>
			<tr data-toggle="modal" data-target="#myModal">
				<td>28/08/2016 11:15</td>
				<td>Urbano Luiz Esteves</td>
				<td>44 32258686</td>
				<td>AMB-ENF-OBS</td>
				<td>Disponível</td>
				<td></td>
			</tr>
			<tr>
				<td>28/08/2016 12:23</td>
				<td>Davi Cicero</td>
				<td>44 32258686</td>
				<td>AMB-ENF-OBS</td>
				<td>Disponível</td>
				<td></td>
			</tr>
			<tr class="success">
				<td><b>28/08/2016 13:41</b></</td>
				<td><b>Renato Macera</b></</td>
				<td><b>44 32258686</b></</td>
				<td><b>AMB-ENF-OBS</b></</td>
				<td><b>Agendado</b></</td>
				<td><b>03/09/2016 14:30</b></</td>
			</tr>
			<tr class="danger">
				<td><b>28/08/2016 14:07</b></td>
				<td><b>Renan Francis</b></td>
				<td><b>44 32258686</b></td>
				<td><b>AMB-ENF-OBS</b></td>
				<td><b>Não Disponível</b></td>
				<td><b>XXXXXXXXX</b></td>
			</tr>
			<tr class="success">
				<td><b>28/08/2016 14:36</b></td>
				<td><b>Felipe Gazoli</b></td>
				<td><b>44 32258686</b></td>
				<td><b>AMB-ENF-OBS</b></td>
				<td><b>Agendado</b></td>
				<td><b>10/09/2016 08:15</b></td>
			</tr>
		</tbody>
	  </table>
	  </br>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade pagina-top" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title" id="myModalLabel">Agendamento de Consulta</h3>
      </div>
      <div class="modal2-body">
        <div class="col-md-12 col-xs-12 modal-container">
          <div class="col-md-6 col-xs-12">
            <div class="col-md-12 col-xs-12 cuidar">
              <h6>28/08/2016 11:15</h6>
			  <h3>Urbano Luiz Esteves</h3>
			  <h4>44 32258686</h4>
			  <h6>AMB-ENF-OBS</h6>
			  <h5>Disponível</h5>
			  </br>
            </div>
          </div>
        <div class="col-md-6 col-xs-12">
		  <div class="col-md-12 col-xs-12 escolher">
            <div class="form-group">
				<label for="date">Data de Agendamento</label>
				<input type="date" class="form-control" id="date" placeholder="Data">
			</div>
			<div class="col-md-12 col-xs-12 escolher">
				<div class="form-group">
					<label for="time">Hora de Agendamento</label>
					<input type="time" class="form-control" id="time" placeholder="Hora">
				</div>
			</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</body>
</html>
