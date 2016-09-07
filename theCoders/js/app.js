angular.module('app', ['ui.router', 'ui.bootstrap', 'ui-notification'])
.config(function($stateProvider, $urlRouterProvider, NotificationProvider) {

  NotificationProvider.setOptions({
      delay: 10000,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'right',
      positionY: 'top'
  });

  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('desempenho', {
      url: "/desempenho",
      controller: 'HomeCtrl',
      templateUrl: "views/home.html"
    })
    .state('segunda-via', {
      url: '/segunda-via-carteirinha',
      templateUrl: 'views/segunda-via-carteirinha.html',
      controller:'MeuPlanoCtrl',
      controllerAs: 'vm'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'views/producao.html',
      controller:'ProducaoCtrl',
      controllerAs: 'vm'
    })
    .state('boletos', {
      url: '/boletos',
      templateUrl: 'views/boletos.html'
    })
    .state('regulamento-interno', {
      url: '/regulamento-interno',
      templateUrl: 'views/regulamento-interno.html'
    })
    .state('estatuto-social', {
      url: '/estatuto-social',
      templateUrl: 'views/estatuto-social.html'
    })
    .state('cid', {
      url: '/tabela-cid',
      templateUrl: 'views/cid.html',
      controller: 'CidCtrl',
      controllerAs: 'vm'
    })
    .state('consultas', {
      url: '/consultas',
      templateUrl: 'views/consultas.html'
    })
    .state('agenda-eventos', {
      url: '/agenda-eventos',
      templateUrl: 'views/agenda-eventos.html'
    })
    .state('reclamacoes-elogios', {
      url: '/reclamacoes-elogios',
      templateUrl: 'views/reclamacoes-elogios.html'
    })
    .state('votacoes', {
      url: '/votacoes',
      templateUrl: 'views/votacao.html'
    })
    .state('newsletter', {
      url: '/newsletter',
      templateUrl: 'views/newsletter.html'
    })
    .state('noticias', {
      url: '/noticias',
      templateUrl: 'views/noticias.html'
    })
    .state('noticia-single', {
      url: '/noticia-single',
      templateUrl: 'views/noticia-single.html'
    })
    .state('solicitacoes', {
      url: '/solicitacoes',
      templateUrl: 'views/solicitacoes.html',
      controller: 'SolicitacoesCtrl',
      controllerAs: 'vm'
    })
    .state('alterar-informacoes', {
      url: '/alterar-informacoes',
      templateUrl: 'views/alterar-informacoes.html'
    })
    .state('reclamacoes-elogios2', {
      url: '/reclamacoes-elogios2',
      templateUrl: 'views/reclamacoes-elogios2.html'
    })

})

//Status 0=Pendente, 1=Concluído
var solicitacoes = [
  {
    id: 1,
    tipo: "Troca de conta bancaria",
    data: '01/01/2016 10:00',
    status: 1
  },
  {
    id: 2,
    tipo: "Troca de CNAE",
    data: '04/01/2016 13:00',
    status: 1
  }
]
