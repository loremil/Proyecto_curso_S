//actualizacion de datos
cursosApp.controller('ActualizacionController', function($scope) {
  $scope.show = [];
  $scope.showHints = true;
  $scope.toggleClick = function(view) {
     $scope.show[view] = !$scope.show[view] ;
  }
  $scope.tabLocked = true;

  $scope.isActive = function() {
    if ($scope.pagarDesde == "1") {
      return true;
    } else {
      return false;
    }
  }
  $scope.isActive = function() {
    if ($scope.invertirPactos) {
      return true;
    } else {
      return false;
    }
  }
  $scope.isActive = function() {
    if ($scope.Acciones) {
      return true;
    } else {
      return false;
    }
  }
  $scope.isActive = function() {
    if ($scope.Mve) {
      return true;
    } else {
      return false;
    }
  }
  $scope.demo = {
    showTooltip:'Conservador',
  };


  $scope.rut = {
      rut: '23.456.789-k'
  };
});
