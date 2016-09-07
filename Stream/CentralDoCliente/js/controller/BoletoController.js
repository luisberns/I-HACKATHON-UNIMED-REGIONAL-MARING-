angular.module('centralCliente')
    .controller('BoletoController', function($scope){
        $scope.tituloPesquisa = 'Pesquisa rápida';

    $scope.boletos = [
    	{"mes": "Junho", "ano": "2016"},
    	{"mes": "Julho", "ano": "2016"},
    	{"mes": "Agosto", "ano": "2016"}
    ];

    $scope.faturaItens = [
    	{"vencimento": "01/08/2017", "detalhe":"Exame de sangue", "valor":"50,00", "dataOperacao":"05/07/2017"},
    	{"vencimento": "01/08/2017", "detalhe":"Exame de sangue", "valor":"10,00", "dataOperacao":"14/07/2017"},
    	{"vencimento": "01/08/2017", "detalhe":"Exame de sangue", "valor":"70,00", "dataOperacao":"21/07/2017"},
    	{"vencimento": "01/08/2017", "detalhe":"Mensalidade",     "valor":"70,00", "dataOperacao":"21/07/2017"}
    ];

    $scope.abrirBoleto = function(){
    	window.open('../../img/boleto_bb.png', '_blank');
    };

    $scope.calculaValorTotal = function(){
    	var valor =  $scope.faturaItens
    				 .map(valorDaFatura)
    	             .map(decimalBrasileiro)
    	             .reduce(soma,0);
        return 'R$'.concat(valor.toString().concat(',00'));
    }

    function soma(a,b){
    	return a + b;
    }

    function valorDaFatura(fatura){
    	return fatura.valor;
    }

    function decimalBrasileiro(str){
    	return (str || "").replace(',','.')*1 || 0;
    }
});
