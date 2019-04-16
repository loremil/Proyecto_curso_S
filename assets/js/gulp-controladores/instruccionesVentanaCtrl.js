//TOGGLE
cursosApp.controller('instruccionesVentanaCtrl', function($scope) {
  $scope.btnAutorizacion = true;
  $scope.cancelar = function(event) {
    $scope.autorizar = false;
    $scope.rechazar = false;
    $scope.autorizadores = false;
    event.stopPropagation();
  };

  $scope.autorizadores = false;
  $scope.verAutorizadores = function(event) {
    $scope.autorizadores = !($scope.autorizadores); //el ng-show que despliega el event
    $scope.rechazar = false;
    $scope.autorizar = false;
    event.stopPropagation();
  };

  $scope.autorizar = false;
  $scope.verForAutorizar = function(event) {
    $scope.btnAutorizacion = true;
    $scope.btnConfirmacion = true;
    $scope.autorizar = !($scope.autorizar);
    $scope.rechazar = false;
    $scope.autorizadores = false;
    event.stopPropagation();
  };
  $scope.rechazar = false;
  $scope.verForRechazar = function(event) {
    $scope.btnAutorizacion = true;
    $scope.btnConfirmacion = true;
    $scope.rechazar = !($scope.rechazar);
    $scope.autorizadores = false;
    $scope.autorizar = false;
    event.stopPropagation();
  };
  $scope.autorizadores = false;
  $scope.verMejoresofertas = function(event) {
    $scope.mejoresofertas = !($scope.mejoresofertas);
    event.stopPropagation();
  };


});
