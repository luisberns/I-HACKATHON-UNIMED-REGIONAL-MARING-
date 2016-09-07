angular.module('centralCliente')
    .service('NotificationService', function($http) {

        return {getNotifications: getNotifications};

        function getNotifications() {
            return $http.get('http://localhost:8080/notification');
        }
});

