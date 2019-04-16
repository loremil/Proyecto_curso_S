cursosApp.controller('VerAyudaFFMM', function($scope, $mdDialog) {
  $scope.mostrarProducto = true;
  $scope.mostrarSeleccion = function() {
    angular.element($("#formularioCtrl")).scope().mostrarProducto = true;
    $mdDialog.hide();
  };
  $scope.verFondos = false;
  $scope.todosFondos = function(event) {
    $scope.verFondos = !($scope.verFondos);
    event.stopPropagation();
    $scope.ayudaFondos = false;
  };

  $scope.ayudaFondos = true;
  $scope.ayuda = function(event) {
    $scope.ayudaFondos = !($scope.ayudaFondos);
    event.stopPropagation();
    $scope.verFondos = false;
  };

  $scope.hideExitoEmpresa = function() {
    $mdDialog.hide();
  }

  $scope.hidecarteraActiva = function() {
    $mdDialog.hide();
  }

  $scope.hideCaja = function() {
    $mdDialog.hide();
  }


  $scope.isActive = function() {
    if ($scope.pagarDesde == "1") {
      return true;
    } else {
      return false;
    }
  }
  $scope.isActive = function() {
    if ($scope.pagarDesde == "2") {
      return true;
    } else {
      return false;
    }
  }
  $scope.isActive = function() {
    if ($scope.pagarDesde == "3") {
      return true;
    } else {
      return false;
    }
  }


});
