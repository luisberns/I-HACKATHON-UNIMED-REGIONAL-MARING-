<!DOCTYPE html>
<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <title>Minha Unimed</title>
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
    <img src="img/logo.png" alt="" />
    <h2 class="title">Cuidar <i class="fa fa-heartbeat" aria-hidden="true"></i></h2>
    <ul class="social pull-right">
      <li><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
      <li><i class="fa fa-twitter-square" aria-hidden="true"></i></li>
      <li><i class="fa fa-youtube-play" aria-hidden="true"></i></li>
    </ul>
  </header>


    <div id="main_container">
      <div class="container pagina-top">
          <div class="row vertical-offset-100">
          	<div class="col-md-5 col-xs-12 pull-right">
          		<div class="panel panel-default">
      			  	<div class="panel-heading" style="font-size:18px;">
      			    	  <h3 class="text-center">Faça seu acesso</h3>
  			 	       </div>
    			  	<div class="panel-body">
      			  <form accept-charset="UTF-8" role="form" action="painel.php"  method="post">
              <fieldset>
                <div class="form-group">
                  <input class="form-control" placeholder="N° de inscrição" name="Convenio" type="text">
                </div>
  			    		<div class="form-group" ng-hide="passwordUser == false">
  			    			<input class="form-control" placeholder="Senha" name="Password" type="password" value="">
  			    		</div>
			    		<div class="checkbox">
			    	    	<label>
			    	    		<a href="user_register.php" ng-click="passwordUser = false" ng-hide='passwordUser == false'>Primeiro Acesso</a>
                    <a href="#" ng-show='passwordUser == false' ng-click='passwordUser = true'>Voltar</a>
			    	    	</label>
			    	    </div>
			    		<input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
			    	</fieldset>
		      	</form>
			    </div>
			</div>
		</div>

</div>

</div>

    </div><!-- fin main_container -->



  </body>
  </html>
