cursosApp.controller('notificacionesSelectCtrl', function($scope, $mdPanel) {
  $scope.ver1 = true;
  $scope.mostrar1 = function() {
    $scope.ver1 = true;
    $scope.ver2 = false;
    $scope.ver3 = false
  }
  $scope.mostrar2 = function() {
    $scope.ver1 = false;
    $scope.ver2 = true;
    $scope.ver3 = false
  }
  $scope.mostrar3 = function() {
    $scope.ver1 = false;
    $scope.ver2 = false;
    $scope.ver3 = true
  }
  $scope.activeSelect = 'notificacion1';
});
