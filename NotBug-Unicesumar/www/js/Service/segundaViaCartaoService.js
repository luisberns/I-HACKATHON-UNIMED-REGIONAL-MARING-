app.service('segundaViaCartaoService', ['$http', '$window', function ($http, $window) {
        return {
            login: function (object) {
                return $http.post(urlApi+"/Sessao", object);
            },
            validate: function (object) {
                return $http.post('localhost:9090/logar/', object);
            },
            tokenRegister: function (token) {
                $window.sessionStorage.setItem(NAME_INDEX_STORAGE_TOKEN, token);
            },
            nomeRegister: function (nome){
                $window.sessionStorage.setItem(NAME_INDEX_STORAGE_NOME, nome);
            },
            logout: function () {
                $window.sessionStorage.setItem(NAME_INDEX_STORAGE_TOKEN, "");
                $window.sessionStorage.setItem(NAME_INDEX_STORAGE_NOME, "");
            },
            teste: function(object){
                return $http.post(urlApi+"/Sessao/teste", object);
            },
            recuperarNomeUsuarioLogado:function(){
                return $window.sessionStorage.getItem(NAME_INDEX_STORAGE_NOME);
            }
        };
    }]);