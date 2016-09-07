angular.module('centralCliente', [])
    .service('NewsService', function($http) {

        return {getNews: getNews};

        function getNews() {
            return $http.get('http://localhost:8080/news');
        }
});

