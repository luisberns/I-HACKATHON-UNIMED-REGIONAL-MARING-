app.service('solicitacaoServicosService', ['$http', '$window', function ($http, $window) {
        return {
            recuperarProgramas: function () {
                var programas = [
                    {
                        id:1,
                        nome: 'teste',
                        descricao: 'teste da descricao'
                    }
                ]

                return programas;

                //return $http.post(urlApi+"/Sessao", object);
            }
        };
    }]);