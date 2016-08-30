<!DOCTYPE html>
<html>
  <head>
    
    
      <title>Minha Unimed</title>
    
    <meta charset="utf-8">
    


    <link data-require="bootstrap-css@3.1.1" data-semver="3.1.1" rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript">
  <meta name="author" content="Hege Refsnes">
  <script data-require="angular.js@1.3.0" data-semver="1.3.0" src="https://code.angularjs.org/1.3.0/angular.js"></script>
  <script data-require="jquery@*" data-semver="2.0.3" src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
  <script data-require="bootstrap@3.1.1" data-semver="3.1.1" src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
  <script src="js/script.js"></script>
  <script src="js/dirPagination.js"></script>
  <link rel="stylesheet" href="css/style.css" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="css/font-awesome.css" media="screen" title="no title" charset="utf-8">
    
      <style>
	#main_container { 
	
	
	background-image: url(img/bg_login2.jpg);
	height: 700px;
    background-size: cover;
    width: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
	
	}
	
	
	</style>
    
  </head>
  <body>
  
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
    
    
    
    
    <br><br><br><br>
<div class="container">
<br><br>
<div style="float:right; margin-right:80px; width:860px; border:solid 0px; padding-left:10px;">
    <div class="row vertical-offset-100" style="width:180%">
    	<div class="col-md-4 col-md-offset-4">
    		<div class="panel panel-default">
			  	<div class="panel-heading" style="font-size:18px;">
			    	  <strong>Registre seus dados</strong>
			 	</div>
			  	<div class="panel-body">
			    	
                    
                     <form accept-charset="UTF-8" role="form" action="painel.php"  method="POST">
                    
                    <fieldset>
                    
                    
                    <?php
					$valor  = $_POST['Convenio'];
					
					?>
                    
                    
                    
                  <div class="form-group" >
			      <input class="form-control" placeholder="Convenio" name="Convenio" type="text">
                  </div>
                  
                  
                  
                  <?php
                  
                            if($valor !="" )
					{
					?>
					
					 <div style="font-size:15px;">
                    Olá <b>Urbano Esteves</b>,</br>
                    agora vamos cadastrar a sua senha...
                    
                    </div> </br> 
                    
                     
                  <div class="form-group">
			      <input class="form-control" placeholder="Password" name="password" type="password" value="">
			      </div>
                   <?php     
                  }
                   
				   ?>     
                        
			    		<div class="checkbox">
			    	    	<label>
			    	    		<a href="index.php">Voltar</a>
			    	    	</label>
			    	    </div>
			    		<input class="btn btn-lg btn-success btn-block" type="submit" value="Entrar">
			    	</fieldset>
			      	</form>
                    
                    
                    
                    
                    
                   
                    
                    
                    
			    </div>
			</div>
		</div>
	</div>

</div>

</div>
    
    </div><!-- fin main_container -->
    
    
    
  </body>
  </html>
