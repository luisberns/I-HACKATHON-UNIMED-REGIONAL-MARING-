app.controller('SolicitarSenhaCtrl', function ($scope, $stateParams, ionicMaterialInk, PrincipalService, $ionicPopup, $timeout, $location ) {
// Triggered on a button click, or some other target
$scope.showPopup = function() {
  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    title: 'Unimed informa',
    subTitle: 'Solicitação enviada, você recebera sua senha em breve.',
    scope: $scope,
    buttons: [
      {
        text: 'OK',
        type: 'button-balanced',
        onTap: function() {
          $location.path('/app/login');
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });


 };


 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Unimed informa',
     type: 'button-balanced',
     template: 'Solicitação enviada, você recebera sua senha em breve'
   });

 };
});




