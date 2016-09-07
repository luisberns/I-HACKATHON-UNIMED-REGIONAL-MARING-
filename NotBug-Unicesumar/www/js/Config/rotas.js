app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })

    //nossas rotas

    .state('app.principal', {
        url: '/principal',
        views: {
            'menuContent': {
                templateUrl: 'templates/principal.html',
                controller: 'PrincipalCtrl'
            }
        }
    })


    .state('app.atualizarDados', {
        url: '/atualizarDados',
        views: {
            'menuContent': {
                templateUrl: 'templates/atualizarDados.html',
                controller: 'AtualizarDadosCtrl'
            }
        }
    })

    .state('app.solicitacaoServicos', {
        url: '/solicitacaoServicos',
        views: {
            'menuContent': {
                templateUrl: 'templates/solicitacao-servicos.html',
                controller: 'SolicitacaoServicosCtrl'
            }
        }
    })


    .state('app.medicinaPreventiva', {
        url: '/medicinaPreventiva',
        views: {
            'menuContent': {
                templateUrl: 'templates/medicina-preventiva.html',
                controller: 'MedicinaPreventivaCtrl'
            }
        }
    })

    .state('app.segundaViaCartao', {
        url: '/segundaViaCartao',
        views: {
            'menuContent': {
                templateUrl: 'templates/segunda-via-cartao.html',
                controller: 'SegundaViaCartaoCtrl'
                 }
        }
    })  

    .state('app.detalhePrograma', {
        url: '/medicinaPreventiva/:tipoSolicitacao/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/detalheMedicinaPreventiva.html',
                controller: 'MedicinaPreventivaCtrl'
            }
        }
    })

    .state('app.segundaViaBoleto', {
        url: '/segundaViaBoleto',
        views: {
            'menuContent': {
                templateUrl: 'templates/segunda-via-boleto.html',
                controller: 'SegundaViaBoletoCtrl'

            }
        }
    })

    .state('app.carenciaPlano', {
        url: '/carenciaPlano',
        views: {
            'menuContent': {
                templateUrl: 'templates/carencia-plano.html',
                controller: 'CarenciaPlanoCtrl'
            }
        }

    })

    .state('app.solicitarSenha', {
        url: '/solicitarSenha',
        views: {
            'menuContent': {
                templateUrl: 'templates/solicitar-senha.html',
                controller: 'SolicitarSenhaCtrl'
            }
        }
    })

    .state('app.sintomas', {
        url: '/sintomas',
        views: {
            'menuContent': {
                templateUrl: 'templates/sintomas.html',
                controller: 'SintomasCtrl'
            }
        }
    })

    .state('app.listarMedicos', {
        url: '/listarMedicos',
        views: {
            'menuContent': {
                templateUrl: 'templates/listarMedicos.html',
                controller: 'ListarMedicosCtrl'
            }
        }
    })


    .state('app.mapa', {
        url: '/mapa',
        views: {
            'menuContent': {
                templateUrl: 'templates/mapa.html',
                controller: 'MapCtrl'
            }
        }
    })

    .state('app.financeiro', {
        url: '/financeiro',
        views: {
            'menuContent': {
                templateUrl: 'templates/financeiro.html',
                controller: 'FinanceiroCtrl'
            }
        }
    })

    .state('app.historico', {
        url: '/historico',
        views: {
            'menuContent': {
                templateUrl: 'templates/historico.html',
                controller: 'HistoricoCtrl'
            }
        }
    })

    .state('app.duvidas', {
        url: '/duvidas',
        views: {
            'menuContent': {
                templateUrl: 'templates/duvidas.html',
                controller: 'DuvidasCtrl'
            }
        }
    })



    .state('app.minhaAgenda', {
        url: '/minhaAgenda',
        views: {
            'menuContent': {
                templateUrl: 'templates/minhaAgenda.html',
                controller: 'AgendaCtrl'
            }
        }
    })

    .state('app.detalheAgenda/:id', {
        url: '/detalheAgenda/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/minhaAgenda.html',
                controller: 'AgendaCtrl'
            }
        }
    })

    .state('app.medico', {
        url: '/medico',
        views: {
            'menuContent': {
                templateUrl: 'templates/medico.html',
                controller: 'MedicoCtrl'
            }
        }
    })



    .state('app.mensagensDicas', {
        url: '/mensagensedicas',
        views: {
            'menuContent': {
                templateUrl: 'templates/mensagensedicas.html',
                controller: 'MensagensCtrl'
            }
        }
    })



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
