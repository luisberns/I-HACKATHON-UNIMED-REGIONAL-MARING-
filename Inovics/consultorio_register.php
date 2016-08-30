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
	
	
	background-image: url(img/bg_login1.jpg);
	height: 700px;
    background-size: cover;
    width: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
	
	}
	
	
	</style>
    
    
      <script>
function tecla(event){
// PARA VER QUE TECLA ESTA PRESIONADO
// alert(event.keyCode);

//VALIDO LA TECLA PRESIONADA
if(event.keyCode == 13){ //13 = ENTER

}
}
</script>


    
  </head>
  <body>
  
  <header>
    <div class="col-md-4 col-xs-2">
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
    
    
    <div id="main_container">
    
    
    
    
    <br><br>
<div class="container">
<br><br><br><br>
<div style="float:left; margin-left:-520px; width:860px; border:solid 0px; padding-left:10px;">
    <div class="row vertical-offset-100" style="width:180%">
    	<div class="col-md-4 col-md-offset-4">
    		<div class="panel panel-default">
			  	<div class="panel-heading" style="font-size:18px;">
			    	  <strong>Registre seus dados</strong>
			 	</div>
			  	<div class="panel-body">
			    	
                 <form accept-charset="UTF-8" role="form" action="consultorio_register2.php"  method="POST">
                     
                     
                     
                     
                    <fieldset>
                    
                    
                     <div class="form-group">
			    		    <input class="form-control" placeholder="CNPJ" name="CNPJ" type="text">
			    		</div>
                        
			    	  	
                        
        	    	
                        
			    		
                       
		                
                        
			    		<div class="checkbox">
			    	    	<label>
			    	    		<a href="index2.php">Voltar</a>
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
