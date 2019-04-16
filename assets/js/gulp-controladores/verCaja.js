cursosApp.controller('VerCaja', function($scope) {
  $scope.verdeposito = false;
  $scope.deposito = function(event) {
    $scope.verdeposito = !($scope.verdeposito);
    event.stopPropagation();
    $scope.verretiro = false;
  };

  $scope.verretiro = false;
  $scope.retiro = function(event) {
    $scope.verretiro = !($scope.verretiro);
    event.stopPropagation();
    $scope.verdeposito = false;
  };
});
