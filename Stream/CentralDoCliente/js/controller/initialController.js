angular.module('centralCliente')
    .controller('InitialController', ['$scope', 'NewsService', 'NotificationService', '$timeout',
        function($scope, NewsService, NotificationService, $timeout){
        $scope.tituloPesquisa = 'Pesquisa rápida';
        $scope.news = [];
        $scope.notifications = [];

        $scope.getNews = function() {
            NewsService.getNews().then(function(data){
                $scope.news = data.data;
            });
        }();

        $scope.getNotifications = function() {
            NotificationService.getNotifications().then(function (data) {
                $scope.notifications = data.data;
                $timeout($scope.getNotifications, 5000);
            })
        }

}]);