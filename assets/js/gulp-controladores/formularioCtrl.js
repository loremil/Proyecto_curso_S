cursosApp.controller('formularioCtrl', function($scope) {
  var active = false;
  $scope.user = {
    monto: '460.000',
    monto2: '20.000',
    alaCartera: 'Cartera Controlada E',
    total: '480.080',
    total2: '620.000',
    total3: '320.000',
    usar: '462.020',
    alias: 'Pago a proveedor 1',
    pesos: '403.323',
    pesos2: '10.000.000',
    dolar2: '14.773,00',
    total0: '0',
    usd: 'USD',
  };
  $scope.setButton = function() {
    if (active == true) {
      active = false;
    } else {
      active = true;
    }
  };
  $scope.getState = function() {
    if (active) {
      return true;
    } else {
      return false;
    }
  };
  $scope.isActive = function() {
    if ($scope.pagarDesde == "2") {
      return true;
    } else {
      return false;
    }
  };

});
