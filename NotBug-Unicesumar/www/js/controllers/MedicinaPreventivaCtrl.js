app.controller('MedicinaPreventivaCtrl', function ($ionicLoading, $scope, $stateParams , ionicMaterialInk, medicinaPreventivaService, $location) {

	var cancaoNinas = {
		cor: '#a73690',
		titulo: 'Canção de Ninar ',
		descricaoRapida:'O Programa "Canção de Ninar" está voltado para a garantia da qualidade de vida das futuras mamães e seus bebês.',
		descricaoLonga: 'O Canção de Ninar - Curso para gestantes - específico para gestantes Unimed Maringá e um acompanhante, tem duração de três noites e acontece a cada dois meses. O objetivo do curso é fornecer as gestantes informações e orientações para melhor compreensão em relação às modificações físicas e emocionais que ocorrem na gestação, bem como, a importância da amamentação exclusiva até os primeiros seis meses de vida e os cuidados básicos com o recém-nascido.  Após o nascimento do bebê é realizado pela enfermagem um acompanhamento nos 30 primeiros dias de vida do bebê para auxiliar a puérpera no momento da amamentação. A equipe que ministra o curso é composta por pediatra, enfermeira, psicóloga e nutricionista.',
		telefone: '',
		latidude: '',
		longitude: ''
	};
	var saudeEmpresarial = {
		cor: '#009b62',
		titulo: 'Saúde Empresarial ',
		descricaoRapida:'O Programa "Saúde Empresarial" visa proporcionar medidas reventivas de saúde aos funcionários das empresas contratantes.',
		descricaoLonga: 'A equipe do Programa de Medicina Preventiva faz contato com representantes das empresas contratantes para apresentar a proposta do Saúde Empresarial. Com a aceitação por parte dos diretores da empresa, inicia-se o desenvolvimento de análises de dados para que se tenha um diagnóstico sobre as condições de saúde dos trabalhadores e então planejadas ações que tragam benefícios à saúde da equipe.',
		telefone: '',
		latidude: '',
		longitude: ''
	};
	var sempreBem = {
		cor: '#b3d452',
		titulo: 'Sempre Bem ',
		descricaoRapida:'O Programa "Sempre Bem" é dirigido à orientação e ao acompanhamento dos clientes, promovendo assim a melhoria de sua saúde.',
		descricaoLonga: 'O programa “Sempre Bem” se desenvolve através da realização de reuniões periódicas com clientes Unimed, em grupos que são divididos de acordo com as patologias como, hipertensão, diabetes, obesidade, doenças cardiovasculares entre outros. Os participantes desse programa recebem orientações nutricionais, realizam atividades físicas em grupo, em ambiente externo e na Clínica de Fisioterapia própria, da Unimed e participam de palestras educativas realizadas por profissionais especializados em diversas áreas, objetivando uma melhor qualidade de vida e buscando diminuir os agravos e complicações de doenças crônicas.',
		telefone: 'As inscrições podem ser feitas pelo telefone (44) 3227-2724',
		latidude: '',
		longitude: ''
	};
	var temVida = {
		cor: '#ee2f5a',
		titulo: 'Tem Vida ',
		descricaoRapida:'O Programa "Tem Vida" proporciona melhoria na qualidade de vida dos clientes da terceira idade.',
		descricaoLonga: 'O “Tem Vida” , como o próprio nome diz, tem como objetivo, mostrar as belezas da Melhor Idade, sobre um olhar de saudabilidade e felicidade, fazendo com que os participantes do grupo encontrem e evidenciem bem-estar e prazer nesta fase da vida',
		telefone: 'Fale com o "Tem Vida": (44) 3227-2724',
		latidude: '',
		longitude: ''
	};
	var reealimentacao = {
		cor: '#f37d35',
		titulo: 'Reealimentação Empresarial ',
		descricaoRapida:'O programa "Reeducação Alimentar" é voltado à orientação dos clientes por meio de orientações nutricionais e acompanhamento psicológico em grupo.',
		descricaoLonga: 'Para os clientes Unimed a partir dos 8 anos de idade, a Medicina Preventiva oferece o programa Reeducação Alimentar, que auxilia na melhoria da qualidade de vida, por meio de orientações nutricionais e acompanhamento psicológico em grupo, que contribui para a mudança dos hábitos alimentares.',
		telefone: 'Informações pelo telefone: (44) 3227-2724',
		latidude: '',
		longitude: ''
	};


    if($stateParams.tipoSolicitacao && $stateParams.tipoSolicitacao == "detalhe"){
    	if($stateParams.id == 1){
    		$scope.programa = cancaoNinas;
    	}else if($stateParams.id == 2){
			$scope.programa = saudeEmpresarial;
    	}else if($stateParams.id == 3){
    		$scope.programa = sempreBem;
    	}else if($stateParams.id == 4){
    		$scope.programa = temVida;
    	}else if($stateParams.id == 5){
    		$scope.programa = reealimentacao;
    	}
    }	

    $scope.recuperarProgramas = function(){
    	return programas;
    }

    $scope.recuperarPrograma = function(){
    	return $scope.programa;
    }

    $scope.clickUsuario = function () {
    	$location.path('/app/medico');
    }

});